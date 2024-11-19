import { http } from "@/common/helpers/http";
import { AuthForm } from "../models";
import { useAuthStore } from "@/app/store/auth.stores";

import {
  getSessionToken,
  setSessionToken,
  removeSessionToken,
} from "@/common/utils/session";

export const signIn = async (form: AuthForm): Promise<boolean> => {
  const authStore = useAuthStore();
  try {
    let response = await http().post(`/auth/sign-in`, form);
    setSessionToken(response.data.token);
    authStore.setAuthState(response.data, true);
    return true;
  } catch (error) {
    return false;
  }
};

export const signOut = async () => {
  const authStore = useAuthStore();
  try {
    let token = getSessionToken();
    let response = await http(token).post(`/auth/sign-out`, null);
    removeSessionToken();
    authStore.singOut();
    return response.data;
  } catch (error) {
    return false;
  }
};

export const user = async () => {
  const authStore = useAuthStore();
  try {
    let token = getSessionToken();

    if (!token) {
      removeSessionToken();
      authStore.singOut();
      return;
    }
    let response = await http(token).get(`auth/user`);
    authStore.setAuthState(response.data);
    return response.data;
  } catch (error: any) {
    // removeSessionToken();
    // authStore.singOut();
    return false;
  }
};

export const clearSession = async () => {
  const authStore = useAuthStore();
  localStorage.removeItem("token");
  authStore.clearAuthState();
};
