import { required } from "@/common/utils/ruleUtils";

interface ServiceDTO {
  id: number | null;
  name: string;
  status: boolean;
}

const ServiceRules = {
  name: [required],
};

const initServiceValues = (): ServiceDTO => ({
  id: null,
  name: "",
  status: true,
});

export { type ServiceDTO, ServiceRules, initServiceValues };