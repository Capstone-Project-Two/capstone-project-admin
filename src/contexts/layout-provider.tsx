"use client"

import NavBar from "@/components/layout/nav-bar"
import { Sidebar } from "@/components/layout/sidebar"
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
    </div>
  )
}

export default LayoutProvider