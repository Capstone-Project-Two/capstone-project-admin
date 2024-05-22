import { API_ROUTE } from "@/constants/api-route-constant";
import { PatientResponseDto } from "@/service/api-types";
import { fetchDefault } from "@/service/fetcher-service";

export const getPatients = async () => {
  const res = await fetchDefault({ url: API_ROUTE.GET_ALL_PATIENTS });
  return res as Array<PatientResponseDto>;
};
