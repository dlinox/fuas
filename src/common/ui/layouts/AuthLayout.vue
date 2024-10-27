<template>
  <v-app app>
    <v-main class="min-h-screen">
      <v-row class="h-100" no-gutters>
        <v-col cols="12" md="5" class="bg-white">
          <router-view />
        </v-col>

        <v-col cols="12" md="7" class="d-none d-md-block bg-black"> </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script setup lang="ts"></script>
