import React from 'react';
import Header from './Header';
import { Form } from 'antd';
import { AntdInput, AntdUpload, SaveButton } from '../common';





const Profile = () => {

  const handleFinish = (values)=>{
    console.log("Form Values",values);
  }

  return (
    <div>
      <div><Header name="Profile" /></div>
      <Form className='grid grid-cols-12 gap-4 grid-flow-row' layout='vertical' onFinish = {handleFinish}>
        <div className='col-span-3'><AntdInput required name="first_name" label="First Name" /></div>
        <div className='col-span-3'><AntdInput required name="last_name" label="Last Name" /></div>
        <div className='col-span-3'><AntdInput required name="address" label="Address" /></div>
        <div className='col-span-3'><AntdInput required name="email" label="Email" type='email' /></div>
        <div className='col-span-3'><AntdInput name="mobile" label="Phone No." type='number' /></div>
        <div className='col-span-3'><AntdUpload name = "image" label = "Image"/> </div>
        <div className='col-span-12'><SaveButton name="Save" htmlType="submit" /></div>
      </Form>

    </div>
  )
}

export default Profile
