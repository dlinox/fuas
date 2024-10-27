import { DataTableHeaderDTO } from "@/common/models/DataTable.types";

export const headers: DataTableHeaderDTO[] = [
  {
    title: "Op.",
    key: "actions",
    value: "actions",
    fixed: true,
    width: "50px",
    sortable: false,
  },
  {
    title: "Nombre",
    key: "name",
    value: "name",
  },
  {
    title: "Tipo",
    key: "type",
    value: "type",
  },
  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];
//serviceHeaders
export const serviceHeaders: DataTableHeaderDTO[] = [
  {
    title: "Op.",
    key: "actions",
    value: "actions",
    fixed: true,
    width: "50px",
    sortable: false,
  },
  {
    title: "Nombre",
    key: "name",
    value: "name",
  },
  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];
