import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { useLocation } from 'react-router-dom';




import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { menuItems } from '../component/utils';

const { Header, Content, Sider } = Layout;

const AuthLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = React.useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleClick = (key)=>{
    console.log("forCLick", key)
    // navigate(key.key)
    navigate(`${key.key}`)
  }

  const location = useLocation();
  const { username } = location.state || {};

  return (
    <ConfigProvider
    theme={{
      components: {
        Menu:{
          // darkItemBg:'red',
          // itemActiveBg:'red'
          
        }
      },
    }}
  >
    <Layout>
      <Header className='text-white flex justify-between px-2 bg-slate-700'>
        <div onClick={()=>navigate('/')} className='cursor-pointer'>Logo</div>
        <div>{username}</div>
        
        
      </Header>
      <Layout>
        <Sider>
          
          <Menu
        defaultSelectedKeys={['']}
        defaultOpenKeys={['']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={menuItems}
        onClick={(key)=>handleClick(key)}
        className='min-h-screen'
        
      />
        
         
        </Sider>
        <Layout className='bg-blue-100'>
          
          <Content className='m-2'>
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
    </ConfigProvider>
  );
};
export default AuthLayout;
