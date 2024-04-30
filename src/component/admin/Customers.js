import React from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomer } from '../../services/Products';
import Header from './Header';

const Customers = () => {
  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Mike',
  //     age: 32,
  //     address: '10 Downing Street',
  //   },
  //   {
  //     key: '2',
  //     name: 'John',
  //     age: 42,
  //     address: '10 Downing Street',
  //   },
  // ];

  const columns = [
    {
      title: 'FirstName',
      dataIndex: ['name','firstname'],
      key: 'name',
    },
    {
      title: 'LastName',
      dataIndex: ['name','lastname'],
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: ['address','city'],
      key: 'address',
    },
    {
      title: "Street",
      dataIndex: ['address','street']
    }
  ];
  const dispatch = useDispatch();
  const { data,loading } = useSelector((state) => state.allcustomer);

  console.log("Customer Data", data, loading);

  React.useEffect(() => {
    dispatch(fetchCustomer())
  }, [dispatch])
  return (

    <div>
      <div><Header name = "Customers"/> </div>
      <Table dataSource={data?.data} columns={columns} loading = {loading} className='border-2 border-black'/>;
    </div>

  )
}

export default Customers
