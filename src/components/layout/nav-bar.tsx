import { ROUTER_PATH } from "@/constants/route-constant";
import { LucideIcon } from "lucide-react";

type Props = {
}

type TLink = {
  title: string;
  to: string;
  icon?: LucideIcon
}

function NavBar({ }: Props) {
  const links: Array<TLink> = [
    {
      title: "Logo",
      to: ROUTER_PATH.HOMEPAGE
    }
  ]
  return (
    <div>
      Nav bar
    </div>
  )
}

export default NavBar