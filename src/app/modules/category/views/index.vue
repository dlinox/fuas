<template>
  <v-card
    title="Categorías"
    subtitle="Gestion de categorías"
    :disabled="loading"
  >
    <v-card-item class="border-t border-b">
      <v-row class="d-flex justify-space-between">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="request.search"
            label="Buscar"
            clearable
            @input="debouncedReload"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4" class="d-md-flex d-block justify-end text-end">
          <v-btn 
          v-permission="['categories.create']"
          class="h-md-auto me-2" :disabled="loading">
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
            v-permission="['categories.index']"
          >
          </v-btn>
        </v-col>
      </v-row>
    </v-card-item>

    <DataTable
      v-permission="['categories.index']"
      :options="request"
      :loading="loadingTable"
      :items="items"
      :total="totalItems"
      @onUpdateTable="reLoadDataTable"
    />
  </v-card>
</template>
<script setup lang="ts">
import { Ref, ref } from "vue";
import { _loadDataTable } from "../services/category.services";
import { DataTableRequestDTO } from "@/common/models/DataTable.types";

import { DataTable, Form } from "../components";

import { CategoryDTO } from "../models/Category.types";

import debounce from "@/common/utils/debounce";

const loading = ref(false);
const loadingTable = ref(false);
const items = ref<CategoryDTO[]>([]);
const totalItems = ref(0);

const request: Ref<DataTableRequestDTO> = ref({
  itemsPerPage: 10,
  sortBy: [],
  page: 1,
  search: "",
  filters: {},
});

const debouncedReload = debounce(() => {
  reLoadDataTable();
}, 400);

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
