import { required } from "@/common/utils/ruleUtils";

interface UserDTO {
  id: number | null;
  fullName?: string | null;
  email: string;
  password?: string | null;
  workerId: number | null;
  permissions: number[];
  status: boolean;
}

const UserRules = {
  email: [required],
  password: [],
  workerId: [required],
  status: [required],
};

const initUserValues = (): UserDTO => ({
  id: null,
  email: "",
  password: null,
  workerId: null,
  permissions: [],
  status: true,
});

export { type UserDTO, UserRules, initUserValues };
