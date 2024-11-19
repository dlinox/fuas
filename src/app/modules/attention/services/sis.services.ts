import { http } from "@/common/helpers/http";
import { getSessionToken } from "@/common/utils/session";
import { getSISSessionId } from "@/common/utils/cookies";

const baseUrl = import.meta.env.VITE_APP_API_URL + "/sis";

const _getSISData = async (): Promise<any> => {
  try {
    const token = getSessionToken();

    const sessionToken = getSISSessionId();
    const response = await http(token, baseUrl).get(
      "/get-data/" + sessionToken
    );
    return response.data;
  } catch (error) {
    return null;
  }
};

export { _getSISData };
