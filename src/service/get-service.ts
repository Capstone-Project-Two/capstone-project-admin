import { API_ROUTE } from "@/constants/api-route-constant";
import { REVALIDATE_TAG_ENUM } from "@/constants/revalidate-tags-constant";
import { URL_PARAM } from "@/constants/url-param-constant";
import {
  LikePostResponseDto,
  RelationalPatientResponseDto,
  RelationalPostResponseDto,
  TherapistResponseDto,
} from "@/service/api-types";
import { fetchDefault } from "@/service/fetcher-service";
import { TMeta } from "@/types/types";
import { isValidResponse } from "@/utils/validate-response";

type TPagination = {
  page?: number;
  limit?: number;
};

export const getPatients = async ({ page = 1, limit = 10 }: TPagination) => {
  const res = await fetchDefault({
    url: `${API_ROUTE.BASE_PATIENT}?${URL_PARAM.PAGE}=${page}&limit=${limit}`,
    tags: [REVALIDATE_TAG_ENUM.PATIENT],
  });

  return {
    error: !isValidResponse(res?.statusCode) && res,
    message: res?.message,
    data: res?.data as Array<RelationalPatientResponseDto>,
    statusCode: res?.statusCode,
    meta: res?.meta as TMeta,
  };
};

export const getPosts = async ({ page = 1, limit = 10 }: TPagination) => {
  const res = await fetchDefault({
    url: `${API_ROUTE.BASE_POSTS}?${URL_PARAM.PAGE}=${page}&limit=${limit}`,
    tags: [REVALIDATE_TAG_ENUM.POST],
  });

  return {
    message: res?.message,
    data: res?.data as Array<RelationalPostResponseDto>,
    statusCode: res?.statusCode,
    meta: res?.meta as TMeta,
  };
};

export const getLikePosts = async () => {
  const res = await fetchDefault({
    url: API_ROUTE.BASE_LIKE_POSTS,
    tags: [REVALIDATE_TAG_ENUM.LIKE_POST],
  });

  return {
    message: res?.message,
    data: res?.data as Array<LikePostResponseDto>,
    statusCode: res?.statusCode,
  };
};

export const getLikePostByPost = async ({ postId }: { postId: string }) => {
  const res = await fetchDefault({
    url: `${API_ROUTE.BASE_LIKE_POSTS}/${postId}`,
    tags: [REVALIDATE_TAG_ENUM.LIKE_POST],
  });

  return {
    message: res?.message,
    data: res?.data as Array<LikePostResponseDto>,
    statusCode: res?.statusCode,
    meta: res?.meta as TMeta,
  };
};

export const getTherapists = async () => {
  const res = await fetchDefault({
    url: API_ROUTE.BASE_THERAPIST,
    tags: [REVALIDATE_TAG_ENUM.THERAPIST],
  });

  return {
    error: !isValidResponse(res?.statusCode) && res,
    message: res?.message,
    data: res?.data as Array<TherapistResponseDto>,
    statusCode: res?.statusCode,
  };
};
