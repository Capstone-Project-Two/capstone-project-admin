import { components } from "@/generators/api-generator";
type GenApi = components["schemas"];

export type AdminResponseDto = GenApi["AdminResponseDto"];
export type PatientResponseDto = GenApi["PatientResponseDto"];
export type CreatePatientDto = GenApi["CreatePatientDto"];
export type UpdatePatientDto = GenApi["UpdatePatientDto"];
export type TherapistResponseDto = GenApi["TherapistResponseDto"];
export type CreateTherapistDto = GenApi["CreateTherapistDto"]
export type UpdateTherapistDto = GenApi["UpdateTherapistDto"]