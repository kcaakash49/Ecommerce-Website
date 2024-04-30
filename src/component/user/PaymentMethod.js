import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import { payMethod } from '../utils/index'
import { Esewa } from './Esewa';

const PaymentMethod = () => {
  const cartData = useSelector((state) => state);
  console.log("Payment Cart", cartData);
  // const dataSource = [
  //     {
  //       key: '1',
  //       name: 'Mike',
  //       age: 32,
  //       address: '10 Downing Street',
  //     },
  //     {
  //       key: '2',
  //       name: 'John',
  //       age: 42,
  //       address: '10 Downing Street',
  //     },
  //   ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
  ];

  const total1 = cartData?.addtocart?.data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.qty;
  }, 0);

  const path = "https://uat.esewa.com.np/epay/main";
  const params = {
    amt: total1,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: total1,
    pid: "pid-20240421",
    scd: "EPAYTEST",
    su: "http://merchant.com.np/page/esewa_payment_success",
    fu: "http://merchant.com.np/page/esewa_payment_failed",

  }
  const [isPayment, setPayment] = React.useState({
    esewa: false,
    khalti: false
  })

  const handlePayment = (id) => {
    console.log("ID", id);
    if (id === 1) {
      setPayment({
        esewa: true,
        khalti: false
      })
    }
    else if (id === 2) {
      setPayment({
        esewa: false,
        khalti: true
      })

    }
  }
  console.log("ispayment", isPayment);

  return (
    <div className='p-10'>
      <h1>Payment</h1>
      <div className='grid md:grid-cols-12'>
        <div className='md:col-span-4'>
          <Table dataSource={cartData?.addtocart?.data} columns={columns} pagination={false} />
          Total: {total1}
        </div>
        <div>
        </div>
        <div className='md:col-span-5 flex gap-10'>
          {
            payMethod?.map((item) => (
              <div key={item.id} className=''>
                <div style={{ background: `${item.color}`, padding: '5px', cursor: 'pointer', width: '100px', textAlign: 'center', borderRadius: '10px' }} onClick={() => handlePayment(item.id)}>{item.name}</div>
              </div>
            ))
          }

        </div>
        <div>
          {
            isPayment?.esewa && (
              <Esewa path={path} params={params} />
            )
          }
        </div>
      </div>

    </div>
  )
}

export default PaymentMethod
