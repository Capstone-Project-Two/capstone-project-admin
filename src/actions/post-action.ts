"use server";

import { API_ROUTE } from "@/constants/api-route-constant";
import { UpdateLikePostDto } from "@/service/api-types";
import { fetchPostDefault } from "@/service/fetcher-service";

export const likePost = async (updateLikePostDto: UpdateLikePostDto) => {
  const res = await fetchPostDefault({
    url: `${API_ROUTE.BASE_LIKE_POSTS}/${updateLikePostDto.post}`,
    data: updateLikePostDto,
    method: "PATCH",
  });

  return res;
};
