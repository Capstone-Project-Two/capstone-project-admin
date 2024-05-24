"use client"
import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import Sidebar from '@/components/layout/sidebar';

const { Content } = Layout;

type Props = {
  children: React.ReactNode
}

function LayoutProvider({ children }: Props) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className='h-screen'>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}>
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
      </Sidebar>
    </Layout>
  )
}

export default LayoutProvider