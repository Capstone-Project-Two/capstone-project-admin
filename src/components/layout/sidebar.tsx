import { Dispatch, SetStateAction, useState } from "react";
import { Layout, Menu, MenuProps } from 'antd';
import Link from "next/link";
import { ROUTER_PATH } from "@/constants/route-constant";
import { LayoutDashboard, PodcastIcon, User } from "lucide-react";
import React from "react";
import Navbar from "./navbar";

type Props = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
}

type TLink = {
  label: React.ReactNode
  icon?: any
  children?: [
    {
      label: React.ReactNode;
      icon?: any
    }
  ]
}

const { Sider } = Layout;

function Sidebar({ collapsed, setCollapsed, children }: Props) {
  const [isBroken, setIsBroken] = useState(false)

  const sidebarLinks: Array<TLink> = [
    {
      label: <Link href={ROUTER_PATH.HOMEPAGE}>Logo</Link>,
      icon: LayoutDashboard,
    },
    {
      label: <Link href={ROUTER_PATH.HOMEPAGE}>Overview</Link>,
      icon: LayoutDashboard,
    },
    {
      label: <Link href={ROUTER_PATH.USERS}>Users</Link>,
      icon: User,
    },
    {
      label: <Link href={ROUTER_PATH.POSTS}>Posts</Link>,
      icon: PodcastIcon,
      children: [
        {
          label: <Link href={ROUTER_PATH.POSTS_HISTORY}>Post History</Link>,
        }
      ]
    }
  ]

  const renderSidebarItems: MenuProps['items'] = sidebarLinks.map((item, index) => ({
    key: `sub${index}`,
    icon: React.createElement(item.icon),
    label: item.label,
    children: item.children
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
          defaultSelectedKeys={['1']}
          items={renderSidebarItems}
          style={{
            padding: "16px 0",
            borderRight: "1px solid rgba(0,0,0, 0.15)",
            height: "100vh"
          }}
        />
      </Sider>
      <Navbar setCollapsed={setCollapsed} collapsed={collapsed}>
        {children}
      </Navbar>
    </Layout>
  )
}

export default Sidebar