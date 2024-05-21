import "@/assets/styles/globals.css";
import { fontsans } from "@/assets/fonts";
import { pageMetadata } from "@/utils/metadata-helpter";
import { ENV_MODE } from "../constants/env-constant";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({ title: `Capstone Admin - ${ENV_MODE !== 'production' && ENV_MODE}` })

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
        Navbar
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
