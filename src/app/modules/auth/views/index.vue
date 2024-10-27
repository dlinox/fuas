<template>
  <v-container
    class="h-100 d-flex justify-space-between align-center flex-column"
  >
    <div>logo</div>
    <v-card class="w-md-75 bg-white" elevation="0">
      <div class="pa-4">
        <h3 class="">Bienvenido de nuevo</h3>
        <p class="">Ingrese sus credenciales para acceder al sistema.</p>
      </div>

      <v-card-item>
        <v-form @submit.prevent="submitSignIn">
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Usuario"
                v-model="form.email"
                prepend-inner-icon="mdi-email"
                type="text"
                :rules="AuthFormRules.email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                autocomplete="off"
                v-model="form.password"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="() => (showPassword = !showPassword)"
                label="Contraseña"
                :rules="AuthFormRules.password"
                :type="showPassword ? 'text' : 'password'"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-btn type="submit" color="primary" block :loading="loading">
                Ingresar
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-item>
      <v-card-item class="text-end">
        <a href="" class="text-primary"> ¿Olvidaste tu contraseña? </a>
      </v-card-item>
    </v-card>

    <div class="text-center">
      <small> Lnx &copy; {{ new Date().getFullYear() }} </small>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import { Ref, ref } from "vue";
import { signIn } from "@/app/modules/auth/services";
import { type AuthForm, AuthFormRules } from "../models";

const form: Ref<AuthForm> = ref({
  email: "dpumaticona@gmail.com",
  password: "linox123",
});

const loading = ref(false);

const showPassword = ref(false);

const submitSignIn = async () => {
  loading.value = true;

  await signIn(form.value);

  loading.value = false;
};
</script>
