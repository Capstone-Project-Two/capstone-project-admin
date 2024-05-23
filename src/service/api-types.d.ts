import { components } from "@/generators/api-generator";
type GenApi = components["schemas"];

export type AdminResponseDto = GenApi["AdminResponseDto"];
export type PatientResponseDto = GenApi["PatientResponseDto"];
export type CreatePatientDto = GenApi["CreatePatientDto"];
