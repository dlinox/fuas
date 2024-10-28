<template>
  <v-dialog max-width="1000" v-model="dialog" activator="parent">
    <v-form ref="formRef" @submit.prevent="submit">
      <v-card title="Asignar permisos">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="permission in allPermissions"
            :key="permission.id"
            :title="permission.description"
          >
            <v-expansion-panel-text>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                  class="ma-0 pa-1"
                  v-for="action in permission.children"
                  :key="action.id"
                >
                  <v-checkbox
                    v-model="selectedPermissions"
                    :label="action.description"
                    :value="action.id"
                  />
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

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
          <v-btn text="Guardar" color="primary" type="submit"></v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  _getAllPermissions,
  _assignPermissions,
} from "@/app/modules/user/services/user.services";

const emit = defineEmits(["onSuccess"]);

const props = defineProps<{
  userId: number;
  permissions: number[];
}>();

const form = ref({
  userId: props.userId,
  permissions: [] as number[],
});

const formRef = ref<HTMLFormElement | null>(null);

const dialog = ref<boolean>(false);

const selectedPermissions = ref<number[]>([...props.permissions]);

const submit = async () => {
  form.value.permissions = selectedPermissions.value;
  let response = await _assignPermissions(form.value);
  console.log(response);
};

const allPermissions = ref<any[]>([]);
const init = async () => {
  allPermissions.value = await _getAllPermissions();
};

init();
</script>
