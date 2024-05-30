"use server";

import { API_ROUTE } from "@/constants/api-route-constant";
import { REVALIDATE_TAG_ENUM } from "@/constants/revalidate-tags-constant";
import { UpdateLikePostDto } from "@/service/api-types";
import { fetchPostDefault } from "@/service/fetcher-service";
import { revalidateTag } from "next/cache";

export const likePost = async (updateLikePostDto: UpdateLikePostDto) => {
  const res = await fetchPostDefault({
    url: `${API_ROUTE.BASE_LIKE_POSTS}/${updateLikePostDto.post}`,
    data: {
      patient: updateLikePostDto.patient,
    },
    method: "PATCH",
  });

  revalidateTag(REVALIDATE_TAG_ENUM.LIKE_POST);
  revalidateTag(REVALIDATE_TAG_ENUM.POST);

  return res;
};
