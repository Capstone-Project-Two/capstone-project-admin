"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent, TooltipProvider, TooltipTrigger
} from "@/components/ui/tooltip"
import {
  Archive,
  ArchiveX,
  File,
  Inbox, LucideIcon, Send, Trash2,
  User
} from "lucide-react"
import { useState } from "react"

type Props = {
}

type TLink = {
  title: string
  label?: string
  icon: LucideIcon
  variant: "default" | "ghost"
}

export function Sidebar({ }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const links: Array<TLink> = [
    {
      title: "Inbox",
      label: "128",
      icon: Inbox,
      variant: "default",
    },
    {
      title: "Drafts",
      label: "9",
      icon: File,
      variant: "ghost",
    },
    {
      title: "Sent",
      label: "",
      icon: Send,
      variant: "ghost",
    },
    {
      title: "Junk",
      label: "23",
      icon: ArchiveX,
      variant: "ghost",
    },
    {
      title: "Trash",
      label: "",
      icon: Trash2,
      variant: "ghost",
    },
    {
      title: "Archive",
      label: "",
      icon: Archive,
      variant: "ghost",
    },
  ]

  return (
    <TooltipProvider delayDuration={0}>
      <div
        data-collapsed={isCollapsed}
        className={`group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 ${isCollapsed ? "w-auto" : "w-[15%]"}`}
      >
        <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {isCollapsed ? (
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => {
                    setIsCollapsed(!isCollapsed)
                  }}
                  className={"w-9 h-9 flex-shrink-0 p-0"}
                >
                  <User className="w-4 h-4 bg-primary text-white" />
                  <span className="sr-only">Logo</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                Logo
                {true && (
                  <span className="ml-auto text-muted-foreground">
                    label
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Button
              onClick={() => {
                setIsCollapsed(!isCollapsed)
              }}
              className={"dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white"}
            >
              Logo
            </Button>
          )}
          {links.map((link, index) =>
            isCollapsed ? (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
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
                href="#"
                className={cn(
                  buttonVariants({ variant: link.variant, size: "sm" }),
                  link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                  "justify-start"
                )}
              >
                <link.icon className="mr-2 h-4 w-4" />
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
              </Link>
            )
          )}
        </nav>
      </div>
    </TooltipProvider>
  )
}