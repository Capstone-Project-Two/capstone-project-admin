import { fontsans } from "@/utils/fonts";
import { ENV_MODE } from "@/constants/env-constant";
import { cn } from "@/lib/utils";
import LayoutProvider from "@/contexts/layout-provider";
import { Metadata } from "next";
import { logo } from "@/utils/image-req-helper";


export const metadata: Metadata = {
  icons: logo,
  title: {
    template: `%s | Capstone Admin - ${ENV_MODE !== 'production' && ENV_MODE}`,
    default: `Capstone Admin - ${ENV_MODE !== 'production' && ENV_MODE}`
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={cn(
      "min-h-screen bg-background font-sans antialiased",
      fontsans.variable
    )}>
      <LayoutProvider>
        {children}
      </LayoutProvider>
    </main>
  );
}
