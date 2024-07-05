
import React, { useState } from 'react';
import { Layout } from 'antd'
const { Sider } = Layout;

const SiderComp=()=>{
  const [collapsed, setCollapsed] = useState(false);
  return(
      <Sider hasSider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        color: 'white',
      }}>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
        <p>Sider</p>
      </Sider>
  )
}

export default SiderComp

