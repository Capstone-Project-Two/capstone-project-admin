import AppThemeProvider from "@/contexts/app-theme-provider";

type Props = {
  children: React.ReactNode
}

async function RootLayout({ children }: Props) {
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
