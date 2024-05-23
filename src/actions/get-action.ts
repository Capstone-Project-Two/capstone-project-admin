import { API_ROUTE } from "@/constants/api-route-constant";
import { REVALIDATE_TAG_ENUM } from "@/constants/revalidate-tags-constant";
import { PatientResponseDto } from "@/service/api-types";
import { fetchDefault } from "@/service/fetcher-service";

export const getPatients = async () => {
  const res = await fetchDefault({
    url: API_ROUTE.GET_ALL_PATIENTS,
    tags: [REVALIDATE_TAG_ENUM.PATIENT],
  });

  return {
    message: res.message,
    data: res.data as Array<PatientResponseDto>,
    statusCode: res.statusCode,
  };
};
