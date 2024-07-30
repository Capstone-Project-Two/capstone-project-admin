import React, { Suspense } from 'react';
import { Layout, Spin } from 'antd';
import Sidebar from '@/components/layout/sidebar';
import ProgressProvider from './progress-bar-provider';

type Props = {
  children: React.ReactNode
}

function LayoutProvider({ children }: Props) {
  return (
    <ProgressProvider>
      <Layout className='h-screen overflow-hidden'>
        <Suspense fallback={<Spin/>}>
          <Sidebar>
            {children}
          </Sidebar>
        </Suspense>
      </Layout>
    </ProgressProvider >
  )
}

export default LayoutProvider
