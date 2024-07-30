"use client";
import { useState } from "react";
import { Layout, Menu, MenuProps, theme } from "antd";
import Link from "next/link";
import { ROUTER_PATH } from "@/constants/route-constant";
import {
  Calendar,
  CircleDollarSign,
  Database,
  LayoutDashboard,
  MailWarningIcon,
  PodcastIcon,
  Stethoscope,
  User,
} from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { LayoutLink } from "./layout-link";
import BaseImage from "../ui/base-image";
import { logo } from "@/utils/image-req-helper";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};

interface TLink {
  key: string;
  label: React.ReactNode;
  icon?: any;
  children?: ItemType<MenuItemType>[];
}

const { Sider, Content } = Layout;

function Sidebar({ children }: Props) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [isBroken, setIsBroken] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const sidebarLinks: Array<TLink> = [
    // {
    //   key: ROUTER_PATH.HOMEPAGE,
    //   label: <LayoutLink className="flex gap-3 items-center px-4 pt-4 bg-white" href={ROUTER_PATH.HOMEPAGE}><BaseImage src={logo} width={48} height={48} alt="Chantek" /> Chantek</LayoutLink>,
    // },
    {
      key: ROUTER_PATH.HOMEPAGE,
      label: <LayoutLink href={ROUTER_PATH.HOMEPAGE}>Overview</LayoutLink>,
      icon: LayoutDashboard,
    },
    {
      key: ROUTER_PATH.PATIENTS,
      label: <LayoutLink href={ROUTER_PATH.PATIENTS}>Patients</LayoutLink>,
      icon: User,
      children: [
        {
          key: ROUTER_PATH.SUSPEND_USER,
          label: (
            <LayoutLink href={ROUTER_PATH.SUSPEND_USER}>
              Suspended Patients
            </LayoutLink>
          ),
          icon: <MailWarningIcon size={20} />,
        },
      ],
    },
    {
      key: ROUTER_PATH.POSTS,
      label: <Link href={ROUTER_PATH.POSTS}>Posts</Link>,
      icon: PodcastIcon,
      children: [
        {
          key: ROUTER_PATH.POSTS_HISTORY,
          label: <Link href={ROUTER_PATH.POSTS_HISTORY}>Post History</Link>,
        },
      ],
    },
    {
      key: ROUTER_PATH.SOCKET_TEST,
      label: (
        <LayoutLink href={ROUTER_PATH.SOCKET_TEST}>Socket Test</LayoutLink>
      ),
      icon: Database,
    },
    {
      key: ROUTER_PATH.THERAPISTS,
      label: <LayoutLink href={ROUTER_PATH.THERAPISTS}>Therapists</LayoutLink>,
      icon: Stethoscope,
    },
    {
      key: ROUTER_PATH.CREDITS,
      label: <LayoutLink href={ROUTER_PATH.CREDITS}>Credit</LayoutLink>,
      icon: CircleDollarSign,
    },
    {
      key: ROUTER_PATH.APPOINTMENTS,
      label: <LayoutLink href={``}>Appointments</LayoutLink>,
      icon: Calendar,
      children: [
        {
          key: ROUTER_PATH.APPOINTMENTS_REQUESTED,
          label: (
            <LayoutLink href={ROUTER_PATH.APPOINTMENTS_REQUESTED}>
              Requested
            </LayoutLink>
          ),
        },
        {
          key: ROUTER_PATH.APPOINTMENTS_SCHEDULED,
          label: (
            <LayoutLink href={ROUTER_PATH.APPOINTMENTS_SCHEDULED}>
              Scheduled
            </LayoutLink>
          ),
        },
        {
          key: ROUTER_PATH.APPOINTMENTS_REJECTED,
          label: (
            <LayoutLink href={ROUTER_PATH.APPOINTMENTS_REJECTED}>
              Rejected
            </LayoutLink>
          ),
        },
      ],
    },
  ];

  const renderSidebarItems: MenuProps["items"] = sidebarLinks.map((item) => ({
    key: item.key,
    icon: item.icon ? React.createElement(item.icon) : null,
    label: item.label,
    children: item.children,
  }));
  return (
    <Layout>
      <Sider
        width={250}
        trigger={null}
        breakpoint="lg"
        collapsible
        collapsedWidth={isBroken ? "0" : "64"}
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          setIsBroken(broken);
        }}
      >
        <div className="flex gap-3 items-center px-4 pt-4 bg-white">
          <BaseImage src={logo} width={48} height={48} alt="Chantek" />
          {!collapsed && <h1 className="font-bold text-xl">
            Chantek
          </h1>}
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={[ROUTER_PATH.HOMEPAGE]}
          selectedKeys={[pathname]}
          items={renderSidebarItems}
          className="py-4 px-0 overflow-auto h-screen"
          style={{
            borderRight: "1px solid rgba(0, 0, 0, 0.15)",
          }}
        />
      </Sider>
      <Layout>
        <Navbar setCollapsed={setCollapsed} collapsed={collapsed}>
          <Content
            style={{
              overflow: "auto",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            className="sm:m-[24px] m-[16px]"
          >
            <div
              className="sm:p-[24px] p-[16px] w-full"
              style={{
                height: "100%",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              {children}
            </div>
          </Content>
        </Navbar>
      </Layout>
    </Layout>
  );
}

export default Sidebar;
