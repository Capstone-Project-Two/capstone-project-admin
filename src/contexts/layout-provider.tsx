"use client"
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu, theme } from 'antd';
import { LayoutDashboard, User } from 'lucide-react';
import { ROUTER_PATH } from '@/constants/route-constant';
import Link from 'next/link';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

type Props = {
  children: React.ReactNode
}

type TLink = {
  label: React.ReactNode
  icon?: any
}

function LayoutProvider({ children }: Props) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);
  const [showTrigger, setShowTrigger] = useState(false)
  const sidebarLinks: Array<TLink> = [
    {
      label: <Link href={ROUTER_PATH.HOMEPAGE}>Overview</Link>,
      icon: LayoutDashboard,
    },
    {
      label: <Link href={ROUTER_PATH.USERS}>Users</Link>,
      icon: User,
    },
    {
      label: (
        <Button
          type='text'
          onClick={() => setCollapsed(!collapsed)}
          style={{
            color: collapsed ? 'white' : 'black',
          }}
        >
          Collapse
        </Button>
      ),
      icon: collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
    }
  ]


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

  const renderSidebarItems: MenuProps['items'] = sidebarLinks.map((item, index) => ({
    key: `sub${index}`,
    icon: React.createElement(item.icon),
    label: item.label,
  }))

  return (
    <Layout >
      <Header className='flex items-center' style={{ background: colorBgContainer, borderBottom: "1px solid rgba(0,0,0, 0.15)" }}>
        <Link href={ROUTER_PATH.HOMEPAGE}>
          Logo
        </Link>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={renderNavbarItems}
          style={{ flex: 1, minWidth: 0, height: 60 }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          trigger={!showTrigger ? null : ''}
          collapsible
          breakpoint="lg"
          collapsedWidth={showTrigger ? "0" : "64"}
          onBreakpoint={(broken) => {
            if (broken)
              setShowTrigger(broken)
            else
              setShowTrigger(broken)
          }}
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ background: colorBgContainer }}
        >
          <Menu
            mode='inline'
            inlineCollapsed={collapsed}
            defaultSelectedKeys={['1']}
            items={renderSidebarItems}
            style={{
              borderRight: "1px solid rgba(0,0,0, 0.15)",
              height: "calc(100vh - 60px)"
            }}
          />
        </Sider>
        <Layout>
          <Content style={{
            overflow: 'initial',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutProvider