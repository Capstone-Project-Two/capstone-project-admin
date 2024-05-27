"use server";
import { API_ROUTE } from "@/constants/api-route-constant";
import { REVALIDATE_TAG_ENUM } from "@/constants/revalidate-tags-constant";
import { CreatePatientDto } from "@/service/api-types";
import { fetchPostDefault } from "@/service/fetcher-service";
import { isValidResponse } from "@/utils/validate-response";
import { revalidateTag } from "next/cache";

export async function createUser(createPatient: CreatePatientDto) {
  const res = await fetchPostDefault({
    url: API_ROUTE.BASE_PATIENT,
    data: createPatient,
    method: "POST",
  }).then((res) => res?.json());

  if (!isValidResponse(res.statusCode)) {
    throw new Error(res);
  }

  revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);
  return res;
}

export async function banPatient(id: string) {
  try {
    const res = await fetchPostDefault({
      url: `${API_ROUTE.BAN_PATIENT}/${id}`,
      method: "PATCH",
    });

    revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);

    return res;
  } catch (e: any) {
    return e;
  }
}

export async function unbanPatient(id: string) {
  try {
    const res = await fetchPostDefault({
      url: `${API_ROUTE.UNBAN_PATIENT}/${id}`,
      method: "PATCH",
    });

    revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);

    return res;
  } catch (e: any) {
    return e;
  }
}

export async function deleteUser(id: string) {
  const res = await fetchPostDefault({
    url: `${API_ROUTE.BASE_PATIENT}/${id}`,
    method: "DELETE",
  });

  revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);

  return res;
}
