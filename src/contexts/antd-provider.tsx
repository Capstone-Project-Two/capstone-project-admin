import { primary } from "@/styles/colors"
import { ConfigProvider } from "antd"

type Props = {
  children: React.ReactNode
}

function AntdProvider({ children }: Props) {
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        token: {
          // Seed Token
          colorPrimary: primary,
          borderRadius: 10,
        }
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default AntdProvider