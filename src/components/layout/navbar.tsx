import { ROUTER_PATH } from "@/constants/route-constant"
import { MenuFoldOutlined } from "@ant-design/icons"
import { Button, Layout, Menu, MenuProps, theme } from "antd"
import { LayoutDashboard, User } from "lucide-react"
import Link from "next/link"
import React, { Dispatch, SetStateAction } from "react"

type Props = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
}

type TLink = {
  label: React.ReactNode
  icon?: any
}

const { Header } = Layout

function Navbar({ collapsed, setCollapsed, children }: Props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navBarLinks: Array<TLink> = [
    {
      label: <Link href={ROUTER_PATH.HOMEPAGE}>Overview</Link>,
      icon: LayoutDashboard,
    },
    {
      label: <Link href={ROUTER_PATH.USERS}>Users</Link>,
      icon: User,
    },
  ]

  const renderNavbarItems: MenuProps['items'] = navBarLinks.map((item, index) => ({
    key: `nav${index}`,
    icon: React.createElement(item.icon),
    label: item.label
  }))
  return (
    <Layout>
      <Header className='flex items-center px-6' style={{ background: colorBgContainer, width: "100%", justifyContent: "space-between" }}>
        <Button
          type='text'
          icon={<MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="p-6 bg-primary text-white"
        />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={renderNavbarItems}
          style={{ flex: 1, minWidth: 0, height: 60 }}
        />
      </Header>
      {children}
    </Layout >
  )
}

export default Navbar