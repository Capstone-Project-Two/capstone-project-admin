"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent, TooltipProvider, TooltipTrigger
} from "@/components/ui/tooltip"
import {
  LayoutDashboard, ListCollapse, LucideIcon,
  User
} from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import { ROUTER_PATH } from "@/constants/route-constant"
import { usePathname } from "next/navigation"
import { Separator } from "../ui/separator"

type Props = {
  isCollapsed: boolean;
  setIsCollapsed: Dispatch<SetStateAction<boolean>>
}

type TLink = {
  title: string
  label?: string
  icon: LucideIcon
  variant: "default" | "ghost"
  to: string
}

export function Sidebar({ isCollapsed, setIsCollapsed }: Props) {
  const pathname = usePathname()
  const links: Array<TLink> = [
    {
      title: "Overview",
      icon: LayoutDashboard,
      to: ROUTER_PATH.HOMEPAGE,
      variant: pathname === ROUTER_PATH.HOMEPAGE ? "default" : "ghost",
    },
    {
      title: "Users",
      icon: User,
      to: ROUTER_PATH.USERS,
      variant: pathname === ROUTER_PATH.USERS ? "default" : "ghost",
    },
  ]

  return (
    <TooltipProvider delayDuration={0}>
      <div
        data-collapsed={isCollapsed}
        className={`group flex flex-col gap-4 ${isCollapsed ? "w-auto" : "xl:w-[15%] lg:w-[25%] md:w-[40%] w-fit"}`}
      >
        <Separator />
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={link.to}
                    className={cn(
                      buttonVariants({ variant: link.variant, size: "icon" }),
                      "h-9 w-9",
                      link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-muted-foreground">
                      {link.label}
                    </span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={index}
                href={link.to}
                className={cn(
                  buttonVariants({ variant: link.variant, size: "sm" }),
                  link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                  "justify-start "
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />
                <div className="md:inline-block hidden">
                  {link.title}
                  {link.label && (
                    <span
                      className={cn(
                        "ml-auto",
                        link.variant === "default" &&
                        "text-background dark:text-white"
                      )}
                    >
                      {link.label}
                    </span>
                  )}
                </div>
              </Link>
            )
          )}
        </nav>
        {isCollapsed ? (
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                variant={"unstyled"}
                onClick={() => { setIsCollapsed(!isCollapsed) }}
                className={cn(
                  // buttonVariants({ variant: "ghost", size: "sm" }),
                  "h-9 w-9 mt-auto p-0 justify-center",
                )}
              >
                <ListCollapse className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" className="flex items-center gap-4">
              Expand
            </TooltipContent>
          </Tooltip>
        ) : (
          <Button
            variant={"unstyled"}
            onClick={() => { setIsCollapsed(!isCollapsed) }}
            className={cn(
              "justify-start mt-auto"
            )}
          >
            <ListCollapse className="mr-2 h-4 w-4" />
            <div className="md:inline-block hidden">
              Collapse
            </div>
          </Button>
        )
        }
      </div>
    </TooltipProvider >
  )
}