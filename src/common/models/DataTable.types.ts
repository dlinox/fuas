interface DataTableRequestDTO {
  page: number;
  itemsPerPage: number;
  sortBy: any[];
  filters: Record<string, any>;
  search?: string | null;
  groupBy?: string;
}

interface DataTableResponseDTO<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  per_page: number;
  to: number;
  total: number;
}

interface DataTableHeaderDTO {
  key?: string;
  value?: string;
  title?: string;
  fixed?: boolean;
  align?: "start" | "end" | "center";
  width?: number | string;
  minWidth?: string;
  maxWidth?: string;
  nowrap?: boolean;
  headerProps?: Record<string, any>;
  cellProps?: Record<string, any> | ((data: any) => Record<string, any>);
  sortable?: boolean;
  sort?: (a: any, b: any) => number;
  sortRaw?: (a: any, b: any) => number;
  filter?: (value: any, search: any) => boolean;
  mobile?: boolean;
  children?: DataTableHeaderDTO[];
}

const initValuesDataTableResponse = (): DataTableResponseDTO<any> => ({
  current_page: 0,
  data: [],
  first_page_url: "",
  from: 0,
  per_page: 0,
  to: 0,
  total: 0,
});

export {
  type DataTableRequestDTO,
  type DataTableResponseDTO,
  type DataTableHeaderDTO,
  initValuesDataTableResponse,
};
