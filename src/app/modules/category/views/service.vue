<template>
  <v-dialog
    max-width="600"
    v-model="dialog"
    activator="parent"
    max-height="600"
  >
    <v-card
      title="Servicios"
      :subtitle="category.type + ' - ' + category.name"
      :disabled="loading"
    >
      <v-card-item class="border-t border-b">
        <v-row class="d-flex justify-space-between">
          <v-col cols="12" md="7">
            <!-- <v-text-field
              label="Buscar"
              clearable
              @input="debouncedReload"
            ></v-text-field> -->
          </v-col>
          <v-col
            cols="12"
            md="4"
            class="d-md-flex d-block justify-end text-end"
          >
            <v-btn
              class="me-2"
              :disabled="loading"
              v-permission="['categories.services.create']"
            >
              nuevo
              <ServiceForm
                @onSuccess="emit('onUpdate')"
                :categoryId="category.id!"
              />
            </v-btn>
          </v-col>
        </v-row>
      </v-card-item>
      <v-list v-permission="['categories.services.index']">
        <v-list-item v-for="item in category.services" :key="item.id!">
          <v-list-item-title> {{ item.name }} </v-list-item-title>

          <template #prepend>
            <v-btn
              icon
              size="small"
              variant="text"
              v-permission="['categories.services.edit']"
            >
              <v-icon size="small" color="grey"> mdi-dots-vertical </v-icon>
              <v-menu activator="parent">
                <v-list density="compact">
                  <v-list-item
                    key="edit"
                    value="edit"
                    append-icon="mdi-pencil"
                    class="text-subtitle-2"
                    v-permission="['categories.services.edit']"
                  >
                    <template #append>
                      <v-icon size="small"> mdi-pencil </v-icon>
                    </template>
                    Editar

                    <ServiceForm
                      @onSuccess="emit('onUpdate')"
                      :categoryId="category.id!"
                      :formState="item"
                    />
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-btn>
          </template>
          <template #append>
            <v-chip
              :color="item.status ? 'success' : 'error'"
              text-color="white"
            >
              {{ item.status ? "Habilitado" : "Deshabilitado" }}
            </v-chip>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
import { ref } from "vue";

import { CategoryDTO } from "../models/Category.types";
// import debounce from "@/common/utils/debounce";
import ServiceForm from "../components/ServiceForm.vue";

const emit = defineEmits(["onUpdate"]);

defineProps<{
  category: CategoryDTO;
}>();

const dialog = ref<boolean>(false);
const loading = ref<boolean>(false);

// const debouncedReload = debounce(() => {}, 50);

const init = () => {
  console.log("init");
};

init();
</script>
