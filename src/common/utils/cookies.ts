/* @ts-ignore */
import Cookies from "js-cookie";

export const getSISSessionId = () => {
  const sessionToken = Cookies.get("SIS.ASP_SessionId") ?? "";
  return sessionToken;
};
