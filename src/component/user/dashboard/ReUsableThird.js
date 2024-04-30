import React from 'react'
import { Card, Avatar,Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../../../redux/slices/AddToCart';

const ReUsableThird = ({ title, data }) => {
    const navigate = useNavigate()

    const cartData = useSelector((state)=>state);
//   console.log("Reusable Second", cartData)

  const dispatch = useDispatch();

  const addToCart = (item)=>{
    // item.qty = 1
    // updateState({...appState, 
    // addToCart:[...appState?.addToCart,...[item]]})

    dispatch(updateCart([...new Set([...cartData?.addtocart?.data,...[item]])]));
    }

    return (
        <div className='mb-5 p-2'>
            <div className='text-center text-5xl font-extrabold p-10'>{title}</div>
            <div className='grid grid-cols-12 grid-flow-row gap-12'>
                {
                    data?.map((items) => (
                        <div key={items.id} className='col-span-4'>
                            <Card className='bg-blue-300 shadow-2xl shadow-blue-600 h-[400px] cursor-pointer'>
                                <div className='flex flex-col items-center gap-3'>
                                    <div><Avatar src={items.image} size={100} /></div>
                                    <div className='font-bold'>{items.info}</div>
                                    <div className='text-center'>{items.description}</div>
                                    <div>
                                        <Button className='bg-red-800 w-full text-center text-white font-bold' onClick={()=>addToCart(items)}>
                                            Add to Cart
                                        </Button>
                                    </div>

                                </div>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ReUsableThird
