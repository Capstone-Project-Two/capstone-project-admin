import { auth } from "../auth";
import { ROUTER_PATH } from "./constants/route-constant";

export default auth(async (req) => {
  const session = await auth();
  if (!session && !req.nextUrl.pathname.startsWith(ROUTER_PATH.LOGIN))
    return Response.redirect(new URL(ROUTER_PATH.LOGIN, req.nextUrl.origin));
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
