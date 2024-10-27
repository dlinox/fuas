import { http } from "@/common/helpers/http";
import {
  DataTableRequestDTO,
  DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/common/models/DataTable.types";
import { ServiceDTO } from "../models/Service.types";

const baseUrl = import.meta.env.VITE_APP_API_URL + "/services";

export const _loadDataTable = async (
  request: DataTableRequestDTO
): Promise<DataTableResponseDTO<ServiceDTO>> => {
  try {
    const token = localStorage.getItem("token") as string;
    const response = await http(token, baseUrl).post(
      "/load-data-table",
      request
    );
    return response.data.data as DataTableResponseDTO<ServiceDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _saveItem = async (item: ServiceDTO): Promise<boolean> => {
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


//load-select
export const _loadSelect = async (): Promise<any[]> => {
  try {
    const token = localStorage.getItem("token") as string;
    const response = await http(token, baseUrl).get("/load-select");
    return response.data.data;
  } catch (error) {
    return [];
  }
};