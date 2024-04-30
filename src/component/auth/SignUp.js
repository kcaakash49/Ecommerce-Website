import React from 'react'
import { Card, Input, Form, Button } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};

const SignUp = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverBg: "",
            defaultHoverColor: "white",

          },

        },
      }}
    >
    <div>
      <Card className='w-[500px] bg-zinc-400'>
        <div className='text-3xl font-bold'>Sign Up</div>
        <div className='pb-6'>It's quick and easy</div>
        <Form onFinish={onFinish} className='flex flex-col items-center'>
          <Form.Item
            label="First Name"
            name="firstname"
            className='w-3/4'
            rules={
              [
                {
                  required: true,
                  message: 'Please input your firstname'
                },
              ]
            }>
            <Input placeholder='First Name' className='text-center ' />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastname"
            className='w-3/4'
            rules={
              [
                {
                  required: true,
                  message: 'Please input your lastname'
                },
              ]
            }>
            <Input placeholder='Last Name' className='text-center'/>
          </Form.Item>
          <Form.Item
            label="Mail ID"
            name="mailid"
            className='w-3/4'
            rules={
              [
                {
                  required: true,
                  message: 'Please input your lastname'
                },
              ]
            }
           >
            <Input placeholder='Email ID or Mobile Number' className='text-center'/>
          </Form.Item>
          <Form.Item
            label = "Username"
            name = "username"
            className='w-3/4'
            rules = {[
              {
                required:true,
                message: "Please input a valid username"
              },
            ]}>
              <Input placeholder='Username' className='text-center'/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              className='w-3/4'
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder='Password' className='text-center'/>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType='submit' className='bg-black hover:bg-'>
                Sign Up
              </Button>
            </Form.Item>

        </Form>
      </Card>
    </div>
    </ConfigProvider>
  )
}

export default SignUp
