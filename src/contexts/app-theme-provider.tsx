import "@/styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import AntdProvider from "./antd-provider";
import ProgressProvider from "./progress-bar-provider";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode
}

function AppThemeProvider({ children }: Props) {
  return (
    <SessionProvider>
      <ProgressProvider>
        <AntdRegistry>
          <AntdProvider>
            {children}
          </AntdProvider>
        </AntdRegistry>
      </ProgressProvider>
    </SessionProvider>
  )
}

export default AppThemeProvider
