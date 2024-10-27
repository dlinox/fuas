<template>
  <v-app app>
    <v-main class="min-h-screen">
      <v-row class="h-100" no-gutters>
        <v-col cols="12" lg="5" class="bg-white">
          <router-view />
        </v-col>
        <v-col cols="12" lg="7" class="d-none d-lg-block bg-black col-image">
          <img class="bg-image" :src="SignInImage" alt="auth" />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import { SignInImage } from "@/common/resources/images";
</script>
<style>
.col-image {
  position: relative;
  overflow: hidden;
}
.bg-image {
  position: absolute;
  object-fit: cover;
  object-position: center center;
  width: 100%;
}
</style>
