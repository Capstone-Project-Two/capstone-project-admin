"use server";

import { signIn, signOut } from "../../auth";
import { ROUTER_PATH } from "@/constants/route-constant";
import { fetchDefault, fetchPostDefault } from "./fetcher-service";
import { API_ROUTE } from "@/constants/api-route-constant";
import { LoginDto } from "./api-types";
import { isRedirectError } from "next/dist/client/components/redirect";

export const adminLogin = async (loginDto: LoginDto) => {
  try {
    const res = await fetchPostDefault({
      url: API_ROUTE.ADMIN_LOGIN,
      method: "POST",
      body: loginDto,
    });

    return res;
  } catch (e) {
    throw e;
  }
};

export const adminLogout = async () => {
  try {
    const res = await fetchDefault({
      url: API_ROUTE.ADMIN_LOGOUT,
    });

    return res;
  } catch (e) {
    throw e;
  }
};

export const authSignIn = async (formData: any) => {
  await signIn("credentials", {
    redirectTo: ROUTER_PATH.HOMEPAGE,
    ...formData,
  }).catch((err) => {
    if (isRedirectError(err)) {
      throw err;
    }
    throw err;
  });
};

export const authSignOut = async () => {
  await signOut({ redirectTo: ROUTER_PATH.LOGIN })
    .then(async () => {
      await adminLogout();
    })
    .catch((err) => {
      if (isRedirectError(err)) {
        throw err;
      }
      throw err;
    });
};
