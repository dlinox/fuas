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
    title: "Nombre Completo",
    key: "fullName",
    value: "fullName",
  },

  {
    title: "Correo",
    key: "email",
    value: "email",
  },

  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];
