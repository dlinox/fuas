import { http } from "@/common/helpers/http";
import {
  DataTableRequestDTO,
  DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/common/models/DataTable.types";

import { UserDTO } from "../models/User.types";

const baseUrl = import.meta.env.VITE_APP_API_URL + "/users";

export const _loadDataTable = async (
  request: DataTableRequestDTO
): Promise<DataTableResponseDTO<UserDTO>> => {
  try {
    const token = localStorage.getItem("token") as string;
    const response = await http(token, baseUrl).post(
      "/load-data-table",
      request
    );


    return response.data.data as DataTableResponseDTO<UserDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _saveItem = async (item: UserDTO): Promise<boolean> => {
  try {
    const token = localStorage.getItem("token") as string;
    await http(token, baseUrl).post("/save", item);
    return true;
  } catch (error) {
    return false;
  }
};

export const _deleteItem = async (id: number): Promise<boolean> => {
  try {
    const token = localStorage.getItem("token") as string;
    await http(token, baseUrl).delete(`/delete/${id}`);
    return true;
  } catch (error) {
    return false;
  }
};

export const _getAllPermissions = async (): Promise<any[]> => {
  try {
    const token = localStorage.getItem("token") as string;
    const response = await http(token, baseUrl).get("/all-permissions");
    console.log(response.data);
    return response.data.data as any[];
  } catch (error) {
    return [];
  }
};
