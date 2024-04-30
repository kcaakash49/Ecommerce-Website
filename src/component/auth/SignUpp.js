import React from 'react'
import { Card, Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';


const onFinish = (values) => {
  console.log('Success:', values);
};

const SignUpp = () => {
  const navigate = useNavigate()

  const handleBack = () => (
    navigate('/')
  )

  const goToLogin = () => (
    navigate('/auth/login')
  )
  return (
    
    <div className='pb-10'>
      <Card className='w-[900px] bg-green-500 opacity-90 border border-black shadow-xl shadow-red-900'>
        <div className='font-bold text-3xl pb-14 flex gap-80'>
          <div><LeftOutlined onClick={handleBack} /></div>
          <div>Sign Up</div>
        </div>
        <div>
          <Form onFinish={onFinish} layout='vertical' className='grid grid-cols-12 gap-x-2 w-full'>

            <Form.Item
              label="First Name"
              name="firstname"
              className='col-span-6'
              rules={[
                {
                  required: true,
                  message: 'Please input your FirstName!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastname"
              className='col-span-6'
              rules={[
                {
                  required: true,
                  message: 'Please input your lastname!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mail ID"
              name="mailid"
              className='col-span-6'
              rules={[
                {
                  required: true,
                  message: 'Please input your mailid!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mobile Number"
              name="mobileno"
              className='col-span-6'
              rules={[
                {
                  required: true,
                  message: 'Please input your mobile number!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Username"
              name="username"
              className='col-span-6'
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
              name="username"
              className='col-span-6'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <div>
              <Form.Item>

                <Button type="primary" htmlType='submit' className='bg-red-500 hover:bg-red-700'>
                  Submit
                </Button>
              </Form.Item>

            </div>

          </Form>
        </div>
        <div className='text-blue-500 hover:underline cursor-pointer' onClick={goToLogin}>
          Already have a account?
        </div>
      </Card>


    </div>
    
  )
}

export default SignUpp
