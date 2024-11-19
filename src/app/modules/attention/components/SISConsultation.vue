<template>
  <v-card
    class="border"
    title="Consultas SIS"
    subtitle="Realice consultas en la plataforma del SIS"
  >
    <template #append>
      <v-btn
        @click="fetchData"
        color="black"
        variant="flat"
        class="mx-auto me-2"
        v-tooltip:top="'Obtener datos del SIS'"
      >
        <v-icon> mdi-web-sync </v-icon>
      </v-btn>

      <v-btn
        v-tooltip:top="'Abrir consulta en línea del SIS'"
        @click="openWebSIS"
        color="black"
        variant="tonal"
        class="mx-auto"
      >
        <img :src="LogoSISImage" alt="SIS Logo" width="50" />
      </v-btn>
    </template>
    <v-card-item class="border-t">
      <v-card-title> DATOS PERSONALES </v-card-title>
      <v-row class="my-1">
        <v-col cols="12" md="2" lg="2">
          <v-text-field
            label="Tipo de Doc."
            readonly
            v-model="SISData.documentType"
          />
        </v-col>
        <v-col cols="12" md="4" lg="4">
          <v-text-field
            v-model="SISData.documentNumber"
            label="N° Documento"
            readonly
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="SISData.name" label="Nombres" readonly />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="SISData.paternalLastName"
            label="Apellido Paterno"
            readonly
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="SISData.maternalLastName"
            label="Apellido Materno"
            readonly
          />
        </v-col>
      </v-row>
    </v-card-item>

    <v-card-item class="border-t" >
      <v-card-title> 
        DATOS DE AFILIACIÓN
        <v-btn variant="tonal" class="ml-2" >
          {{ SISData.status }}
        </v-btn>
      </v-card-title>

      <v-row class="my-1">
        <v-col cols="12" md="6" lg="4">
          <v-text-field
            v-model="SISData.affiliationNumber"
            label="N° de afiliación / inscripción"
            readonly
          />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-text-field
            v-model="SISData.insuranceType"
            label="Tipo de seguro"
            readonly
          />
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <v-text-field
            v-model="SISData.insuredType"
            label="Tipo de asegurado"
            readonly
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="SISData.formatType"
            label="Tipo de formato"
            readonly
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="SISData.affiliationDate"
            label="Fecha de afiliación / levantamiento"
            readonly
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="SISData.benefitsPlan"
            label="Plan de Beneficios"
            readonly
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="SISData.healthFacility"
            label="Establecimiento de salud"
            readonly
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="SISData.facilityLocation"
            label="Ubicación de establecimiento de salud"
            readonly
          />
        </v-col>
      </v-row>
    </v-card-item>


    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="fetchData" variant="tonal"> Registrar FUA </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { LogoSISImage } from "@/common/resources/images";

import { _getSISData } from "@/app/modules/attention/services/sis.services";
import { SISDataDTO } from "../models/SIS.types";

const SISData = ref<SISDataDTO>({
  documentType: "",
  documentNumber: "",
  name: "",
  paternalLastName: "",
  maternalLastName: "",
  affiliationNumber: "",
  insuranceType: "",
  insuredType: "",
  formatType: "",
  affiliationDate: "",
  benefitsPlan: "",
  healthFacility: "",
  facilityLocation: "",
  status: "",
});
/*
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
*/

const fetchData = async () => {
  console.log("fetching data...");
  const response = await _getSISData();
  console.log(response);
  SISData.value = response;
};

const openWebSIS = () => {
  let options = "width=900, height=500, bottom=0, left=0";
  let sisWindow = window.open(
    "http://app3.sis.gob.pe/SisConsultaEnLinea/Consulta/frmConsultaEnLinea.aspx",
    "_blank",
    options
  );

  if (sisWindow) location.reload();
};
</script>
