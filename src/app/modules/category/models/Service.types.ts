import { required } from "@/common/utils/ruleUtils";

interface ServiceDTO {
  id: number | null;
  name: string;
  categoryId: number | null;
  status: boolean;
}

const ServiceRules = {
  name: [required],
};

const initServiceValues = (): ServiceDTO => ({
  id: null,
  name: "",
  categoryId: null,
  status: true,
});

export { type ServiceDTO, ServiceRules, initServiceValues };
