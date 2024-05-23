import "@/styles/globals.css";
import { fontsans } from "@/utils/fonts";
import { ENV_MODE } from "@/constants/env-constant";
import { cn } from "@/lib/utils";
import LayoutProvider from "@/contexts/layout-provider";
import Container from "@/components/ui/container";
import { Metadata } from "next";
import AntdProvider from "@/contexts/antd-provider";


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
        <AntdProvider>
          <LayoutProvider>
            <Container>
              {children}
            </Container>
          </LayoutProvider>
        </AntdProvider>
      </body>
    </html>
  );
}
