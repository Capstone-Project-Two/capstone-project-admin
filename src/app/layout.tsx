import "@/styles/globals.css";
import { fontsans } from "@/utils/fonts";
import { pageMetadata } from "@/utils/metadata-helpter";
import { ENV_MODE } from "@/constants/env-constant";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/layout/sidebar";

export const metadata = pageMetadata({ title: `Capstone Admin - ${ENV_MODE !== 'production' && ENV_MODE}` })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen flex bg-background font-sans antialiased",
        fontsans.variable
      )}>
        <Sidebar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
