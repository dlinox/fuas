import { required } from "@/common/utils/ruleUtils";

interface WorkerDTO {
  id: number | null;
  documentType: string;
  documentNumber: string;
  name: string;
  paternalLastName: string;
  maternalLastName: string;
  birthDate: string | null;
  gender: string;
  phoneNumber: string;
  email: string | null;
  status: boolean;
  positionId: number | null;
  officeId: number | null;
}

const WorkerRules = {
  documentType: [required],
  documentNumber: [required],
  name: [required],
  paternalLastName: [required],
  maternalLastName: [required],
  birthDate: [],
  gender: [required],
  phoneNumber: [required],
  email: [],
  status: [required],
  positionId: [],
  officeId: [],
  description: [],
};

const initWorkerValues = (): WorkerDTO => ({
  id: null,
  documentType: "DNI",
  documentNumber: "",
  name: "",
  paternalLastName: "",
  maternalLastName: "",
  birthDate: null,
  gender: "M",
  phoneNumber: "",
  email: null,
  status: true,
  positionId: null,
  officeId: null,
});

export { type WorkerDTO, WorkerRules, initWorkerValues };
