<template>
  <v-dialog max-width="900" v-model="dialog" activator="parent">
    <v-card
      title="Servicios"
      subtitle="Gestion de servicios"
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
          <v-col
            cols="12"
            md="4"
            class="d-md-flex d-block justify-end text-end"
          >
            <v-btn class="h-md-auto me-2" :disabled="loading">
              nuevo
              <ServiceForm @onSuccess="reLoadDataTable" />
            </v-btn>
            <v-btn
              class="h-md-auto"
              density="comfortable"
              icon="mdi-reload"
              v-tooltip="'Recargar registros'"
              @click="init"
              :loading="loadingTable"
            >
            </v-btn>
          </v-col>
        </v-row>
      </v-card-item>

      <ServiceDataTable
        :options="request"
        :loading="loadingTable"
        :items="items"
        :total="totalItems"
        @onUpdateTable="reLoadDataTable"
      />
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { Ref, ref } from "vue";

import { _loadDataTable } from "../services/service.services";
import { DataTableRequestDTO } from "@/common/models/DataTable.types";
import { ServiceDataTable, ServiceForm } from "../components";
import { ServiceDTO } from "../models/Service.types";

import debounce from "@/common/utils/debounce";

const dialog = ref(false);
const loading = ref(false);
const loadingTable = ref(false);
const items = ref<ServiceDTO[]>([]);
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
