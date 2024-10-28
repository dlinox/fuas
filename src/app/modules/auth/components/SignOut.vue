<template>
  <v-btn
    @click="signOut"
    color="grey-lighten-1"
    icon
    variant="text"
    size="small"
  >
    <v-icon>mdi-power</v-icon>
  </v-btn>
</template>
<script setup lang="ts">
import { signOut } from "../services/";
</script>
