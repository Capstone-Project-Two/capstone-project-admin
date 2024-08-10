"use client"
import React, { Dispatch, SetStateAction } from "react"
import { Avatar, Button, Dropdown, Layout, MenuProps, notification, Space, theme } from "antd"
import { DownOutlined, MenuFoldOutlined } from "@ant-design/icons"
import { authSignOut } from "@/service/auth-service"
import { useSession } from 'next-auth/react'

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
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div onClick={async () => {
          await authSignOut().then(() => {
            notification.success({
              message: 'Logout successful',
            })
          });
        }}>Logout</div>
      ),
    },
  ]
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const session = useSession()
  const { data } = session
  return (
    <Layout>
      <Header className='flex items-center px-6' style={{ background: colorBgContainer, width: "100%", justifyContent: "space-between" }}>
        <Button
          type='text'
          icon={<MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="p-6 bg-primary text-white"
        />
        <Dropdown menu={{ items }}>
          <div onClick={(e) => e.preventDefault()}>
            <Space>
              {data?.user.username}
              <Avatar src={(data?.user.image as string)} />
              <DownOutlined />
            </Space>
          </div>
        </Dropdown>
      </Header>
      {children}
    </Layout >
  )
}

export default Navbar
