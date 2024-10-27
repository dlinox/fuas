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
    title: "Descripción",
    key: "description",
    value: "description",
  },
  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];
