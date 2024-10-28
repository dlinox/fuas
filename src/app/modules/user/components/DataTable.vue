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
      <v-btn icon density="compact" variant="text">
        <v-icon>mdi-dots-vertical</v-icon>
        <v-menu activator="parent">
          <v-list density="compact">
            <v-list-item
              key="permissions"
              value="permissions"
              class="text-subtitle-2"
              v-permission="['users.assign-permissions']"
            >
              <template #append>
                <v-icon size="small"> mdi-lock </v-icon>
              </template>
              Asignar permisos
              <AssignPermissions
                :permissions="item.permissions"
                :userId="item.id!"
              />
            </v-list-item>

            <v-list-item
              key="edit"
              value="edit"
              class="text-subtitle-2"
              v-permission="['users.edit']"
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
              v-permission="['users.delete']"
            >
              <template #append>
                <v-icon size="small" color="red"> mdi-delete </v-icon>
              </template>

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
              Eliminar
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

import { type UserDTO } from "@/app/modules/user/models/User.types";
import { headers } from "@/app/modules/user/constants";
import { Form, AssignPermissions } from "@/app/modules/user/components";

import { _deleteItem } from "@/app/modules/user/services/user.services";

const emit = defineEmits(["onUpdateTable"]);
defineProps<{
  //   headers: DataTableHeaderDTO[];
  options: DataTableRequestDTO;
  items: UserDTO[];
  loading: boolean;
  total: number;
}>();
</script>
