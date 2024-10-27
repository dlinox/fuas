<template>
  <v-dialog max-width="700" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card :title="form.id ? 'Editar Registro' : 'Nuevo Registro'">
        <v-card-item class="border-t border-b">
          <v-row>
            <v-col cols="12" md="6">
              <v-select
                v-model="form.documentType"
                :items="['DNI']"
                label="Tipo de documento"
                :rules="WorkerRules.documentType"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.documentNumber"
                label="Número de documento"
                :rules="WorkerRules.documentNumber"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.name"
                label="Nombre"
                :rules="WorkerRules.name"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.paternalLastName"
                label="Apellido paterno"
                :rules="WorkerRules.paternalLastName"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.maternalLastName"
                label="Apellido materno"
                :rules="WorkerRules.maternalLastName"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.email"
                label="Correo electrónico"
                :rules="WorkerRules.email"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.phoneNumber"
                label="Número de teléfono"
                :rules="WorkerRules.phoneNumber"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.birthDate"
                label="Fecha de nacimiento"
                type="date"
                :rules="WorkerRules.birthDate"
              />
            </v-col>

            <v-col cols="12">
              <v-select
                v-model="form.gender"
                :items="[
                  { title: 'Masculino', value: 'M' },
                  { title: 'Femenino', value: 'F' },
                ]"
                label="Género"
              />
            </v-col>

            <v-col cols="12">
              <v-select
                v-model="form.positionId"
                :items="positions"
                label="Cargo"
                item-title="title"
                item-value="value"
              />
            </v-col>

            <v-col cols="12">
              <v-select
                v-model="form.officeId"
                :items="offices"
                label="Oficina"
                item-title="title"
                item-value="value"
              />
            </v-col>

            <v-col cols="12">
              <v-switch
                :label="form.status ? 'Habilitado' : 'Deshabilitado'"
                v-model="form.status"
                color="blue-darken-4"
                inset
              />
            </v-col>
          </v-row>
        </v-card-item>
        <v-card-actions>
          <v-btn
            type="button"
            variant="text"
            color="secondary"
            @click="dialog = false"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text="Guardar"
            color="primary"
            type="submit"
            :loading="loading"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";

import { _loadSelect as _loadOfficeSelect } from "@/app/modules/office/services/office.services";
import { _loadSelect as _loadPositionSelect } from "@/app/modules/position/services/position.services";
import {
  type WorkerDTO,
  WorkerRules,
  initWorkerValues,
} from "../models/Worker.types";

import { _saveItem } from "@/app/modules/worker/services/worker.services";

const emit = defineEmits(["onSuccess"]);

const props = defineProps({
  formState: {
    type: Object as () => Partial<WorkerDTO>,
    default: () => ({}),
  },
});

const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const form = ref<WorkerDTO>({
  ...initWorkerValues(),
  ...props.formState,
});

const offices = ref<any[]>([]);
const positions = ref<any[]>([]);

const submit = async () => {
  loading.value = true;
  const response = await _saveItem(form.value);
  if (response) {
    emit("onSuccess");
    dialog.value = false;
  }
  loading.value = false;
};

const init = async () => {
  console.log("init");
  offices.value = await _loadOfficeSelect();
  positions.value = await _loadPositionSelect();
};
init();
</script>
