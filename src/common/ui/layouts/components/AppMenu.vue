<template>
  <v-list nav density="compact" v-model:opened="open" color="primary">
    <v-list-item
      key="dashboard"
      to="/a"
      title="Dashboard"
      prepend-icon="mdi-view-dashboard"
      link
      exact
    />

    <v-list-group value="settings">
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-cog"
          title="Configuración"
        ></v-list-item>
      </template>

      <!-- <v-list-item
        title="Datos generales"
        prepend-icon="mdi-circle-small"
        to="/a/general-data"
        link
        exact
      /> -->
      <v-list-item
        title="Categoías"
        prepend-icon="mdi-circle-small"
        to="/a/categories"
        link
        exact
      />

      <v-list-item
        title="Cargos"
        prepend-icon="mdi-circle-small"
        to="/a/positions"
        link
        exact
      />

      <v-list-item
        title="Oficinas"
        prepend-icon="mdi-circle-small"
        to="/a/offices"
        link
        exact
      />

      <v-list-item
        title="Trabajadores"
        prepend-icon="mdi-circle-small"
        to="/a/workers"
        link
        exact
      />
    </v-list-group>

    <v-list-group value="security">
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-shield"
          title="Seguridad"
        ></v-list-item>
      </template>

      <v-list-item
        title="Usuarios"
        prepend-icon="mdi-circle-small"
        to="/a/users"
        link
        exact
      />
    </v-list-group>
  </v-list>
</template>
<script setup lang="ts">
import { ref } from "vue";

const open = ref([""]);
</script>
