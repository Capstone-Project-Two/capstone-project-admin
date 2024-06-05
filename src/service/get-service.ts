import { API_ROUTE } from "@/constants/api-route-constant";
import { REVALIDATE_TAG_ENUM } from "@/constants/revalidate-tags-constant";
import { AppointmentResponseDto, PatientResponseDto, TherapistResponseDto } from "@/service/api-types";
import { fetchDefault } from "@/service/fetcher-service";
import { TMeta } from "@/types/types";

export const getPatients = async ({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}) => {
  const res = await fetchDefault({
    url: `${API_ROUTE.BASE_PATIENT}?page=${page}&limit=${limit}`,
    tags: [REVALIDATE_TAG_ENUM.PATIENT],
  });

  return {
    message: res?.message,
    data: res?.data as Array<PatientResponseDto>,
    statusCode: res?.statusCode,
    meta: res.meta as TMeta,
  };
};

export const getTherapists = async () => {
  const res = await fetchDefault({
    url: API_ROUTE.BASE_THERAPIST,
    tags: [REVALIDATE_TAG_ENUM.THERAPIST],
  });

  return {
    message: res?.message,
    data: res?.data as Array<TherapistResponseDto>,
    statusCode: res?.statusCode,
  };
};

export const getAppointments = async () => {
  const res = await fetchDefault({
    url: API_ROUTE.BASE_APPOINTMENTS,
    tags: [REVALIDATE_TAG_ENUM.APPOINTMENT],
  });

  return {
    message: res?.message,
    data: res?.data as Array<AppointmentResponseDto>,
    statusCode: res?.statusCode,
  };
};