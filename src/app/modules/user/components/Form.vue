<template>
  <v-dialog max-width="700" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card :title="form.id ? 'Editar Registro' : 'Nuevo Registro'">
    
        <v-card-item class="border-t border-b">
          <v-row>
            <v-col cols="12">
              <v-select
                v-model="form.workerId"
                label="Trabajador"
                :items="workers"
                :rules="UserRules.workerId"
              >
                <template v-slot:item="{ props, item }">
           
                  <v-list-item
                    v-bind="props"
                    :title="item.title"
                    :disabled="item.raw.hasUser == '1' ? true : false"
                  />
                </template>
              </v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="form.email"
                label="Correo electrónico"
                :rules="UserRules.email"
                autocomplete="off"
              />
            </v-col>

            <v-col cols="12" v-if="!form.id">
              <v-text-field
                v-model="form.password"
                label="Contraseña"
                :rules="UserRules.password"
                type="password"
                autocomplete="new-password"
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
import { type UserDTO, UserRules, initUserValues } from "../models/User.types";

import { _saveItem } from "@/app/modules/user/services/user.services";

import { _loadSelect as _loadWorkerSelect } from "@/app/modules/worker/services/worker.services";

const emit = defineEmits(["onSuccess"]);

const props = defineProps({
  formState: {
    type: Object as () => Partial<UserDTO>,
    default: () => ({}),
  },
});

const formRef = ref<HTMLFormElement | null>(null);
const loading = ref<boolean>(false);
const dialog = ref<boolean>(false);

const form = ref<UserDTO>({
  ...initUserValues(),
  ...props.formState,
});

const workers = ref<any[]>([]);
const submit = async () => {
  const { valid } = await formRef.value!.validate();

  console.log(form.value);
  if (!valid) return;
  const response = await _saveItem(form.value);
  if (response) {
    if (form.value.id == null) {
      formRef.value!.reset();
    }

    emit("onSuccess");
    dialog.value = false;
  }
  loading.value = false;
};

const init = async () => {
  workers.value = await _loadWorkerSelect();
};

init();
</script>
