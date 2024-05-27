"use server";
import { API_ROUTE } from "@/constants/api-route-constant";
import { REVALIDATE_TAG_ENUM } from "@/constants/revalidate-tags-constant";
import { CreateTherapistDto } from "@/service/api-types";
import { fetchPostDefault } from "@/service/fetcher-service";
import { isValidResponse } from "@/utils/validate-response";
import { revalidateTag } from "next/cache";

export async function createTherapist(createTherapist: CreateTherapistDto) {
  const res = await fetchPostDefault({
    url: API_ROUTE.CREATE_THERAPIST,
    data: createTherapist,
    method: "POST",
  }).then((res) => res);

  // if (!isValidResponse(res.statusCode)) {
  //   throw new Error(res);
  // }

  revalidateTag(REVALIDATE_TAG_ENUM.THERAPIST);
  return res;
}
