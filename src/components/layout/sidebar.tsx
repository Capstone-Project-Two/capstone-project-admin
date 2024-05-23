"use client"

import {
  LayoutDashboard, LucideIcon,
  User
} from "lucide-react"
import { useState } from "react"
import { ROUTER_PATH } from "@/constants/route-constant"
import { usePathname } from "next/navigation"

type Props = {}

type TLink = {
  title: string
  label?: string
  icon: LucideIcon
  variant: "default" | "ghost"
  to: string
}

export function Sidebar({ }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false)
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
    <div>
      Sidebar
    </div>
  )
}