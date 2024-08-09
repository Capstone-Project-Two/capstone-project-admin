import SignIn from "@/components/sign-in";
import { ROUTER_PATH } from "@/constants/route-constant";
import Link from "next/link";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();
  if(session) {
    return redirect(ROUTER_PATH.HOMEPAGE)  
  }
  return (
    <>
      <SignIn />
      <Link href={ROUTER_PATH.PATIENTS}>
        To patient
      </Link>
      {JSON.stringify(session)}
    </>
  )
}
