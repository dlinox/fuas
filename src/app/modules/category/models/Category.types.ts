import { required } from "@/common/utils/ruleUtils";
import { ServiceDTO } from "./Service.types";

interface CategoryDTO {
  id: number | null;
  name: string;
  type: string | null;
  status: boolean;
  services: ServiceDTO[];
}

const CategoryRules = {
  name: [required],
  type: [required],
};

const initCategoryValues = (): CategoryDTO => ({
  id: null,
  name: "",
  type: null,
  status: true,
  services: [],
});

export { type CategoryDTO, CategoryRules, initCategoryValues };
