"use client"

import NavBar from "@/components/layout/nav-bar"
import { Sidebar } from "@/components/layout/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { useState } from "react"

type Props = {
  children: React.ReactNode
}

function LayoutProvider({ children }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <div className="flex h-screen">
      <NavBar />
      <div className="flex mt-[60px] w-full">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        {children}
      </div>
      <Toaster duration={5000} closeButton={true} position="top-right" />
    </div>
  )
}

export default LayoutProvider