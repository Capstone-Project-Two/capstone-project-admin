"use client"
import { useState } from "react";
import { Layout, Menu, MenuProps, theme } from 'antd';
import Link from "next/link";
import { ROUTER_PATH } from "@/constants/route-constant";
import { LayoutDashboard, User } from "lucide-react";
import React from "react";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode
}

type TLink = {
  key: string
  label: React.ReactNode
  icon?: any
}

const { Sider, Content } = Layout;

function Sidebar({ children }: Props) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false);
  const [isBroken, setIsBroken] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const sidebarLinks: Array<TLink> = [
    {
      key: '',
      label: <Link href={ROUTER_PATH.HOMEPAGE}>Logo</Link>,
      icon: LayoutDashboard,
    },
    {
      key: ROUTER_PATH.HOMEPAGE,
      label: <Link href={ROUTER_PATH.HOMEPAGE}>Overview</Link>,
      icon: LayoutDashboard,
    },
    {
      key: ROUTER_PATH.USERS,
      label: <Link href={ROUTER_PATH.USERS}>Users</Link>,
      icon: User,
    }
  ]

  const renderSidebarItems: MenuProps['items'] = sidebarLinks.map((item) => ({
    key: item.key,
    icon: React.createElement(item.icon),
    label: item.label,
  }))
  return (
    <Layout>
      <Sider
        width={200}
        trigger={null}
        breakpoint="lg"
        collapsible
        collapsedWidth={isBroken ? "0" : "64"}
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          setIsBroken(broken)
        }}
      >
        <Menu
          mode='inline'
          defaultSelectedKeys={[ROUTER_PATH.HOMEPAGE]}
          selectedKeys={[pathname]}
          items={renderSidebarItems}
          style={{
            padding: "16px 0",
            borderRight: "1px solid rgba(0,0,0, 0.15)",
            height: "100vh"
          }}
        />
      </Sider>
      <Navbar setCollapsed={setCollapsed} collapsed={collapsed}>
        <Content
          style={{
            overflow: 'initial',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            margin: 24
          }}>
          <div style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
            {children}
          </div>
        </Content>
      </Navbar>
    </Layout>
  )
}

export default Sidebar