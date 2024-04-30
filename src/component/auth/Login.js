import React from 'react'
import { Card, Button, Checkbox, Form, Input, Modal, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../services/LoginAction';
// import AdminLayout from "../../layout/AdminLayout"

// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };



const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginData = useSelector((state) => state);
  // console.log("login tab", LoginData);
  // console.log("loading", LoginData?.authInfo?.userToken);
  // console.log("loading1", LoginData.authInfo);


  console.log("navigation", LoginData?.authInfo?.userToken)
  if (LoginData?.authInfo?.userToken !== null && LoginData?.authInfo?.userToken !== undefined) {

    // navigate('/admin', { state: { e } });
    navigate('/')


  }


  const onFinish = async (values) => {
    // console.log("asd",values);
    // setIsLoading(true);
    // try{
    // const response = await userLogin(values)(dispatch).unwrap();
    // console.log("response",response)
    await userLogin(values)(dispatch).unwrap();



    // }catch(error){
    // setIsLoading(false);
    // }finally{

    // }

  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    console.log();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleBack = () => (
    navigate('/')
  )

  const createAccount = () => (
    navigate('/auth/signup')
  )

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "black",

          },
        },
      }}
    >
      <div>
        <Card className='w-[600px] bg-green-500 opacity-80 border border-black shadow-xl shadow-red-900'>
          <div className='font-bold text-3xl pb-14 flex gap-52'>
            <div><LeftOutlined onClick={handleBack} /></div>
            <div>Login</div>
          </div>
          <div>
            <Form onFinish={onFinish}>

              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <div className='flex justify-between'>
                <Form.Item
                  name="remember"
                  valuePropName="checked"

                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                {/* <div>
                <Button type="primary" onClick={showModal} className='bg-black'>
                  Open Modal
                </Button>
                
              </div> */}
                <Form.Item>
                  <div className='hover:underline cursor-pointer text-blue-500' onClick={showModal}>
                    Forgot Password?
                  </div>
                </Form.Item>



              </div>

              <div className='flex justify-between'>
                <Form.Item>

                  <Button type="primary" htmlType='submit' className='bg-red-500' loading={LoginData?.authInfo?.loading}>
                    Submit
                  </Button>
                </Form.Item>


                <Form.Item>
                  <Button type="primary" className='bg-green-700' onClick={createAccount}>
                    Create New Account
                  </Button>
                </Form.Item>



              </div>
            </Form>
          </div>
        </Card>
        {isModalOpen && (
          <Modal title="Forgot Password" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <Form>
              <Form.Item
                label="Username"
                name="username"
                rules={
                  [
                    {
                      required: true,
                    }
                  ]
                }
              >
                <Input />

              </Form.Item>

              <Form.Item
                label="Mail Id"
                name="mailid"
                rules={
                  [
                    {
                      required: true,
                    }
                  ]
                }
              >
                <Input />

              </Form.Item>

            </Form>
          </Modal>

        )}
      </div>
    </ConfigProvider>

  )
}

export default Login;
