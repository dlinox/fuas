import { required } from "@/common/utils/ruleUtils";

interface OfficeDTO {
  id: number | null;
  name: string;
  description: string | null;
  status: boolean;
}

const OfficeRules = {
  name: [required],
  description: [],
};

const initOfficeValues = (): OfficeDTO => ({
  id: null,
  name: "",
  description: null,
  status: true,
});

export { type OfficeDTO, OfficeRules, initOfficeValues };
