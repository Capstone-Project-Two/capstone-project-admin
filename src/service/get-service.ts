import { API_ROUTE } from "@/constants/api-route-constant";
import { REVALIDATE_TAG_ENUM } from "@/constants/revalidate-tags-constant";
import {
  LikePostResponseDto,
  PostResponseDto,
  RelationalPatientResponseDto,
  TherapistResponseDto,
} from "@/service/api-types";
import { fetchDefault } from "@/service/fetcher-service";

export const getPatients = async () => {
  const res = await fetchDefault({
    url: API_ROUTE.BASE_PATIENT,
    tags: [REVALIDATE_TAG_ENUM.PATIENT],
  });

  return {
    message: res?.message,
    data: res?.data as Array<RelationalPatientResponseDto>,
    statusCode: res?.statusCode,
  };
};

export const getPosts = async () => {
  const res = await fetchDefault({
    url: API_ROUTE.BASE_POSTS,
    tags: [REVALIDATE_TAG_ENUM.POST],
  });

  return {
    message: res?.message,
    data: res?.data as Array<PostResponseDto>,
    statusCode: res?.statusCode,
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
