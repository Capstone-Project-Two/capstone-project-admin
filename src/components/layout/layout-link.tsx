import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const LayoutLink = ({ href, className, children }: { href: string, className?: string, children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <Link href={href} className={cn(
      pathname === href && 'text-primary',
      className
    )}>
      {children}
    </Link>
  )
}