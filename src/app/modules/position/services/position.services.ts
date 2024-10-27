import { http } from "@/common/helpers/http";
import {
  DataTableRequestDTO,
  DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/common/models/DataTable.types";
import { PositionDTO } from "../models/Position.types";

const baseUrl = import.meta.env.VITE_APP_API_URL + "/positions";

export const _loadDataTable = async (
  request: DataTableRequestDTO
): Promise<DataTableResponseDTO<PositionDTO>> => {
  try {
    const token = localStorage.getItem("token") as string;
    const response = await http(token, baseUrl).post(
      "/load-data-table",
      request
    );
    return response.data.data as DataTableResponseDTO<PositionDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _saveItem = async (item: PositionDTO): Promise<boolean> => {
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