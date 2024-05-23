import { AntdRegistry } from "@ant-design/nextjs-registry"
import AntdProvider from "./antd-provider"

type Props = {
  children: React.ReactNode
}

function AppThemeProvider({ children }: Props) {
  return (
    <AntdRegistry>
      <AntdProvider>
        {children}
      </AntdProvider>
    </AntdRegistry>
  )
}

export default AppThemeProvider