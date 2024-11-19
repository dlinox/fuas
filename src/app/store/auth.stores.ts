import { defineStore } from "pinia";
import { ref, Ref } from "vue";
import { useRouter } from "vue-router";

import { type Auth } from "@/app/modules/auth/models";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const authState: Ref<Auth> = ref({
    token: "",
    user: {
      full_name: "",
      redirect_route: "/a",
      role: "",
      email: "",
    },
    permissions: "",
  });

  const signInSuccess = (response: any) => {
    localStorage.setItem("token", response.data);
    router.push("/");
  };

  const singOut = () => {
    clearAuthState();
    // window.location.href = "/";
    // router.replace("/");
  };

  const setAuthState = (auth: Auth, isSignIn: boolean = false) => {
    authState.value = auth;
    if (isSignIn) router.push(auth.user.redirect_route);
  };

  const clearAuthState = () => {
    authState.value = {
      token: "",
      user: {
        full_name: "",
        redirect_route: "/a",
        role: "",
        email: "",
      },
      permissions: "",
    };
  };

  return {
    authState,
    setAuthState,
    clearAuthState,
    signInSuccess,
    singOut,
  };
});
