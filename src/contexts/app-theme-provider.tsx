import "@/styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntdProvider from "./antd-provider";
import ProgressProvider from "./progress-bar-provider";

type Props = {
  children: React.ReactNode
}

function AppThemeProvider({ children }: Props) {
  return (
    <ProgressProvider>
      <AntdRegistry>
        <AntdProvider>
          {children}
        </AntdProvider>
      </AntdRegistry>
    </ProgressProvider>
  )
}

export default AppThemeProvider
