import "@/styles/globals.css";
import AppThemeProvider from "@/contexts/app-theme-provider"

type Props = {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppThemeProvider>
          {children}
        </AppThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
