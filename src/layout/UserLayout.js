import React from 'react';
import { AppstoreAddOutlined, DownOutlined, LaptopOutlined, LogoutOutlined, NotificationOutlined, SettingFilled, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Layout, theme, Input, AutoComplete } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import logo_image from '../logo.png'
import { Button, ConfigProvider, Space, Image, Drawer } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import { useAppContext } from '../component/ContextAPI';
import { useState } from 'react';
import Order from '../component/user/Order';
import { useDispatch, useSelector } from 'react-redux'
import { createDynamicMiddleware } from '@reduxjs/toolkit';
// import { hover } from '@testing-library/user-event/dist/hover';
import { logout } from '../redux/slices/LoginTab';
import { fetchData, fetchdynamicProduct } from '../services/Products';

const { Header, Content, Footer, Sider } = Layout;




const UserLayout = () => {
  const cartData = useSelector((state) => state);
  // console.log("Userlayout Console", cartData);
  const dispatch = useDispatch();
  
  
  
  
  const items = [
    {
      key: '1',
      label: <div onClick={() => handleLogout("/user/profile")}>Profile</div>,
      icon: <UserOutlined />
      
    },
    {
      key: '2',
      label: <div onClick={() => handleLogout('/user/settings')}>Settings</div>,
      icon: <SettingOutlined />
    },
    {
      key: '3',
      label: <div onClick={() => handleLogout(3)}>Logout</div>,
      icon: <LogoutOutlined />
    },
  ];
  
  const handleLogout = (e) => {
    console.log("Event", e);
    if (e === 3) {
      dispatch(logout());
      
    } else {
      navigate(`${e}`);
    }
    
    
  }
  
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const navigate = useNavigate();
  
  const iteminfo = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About Us",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ]
  const authInfo = [
    {
      name: "Login",
      link: "/auth/login"
    },
    {
      name: "Sign Up",
      link: "/auth/signup"
    }
  ]
  
  const { appState, updateState } = useAppContext()
  // console.log("USer layout", [...new Set(appState?.addToCart)])
  
  const [open, setOpen] = useState(false);
  
  const showDrawer = () => {
    if (cartData?.addtocart?.data?.length >= 1) {
      setOpen(true);
    }
  };
  
  const onClose = () => {
    setOpen(false);
  };

  const { data: searchData, loading: searchLoading } = useSelector((state) => state.searchproduct)
  console.log("Searchdata", searchData.data);

  const onSelect = (e,option) => {
    console.log("on select",e, option.id);
    navigate(`/searchproduct/${option.id}`)
  }
  
  // React.useEffect(() => {
  //   dispatch(fetchdynamicProduct())
  // }, [dispatch])
  
  const handleSearch = (value) => {
    console.log("HandleSearch", value.target.value);
    dispatch(fetchdynamicProduct(value.target.value));
  }



  // const handleCart = (item) => {
  //   updateState({
  //     ...appState,
  //     addToCart: [...item]
  //   })
  //   navigate('/cart')
  // }
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: '#0e7490',
            footerBg: '#292524',
            // fontSize: "1.5rem",
            headerPadding: '0px 20px'

          },
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Header className='flex items-center justify-between text-white sticky top-0 z-10'>
          {/* <div className="demo-logo" /> */}
          {/* <div className='logo'>
          <img src={logo_image} alt="image not displayed" />
          <div className='logo-name'>KCTECH</div>
          
        </div> */}
          <div className='flex items-center'>
            <div className='h-13 w-12 mt-4 cursor-pointer' >
              <Image src={logo_image} alt="Image not displayed" preview={false} onClick={() => navigate('/')} />
            </div>
            <div className="font-pacifico cursor-pointer" onClick={() => navigate('/')}>KC Sports</div>
          </div>
          <div>
          <AutoComplete
                popupMatchSelectWidth={200}
                style={{
                  width: 500,
                }}
                options={searchData?.data?.map((item)=>{
                  return{
                    ...item,
                    value:item?.title
                    ,
                    label:item.category

                  }
                })}
                onSelect={onSelect}
                size="large"
              >
                <Input.Search
                  size="large"
                  placeholder="Search category"
                  enterButton
                  onPressEnter={handleSearch}
                />
              </AutoComplete>
          </div>
          <div className='flex gap-7 text-2xl font-serif'>
            {
              iteminfo.map((item) => (
                <div key={item.link} className='cursor-pointer hover:underline hover:text-3xl' onClick={() => navigate(item.link)}>
                  {item.name}
                </div>
              ))
            }
          </div>

          {/* <div className='search-box'>
          <input type="text" placeholder='Search for keywords'/>
        </div> */}
          {/* <ul style={{color:"white",display:"flex",listStyle:"none"}}>
          <li style = {{padding:'10px'}}>Home</li>
          <li style = {{padding:'10px'}}>About Us</li>
          <li style = {{padding:'10px'}}>Our Services</li>
          <li style = {{padding:'10px'}}>Contact Us</li>
        </ul> */}
          <div className='flex items-center gap-1'>
            {
              cartData?.authInfo?.userToken && (

                <div>
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >

                    <div className='flex items-center gap-1 '>
                      <Avatar icon={<UserOutlined />} size="large" />
                      <div>Username</div>

                      {/* <DownOutlined /> */}
                    </div>

                  </Dropdown>
                </div>

              )
            }
            <div className='mr-5 cursor-pointer'>
              <Badge count={cartData?.addtocart?.data?.length} size="small">
                <Avatar icon={<ShoppingCartOutlined onClick={showDrawer} />} size="large" />
              </Badge>
            </div>
            {
              authInfo.map((item) => (
                <div key={item.link} className='flex  cursor-pointer hover:underline' onClick={() => navigate(item.link)}>
                  {item.name}
                </div>
              ))
            }
          </div>

        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer className='text-white text-center'>
          Copyright ©{new Date().getFullYear()} Created by KCTECH
        </Footer>
      </Layout>
      <div>
        {
          open && (
            <Drawer title="Cart" onClose={onClose} open={open} placement='left'>
              <Order />
            </Drawer>
          )}
      </div>
    </ConfigProvider>
  );
};
export default UserLayout;