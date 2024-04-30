import React from 'react';
import { Card } from 'antd';
import { MoneyCollectOutlined, TruckOutlined } from '@ant-design/icons';
import { Button } from 'antd/es/radio';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../../../redux/slices/AddToCart';




const ReUsableSecond = ({title,data}) => {
  const navigate = useNavigate();

  const cartData = useSelector((state)=>state);
  // console.log("Reusable Second", cartData)

  const dispatch = useDispatch();

  const addToCart = (item)=>{
    // item.qty = 1
    // updateState({...appState, 
    // addToCart:[...appState?.addToCart,...[item]]})

    dispatch(updateCart([...new Set([...cartData?.addtocart?.data,...[item]])]));
    }

  return (
    <div className='p-2 mb-2'>
      <div className='text-2xl font-bold mb-5'>{title}</div>
      <div className='grid grid-cols-12 grid-flow-row gap-12'>
        {
            data?.map((items)=>(
                <div key = {items.id} className='col-span-4'>
                    <Card className='bg-blue-300 shadow-2xl shadow-blue-600'>
                        <div className='grid gap-2'>
                            <div className='flex gap-10 items-center justify-start'>
                                <div><img src={items.image} alt="No preview" className='h-[80px] w-[80px] hover:h-[200px] hover:w-[200px] )}'onClick={()=>navigate('/details')} /></div>
                                <div className='font-bold text-xl'>{items.name}</div>
                            </div>
                            <div className='font-extrabold'>{items.info}</div>
                            <div className='text-red-500'><MoneyCollectOutlined /> {items.price}</div>
                            <div ><TruckOutlined /> {items.delivery}</div>
                            <div>
                                <Button className='bg-red-800 w-full text-center text-white font-bold' onClick={()=>addToCart(items)}>
                                    Add to Cart
                                </Button>
                            </div>
                            <div className='text-center'>Offer expires in 3 days</div>
                        </div>

                    </Card>
                </div>

            ))
        }
      </div>
    </div>
  )
}

export default ReUsableSecond
