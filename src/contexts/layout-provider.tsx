import React from 'react';
import { Layout } from 'antd';
import Sidebar from '@/components/layout/sidebar';
import ProgressProvider from './progress-bar-provider';

type Props = {
  children: React.ReactNode
}

function LayoutProvider({ children }: Props) {
  return (
    <ProgressProvider>
      <Layout className='h-screen overflow-hidden'>
        <Sidebar>
          {children}
        </Sidebar>
      </Layout>
    </ProgressProvider >
  )
}

export default LayoutProvider
