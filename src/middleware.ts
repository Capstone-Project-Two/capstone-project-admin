import { auth } from "../auth";
import { BASE_APP_URL } from "./constants/env-constant";
import { ROUTER_PATH } from "./constants/route-constant";
import { NextResponse } from "next/server";

export default auth(async (req) => {
  const session = await auth();
  console.log("🚀 ~ auth ~ session:", session)

  if(!session) NextResponse.redirect(BASE_APP_URL + ROUTER_PATH.LOGIN)
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
