<template>
  <v-data-table-server
    v-model:items-per-page="options.itemsPerPage"
    v-model:sort-by="options.sortBy"
    v-model:page="options.page"
    :headers="headers"
    :items="items"
    :items-length="total"
    :loading="loading"
    item-value="id"
    multi-sort
    @update:items-per-page="emit('onUpdateTable')"
    @update:sort-by="emit('onUpdateTable')"
    @update:page="emit('onUpdateTable')"
  >
    <template v-slot:item.actions="{ item }">
      <v-btn
        icon
        density="compact"
        variant="text"
        v-permission="['offices.edit', 'offices.delete']"
      >
        <v-icon>mdi-dots-vertical</v-icon>
        <v-menu activator="parent">
          <v-list density="compact">
            <v-list-item
              key="edit"
              value="edit"
              title="Editar"
              append-icon="mdi-pencil"
              v-permission="['offices.edit']"
            >
              <Form :formState="item" @on-success="emit('onUpdateTable')" />
            </v-list-item>
            <v-list-item
              key="delete"
              value="delete"
              title="Eliminar"
              class="text-red"
              append-icon="mdi-delete"
              v-permission="['offices.delete']"
            >
              <DialogConfirm
                title="Eliminar"
                message="¿Está seguro de eliminar este registro?"
                @on-confirm="
                  async () => {
                    if (await _deleteItem(item.id!)) {
                      emit('onUpdateTable');
                    }
                  }
                "
              />
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </template>
    <template v-slot:item.status="{ item }">
      <v-btn
        :color="item.status ? 'blue' : 'error'"
        text-color="white"
        density="compact"
        variant="tonal"
      >
        {{ item.status ? "Habilitado" : "Deshabilitado" }}
      </v-btn>
    </template>
  </v-data-table-server>
</template>

<script setup lang="ts">
import { type DataTableRequestDTO } from "@/common/models/DataTable.types";
import DialogConfirm from "@/common/ui/components/dialog/DialogConfirm.vue";

import { type OfficeDTO } from "@/app/modules/office/models/Office.types";
import { headers } from "@/app/modules/office/constants";
import { Form } from "@/app/modules/office/components";

import { _deleteItem } from "@/app/modules/office/services/office.services";

const emit = defineEmits(["onUpdateTable"]);
defineProps<{
  //   headers: DataTableHeaderDTO[];
  options: DataTableRequestDTO;
  items: OfficeDTO[];
  loading: boolean;
  total: number;
}>();
</script>
