<template>
  <v-card title="Usuarios" subtitle="Gestión de usuarios" :disabled="loading">
    <v-card-item class="border-t border-b">
      <v-row class="d-flex justify-space-between">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="request.search"
            label="Buscar"
            clearable
            @input="reLoadDataTable"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="d-md-flex d-block justify-end text-end">
          <v-btn
            class="h-md-auto me-2"
            :disabled="loading"
            v-permission="['users.create']"
          >
            nuevo
            <Form @onSuccess="reLoadDataTable" />
          </v-btn>
          <v-btn
            class="h-md-auto"
            density="comfortable"
            icon="mdi-reload"
            v-tooltip="'Recargar registros'"
            @click="init"
            :loading="loadingTable"
            v-permission="['users.index']"
          >
          </v-btn>
        </v-col>
      </v-row>
    </v-card-item>

    <DataTable
      :options="request"
      :loading="loadingTable"
      :items="items"
      :total="totalItems"
      @onUpdateTable="reLoadDataTable"
      v-permission="['users.index']"
    />
  </v-card>
</template>
<script setup lang="ts">
import { Ref, ref } from "vue";
import { _loadDataTable } from "../services/user.services";
import { DataTableRequestDTO } from "@/common/models/DataTable.types";

import { DataTable, Form } from "../components";

import { UserDTO } from "../models/User.types";

const loading = ref(false);
const loadingTable = ref(false);
const items = ref<UserDTO[]>([]);
const totalItems = ref(0);

const request: Ref<DataTableRequestDTO> = ref({
  itemsPerPage: 10,
  sortBy: [],
  page: 1,
  search: "",
  filters: {},
});

const reLoadDataTable = async () => {
  loadingTable.value = true;
  const response = await _loadDataTable(request.value);
  items.value = response.data;
  totalItems.value = response.total as number;
  loadingTable.value = false;
};

const init = async () => {
  loading.value = true;
  await reLoadDataTable();
  loading.value = false;
};

init();
</script>
