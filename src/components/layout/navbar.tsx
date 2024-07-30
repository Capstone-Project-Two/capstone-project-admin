"use client"
import React, { Dispatch, SetStateAction } from "react"
import { Button, Layout, theme } from "antd"
import { MenuFoldOutlined } from "@ant-design/icons"


type Props = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
}

type TLink = {
  key: string;
  label: React.ReactNode
  icon?: any
}

const { Header } = Layout

function Navbar({ collapsed, setCollapsed, children }: Props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className='flex items-center px-6' style={{ background: colorBgContainer, width: "100%", justifyContent: "start" }}>
        <Button
          type='text'
          icon={<MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="p-6 bg-primary text-white"
        />
        {/* <Menu
          mode="horizontal"
          defaultSelectedKeys={[ROUTER_PATH.HOMEPAGE]}
          selectedKeys={[pathname]}
          items={renderNavbarItems}
          style={{ flex: 1, minWidth: 0, height: 60, border: 'none' }}
        /> */}
      </Header>
      {children}
    </Layout >
  )
}

export default Navbar
