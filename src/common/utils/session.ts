/* @ts-ignore */
import Cookies from "js-cookie";

export const getSessionToken = () => {
  const sessionToken = Cookies.get("HG.FUA_SessionToken") ?? "";
  return sessionToken;
};

export const setSessionToken = (token: string) => {
  Cookies.set("HG.FUA_SessionToken", token, {
    expires: 1,
  });
};

export const removeSessionToken = () => {
  Cookies.remove("HG.FUA_SessionToken");
};

