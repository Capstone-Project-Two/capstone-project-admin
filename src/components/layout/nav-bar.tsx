"use client"
import { TooltipProvider } from "../ui/tooltip";
import Link from "next/link";
import { ROUTER_PATH } from "@/constants/route-constant";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <TooltipProvider>
      <nav className="h-[60px] xl:px-4 px-2.5 flex items-center w-full fixed top-0 border border-b-1">
        {links.map((link, index) => (
          <Link
            title={link.title}
            key={index}
            href={link.to}
            className={cn(
              "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white"
            )}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </TooltipProvider>
  )
}

export default NavBar