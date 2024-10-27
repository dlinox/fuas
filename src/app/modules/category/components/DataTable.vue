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
      <div class="d-flex align-center">
        <v-btn
          icon
          density="compact"
          color="black"
          variant="text"
          v-tooltip="'Servicios de ' + item.name"
        >
        <v-icon>mdi-format-list-bulleted-type</v-icon>
          <ServiceView />
        </v-btn>
        <v-btn icon density="compact" variant="text">
          <v-icon>mdi-dots-vertical</v-icon>
          <v-menu activator="parent">
            <v-list density="compact">
              <v-list-item
                key="edit"
                value="edit"
                append-icon="mdi-pencil"
                class="text-subtitle-2"
              >
                <template #append>
                  <v-icon size="small"> mdi-pencil </v-icon>
                </template>
                Editar
                <Form :formState="item" @on-success="emit('onUpdateTable')" />
              </v-list-item>
              <v-list-item
                key="delete"
                value="delete"
                class="text-red text-subtitle-2"
              >
                Eliminar
                <template #append>
                  <v-icon size="small" color="red"> mdi-delete </v-icon>
                </template>
                <DialogConfirm
                  title="Eliminar"
                  message="¿Está seguro de eliminar este registro?"
                  text-cancel="No"
                  text-confirm="Confirmar"
                  :loading="loading"
                  @on-confirm="() => deleteItem(item.id!)"
                />
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </div>
    </template>
    <template v-slot:item.type="{ item }">
      <v-chip
        :color="
          item.type === 'ASISTENCIAL' ? 'teal-darken-3' : 'blue-grey-darken-1'
        "
        text-color="white"
      >
        {{ item.type }}
      </v-chip>
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
import { type CategoryDTO } from "@/app/modules/category/models/Category.types";
import { headers } from "@/app/modules/category/constants";
import { Form } from "@/app/modules/category/components";
import { _deleteItem } from "@/app/modules/category/services/category.services";
import DialogConfirm from "@/common/ui/components/dialog/DialogConfirm.vue";
import { ref } from "vue";
import ServiceView from "../views/service.vue";
const emit = defineEmits(["onUpdateTable"]);

defineProps<{
  //   headers: DataTableHeaderDTO[];
  options: DataTableRequestDTO;
  items: CategoryDTO[];
  loading: boolean;
  total: number;
}>();

//deleteItem
const loading = ref<boolean>(false);

const deleteItem = async (id: number) => {
  loading.value = true;
  if (await _deleteItem(id)) {
    emit("onUpdateTable");
  }
  loading.value = false;
};
</script>
