"use server";
import { API_ROUTE } from "@/constants/api-route-constant";
import { REVALIDATE_TAG_ENUM } from "@/constants/revalidate-tags-constant";
import { fetchPostDefault } from "@/service/fetcher-service";
import { revalidateTag } from "next/cache";

export async function banPatient(id: string) {
  const res = await fetchPostDefault({
    url: `${API_ROUTE.BAN_PATIENT}/${id}`,
    method: "PATCH",
  });

  revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);

  return res;
}

export async function unbanPatient(id: string) {
  const res = await fetchPostDefault({
    url: `${API_ROUTE.UNBAN_PATIENT}/${id}`,
    method: "PATCH",
  });

  revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);

  return res;
}

export async function deleteUser(id: string) {
  const res = await fetchPostDefault({
    url: `${API_ROUTE.BASE_PATIENT}/${id}`,
    method: "DELETE",
  });

  revalidateTag(REVALIDATE_TAG_ENUM.PATIENT);

  return res;
}
