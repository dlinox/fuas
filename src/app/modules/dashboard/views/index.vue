<template>
  <v-card title="Dashboard" subtitle="Bienvenido a la aplicación">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <SISConsultation />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script setup lang="ts">
import SISConsultation from "../../attention/components/SISConsultation.vue";
</script>
