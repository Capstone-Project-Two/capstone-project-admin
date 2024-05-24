"use server";
import { API_ROUTE } from "@/constants/api-route-constant";
import { REVALIDATE_TAG_ENUM } from "@/constants/revalidate-tags-constant";
import { CreatePatientDto } from "@/service/api-types";
import { fetchPostDefault } from "@/service/fetcher-service";
import { isValidResponse } from "@/utils/validate-response";
import { revalidateTag } from "next/cache";

export async function createUser(createPatient: CreatePatientDto) {
  const res = await fetchPostDefault({
    url: API_ROUTE.GET_ALL_PATIENTS,
    data: createPatient,
  });

  if (isValidResponse(res.statusCode)) {
    revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);
  }

  return res;
}

export async function deleteUser(id: string) {
  const res = await fetchPostDefault({
    url: `${API_ROUTE.GET_ALL_PATIENTS}/${id}`,
    method: "delete",
  });

  revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);

  return res;
}
