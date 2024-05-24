import "@/styles/globals.css";
import { fontsans } from "@/utils/fonts";
import { ENV_MODE } from "@/constants/env-constant";
import { cn } from "@/lib/utils";
import LayoutProvider from "@/contexts/layout-provider";
import { Metadata } from "next";
import AppThemeProvider from "@/contexts/app-theme-provider";


export const metadata: Metadata = {
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
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontsans.variable
      )}>
        <AppThemeProvider>
          <LayoutProvider>
            {children}
          </LayoutProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
