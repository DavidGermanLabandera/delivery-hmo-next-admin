import { useState } from 'react';
import { Layout, Menu } from "antd";
import { HomeOutlined, PoweroffOutlined } from "@ant-design/icons";
import { auth } from "@src/app/firebase";

const Sider = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
    >
      <Menu
        theme="dark"
        mode="inline"
        items={[
          {
            key: 'Inicio',
            label: 'Inicio',
            icon: <HomeOutlined />
          },
          {
            key: 'Cerrar sesión',
            label: 'Cerrar sesión',
            icon: <PoweroffOutlined />,
            onClick: () => auth.signOut()
          },
        ]}
      />
    </Layout.Sider>
  );
};

export default Sider;