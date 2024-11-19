//datos del sis
/*
"affiliationNumber": "2-71822317",
    "documentNumber": "71822317",
    "paternalLastName": "PUMA",
    "maternalLastName": "TICONA",
    "name": "DENIS LINO",
    "insuredType": "TITULAR",
    "status": "ACTIVO"
*/
interface SISDataDTO {
  documentType: string | null;
  documentNumber: string | null;
  name: string | null;
  paternalLastName: string | null;
  maternalLastName: string | null;

  affiliationNumber: string | null;
  insuredType: string | null;
  insuranceType: string | null;
  formatType: string | null;
  affiliationDate: string | null;
  benefitsPlan: string | null;
  healthFacility: string | null;
  facilityLocation: string | null;

  status: string | null;
}

export { type SISDataDTO };
