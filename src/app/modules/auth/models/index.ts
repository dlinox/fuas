import { required } from "@/common/utils/ruleUtils";

interface AuthForm {
  email: string;
  password: string;
}

interface AuthUser {

  full_name: string;
  redirect_route: string;
  role: string;
  email: string;
}

interface Auth {
  token: string;
  user: AuthUser;
  permissions: string;
}

const AuthFormRules = {
  email: [required],
  password: [required],
};

export { type AuthForm, type AuthUser, type Auth, AuthFormRules };
