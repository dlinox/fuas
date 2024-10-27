import { required } from "@/common/utils/ruleUtils";

interface CategoryDTO {
  id: number | null;
  name: string;
  type: string | null;
  status: boolean;
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
});

export { type CategoryDTO, CategoryRules, initCategoryValues };
