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

    <v-list-group
      value="settings"
      v-permission="[
        'categories.index',
        'positions.index',
        'offices.index',
        'workers.index',
      ]"
    >
      <template v-slot:activator="{ props }">
        <v-list-item
          v-bind="props"
          prepend-icon="mdi-cog"
          title="Configuración"
        ></v-list-item>
      </template>

      <v-list-item
        title="Categorías"
        prepend-icon="mdi-circle-small"
        to="/a/categories"
        link
        exact
        v-permission="['categories.index']"
      />

      <v-list-item
        title="Cargos"
        prepend-icon="mdi-circle-small"
        to="/a/positions"
        link
        exact
        v-permission="['positions.index']"
      />

      <v-list-item
        title="Oficinas"
        prepend-icon="mdi-circle-small"
        to="/a/offices"
        link
        exact
        v-permission="['offices.index']"
      />

      <v-list-item
        title="Trabajadores"
        prepend-icon="mdi-circle-small"
        to="/a/workers"
        link
        exact
        v-permission="['workers.index']"
      />
    </v-list-group>

    <v-list-group value="security" v-permission="['users.index']">
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
        v-permission="['users.index']"
      />
    </v-list-group>
  </v-list>
</template>
<script setup lang="ts">
import { ref } from "vue";

const open = ref([""]);
</script>
