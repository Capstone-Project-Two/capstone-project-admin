import AntdProvider from "./antd-provider"

type Props = {
  children: React.ReactNode
}

function AppThemeProvider({ children }: Props) {
  return (
    <AntdProvider>
      {children}
    </AntdProvider>
  )
}

export default AppThemeProvider