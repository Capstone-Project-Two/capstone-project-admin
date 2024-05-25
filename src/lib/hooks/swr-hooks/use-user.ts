"use client";
import { API_ROUTE } from "@/constants/api-route-constant";
import { PatientResponseDto } from "@/service/api-types";
import { fetcher } from "@/service/fetcher-service";
import useSWR from "swr";

export default function useUser(id: string) {
  const { data, isLoading, mutate } = useSWR(
    `${API_ROUTE.GET_ALL_PATIENTS}/${id}`,
    fetcher
  );

  const userData = data?.data as PatientResponseDto;

  return {
    userData,
    isLoading,
    mutate,
  };
}
