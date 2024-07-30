"use client"
import { ROUTER_PATH } from "@/constants/route-constant"
import { MenuFoldOutlined } from "@ant-design/icons"
import { Button, Layout, MenuProps, theme } from "antd"
import { Calendar, LayoutDashboard, Stethoscope, User } from "lucide-react"
import React, { Dispatch, SetStateAction } from "react"
import { LayoutLink } from "./layout-link"

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

  const navBarLinks: Array<TLink> = [
    {
      key: ROUTER_PATH.HOMEPAGE,
      label: <LayoutLink href={ROUTER_PATH.HOMEPAGE}>Overview</LayoutLink>,
      icon: LayoutDashboard,
    },
    {
      key: ROUTER_PATH.PATIENTS,
      label: <LayoutLink href={ROUTER_PATH.PATIENTS}>Patients</LayoutLink>,
      icon: User,
    },
    {
      key: ROUTER_PATH.THERAPISTS,
      label: <LayoutLink href={ROUTER_PATH.THERAPISTS}>Therapists</LayoutLink>,
      icon: Stethoscope,
    },
    {
      key: ROUTER_PATH.APPOINTMENTS,
      label: <LayoutLink href={ROUTER_PATH.APPOINTMENTS}>Appointments</LayoutLink>,
      icon: Calendar,
    },
  ]

  const renderNavbarItems: MenuProps['items'] = navBarLinks.map((item) => ({
    key: item.key,
    icon: React.createElement(item.icon),
    label: item.label
  }))

  return (
    <Layout>
      <Header className='flex items-center px-6' style={{ background: colorBgContainer, width: "100%", justifyContent: "start" }}>
        <Button
          type='text'
          icon={<MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="p-6 bg-primary text-white"
        />
      </Header>
      {children}
    </Layout >
  )
}

export default Navbar
