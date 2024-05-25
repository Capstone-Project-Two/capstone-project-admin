"use server";
import { API_ROUTE } from "@/constants/api-route-constant";
import { REVALIDATE_TAG_ENUM } from "@/constants/revalidate-tags-constant";
import { CreatePatientDto } from "@/service/api-types";
import { fetchDefault } from "@/service/fetcher-service";
import { isValidResponse } from "@/utils/validate-response";
import { revalidateTag } from "next/cache";

export async function createUser(createPatient: CreatePatientDto) {
  const res = await fetchDefault({
    url: API_ROUTE.GET_ALL_PATIENTS,
    options: {
      data: createPatient,
      method: "POST",
    },
  }).then((res) => res?.json());

  if (!isValidResponse(res.statusCode)) {
    throw new Error(res);
  }

  revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);
  return res;
}

export async function banPatient(id: string) {
  try {
    const res = await fetchDefault({
      url: `${API_ROUTE.BAN_PATIENT}/${id}`,
      options: {
        method: "PATCH",
      },
    });

    revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);

    return res;
  } catch (e: any) {
    return e;
  }
}

export async function unbanPatient(id: string) {
  try {
    const res = await fetchDefault({
      url: `${API_ROUTE.UNBAN_PATIENT}/${id}`,
      options: {
        method: "PATCH",
      },
    });

    revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);

    return res;
  } catch (e: any) {
    return e;
  }
}

export async function deleteUser(id: string) {
  const res = await fetchDefault({
    url: `${API_ROUTE.GET_ALL_PATIENTS}/${id}`,
    options: {
      method: "DELETE",
    },
  });

  revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);

  return res;
}
