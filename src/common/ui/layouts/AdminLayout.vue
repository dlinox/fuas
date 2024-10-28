<template>
  <v-app app>
    <v-navigation-drawer v-model="drawer" app>
      <AppMenu />
      <template #append>
        <v-list three-line>
          <v-list-item
            class="py-2 border-t"
            :subtitle="authStore.authState.user.full_name"

            prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPYGvsOKyoPhMLvER1SNT4W3RyX6VPeXTxg&s"
          >
            <template v-slot:append>
              <SignOut />
            </template>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-app-bar floating elevation="0">
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
    <v-footer color="grey-lighten-4" app>
      <v-spacer> </v-spacer>
      <small> Lnx &copy; {{ new Date().getFullYear() }} </small>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/app/store/auth.stores";
import AppMenu from "./components/AppMenu.vue";
import SignOut from "@/app/modules/auth/components/SignOut.vue";

const authStore = useAuthStore();
const drawer = ref(true);
</script>
