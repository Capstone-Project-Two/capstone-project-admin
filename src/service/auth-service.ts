"use server";

import { signIn, signOut } from "../../auth";
import { ROUTER_PATH } from "@/constants/route-constant";
import { fetchPostDefault } from "./fetcher-service";
import { API_ROUTE } from "@/constants/api-route-constant";
import { LoginDto } from "./api-types";

export const adminLogin = async (loginDto: LoginDto) => {
  try {
    const res = await fetchPostDefault({
      url: API_ROUTE.ADMIN_LOGIN,
      method: "POST",
      body: loginDto,
    });

    return res;
  } catch (e) {
    throw e
  }
};


export const authSignIn = async (formData: any) => {
  await signIn("credentials", { redirectTo: ROUTER_PATH.PATIENTS, ...formData })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      // if (isRedirectError(err)) {
      //   throw err;
      // }
      // console.log(err)
      return null
    });
};

export const authSignOut = async () => {
  await signOut({ redirectTo: ROUTER_PATH.HOMEPAGE }).catch((_) => {
    return null
    // if (isRedirectError(err)) {
    //   throw err;
    // }
  });
};
