
import { auth } from "../../auth";
import SignIn from "../components/auth-components";
import { ROUTER_PATH } from "@/constants/route-constant";
import Link from "next/link";
type Props = {};

export default async function AuthTestPage() {
  const session = await auth();
  if (!session?.user) {
    return (
      <>
        <SignIn />
        <Link href={ROUTER_PATH.PATIENTS}>
          To patient
        </Link>
      </>
    )
  }
}
