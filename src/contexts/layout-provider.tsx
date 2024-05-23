import NavBar from "@/components/layout/nav-bar"
import { Sidebar } from "@/components/layout/sidebar"

type Props = {
  children: React.ReactNode
}

function LayoutProvider({ children }: Props) {
  return (
    <div className="flex h-screen">
      <NavBar />
      <div className="flex mt-[60px] w-full">
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default LayoutProvider