import { required } from "@/common/utils/ruleUtils";

interface PositionDTO {
  id: number | null;
  name: string;
  description: string | null;
  status: boolean;
}

const PositionRules = {
  name: [required],
  description: [],
};

const initPositionValues = (): PositionDTO => ({
  id: null,
  name: "",
  description: null,
  status: true,
});

export { type PositionDTO, PositionRules, initPositionValues };
