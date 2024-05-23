import { AntdRegistry } from "@ant-design/nextjs-registry"

type Props = {
  children: React.ReactNode
}

function AntdProvider({ children }: Props) {
  return (
    <AntdRegistry>
      {children}
    </AntdRegistry>
  )
}

export default AntdProvider