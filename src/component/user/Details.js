// import React, { useEffect } from 'react'
import { useAppContext } from '../ContextAPI'
// import { AppstoreAddOutlined } from '@ant-design/icons';
import { Rate, Button, ConfigProvider } from 'antd';
import { HomeOutlined, TruckOutlined, DollarOutlined, ReloadOutlined, SafetyOutlined, AppstoreAddOutlined} from '@ant-design/icons';
import { useState } from 'react';
import LatestProduct from './dashboard/LatestProduct';
import { trendingProduct } from '../utils';
// import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { updateCart } from '../../redux/slices/AddToCart';


const Details = () => {
  // const { appState } = useAppContext();
  const cartData = useSelector((state)=>state);
  const dispatch = useDispatch();
  // console.log("inside Details",cartData);
  console.log("Cardata", cartData?.details?.data)

  // console.log(appState);
  // console.log(appState.data.name);
  // console.log(typeof (appState));
  const [img, setImg] = useState(cartData?.details?.data?.image || cartData?.details?.data?.imageb || null);

  const addToCart = (item)=>{
    // item.qty = 1
    // updateState({...appState, 
    // addToCart:[...appState?.addToCart,...[item]]})

    dispatch(updateCart([...new Set([...cartData?.addtocart?.data,...[item]])]));
    }


  const handleClick = (e) => {
    setImg(e)

  }
//   useEffect(() => {
//     alert("Image Rendered")
  

// }, [img])

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
      <div className='grid grid-cols-12 gap-10 px-40  border-y-2 mb-10'>
        <div className='col-span-3'>
          <img src={img} alt="" className='h-[300px] border border-black mb-4' />
          <div className='flex gap-10'>
            {/* using Context API as below  */}
            {/* <img src={cartData?.details?.data.imageb} alt="" className='h-[100px] hover:opacity-80 cursor-pointer' onMouseEnter={() => handleClick(cartData?.details?.data?.imageb)}></img> */}
            <img src={cartData?.details?.data.imageb} alt="" className='h-[100px] hover:opacity-80 cursor-pointer' onMouseEnter={() => handleClick(cartData?.details?.data?.imageb)}></img>
            <img src={cartData?.details?.data.image} alt="" className='h-[100px] hover:opacity-70 cursor-pointer'  onMouseEnter={() => handleClick(cartData?.details?.data?.image)}></img>
          </div>
        </div>
        <div className='col-span-4 flex flex-col'>
          <div className='font-pacifico border p-2 bg-red-500 text-white rounded-2xl text-center'>FLASH SALE</div>
          <div className='font-extrabold text-2xl'>{cartData?.details?.data?.name}</div>
          <div><Rate allowHalf value={cartData?.details?.data?.rating} defaultValue={cartData?.details?.data?.rating}/></div>
          <div>{"Brand: "}<span className='text-blue-800 font-bold'>{cartData?.details?.data?.brand}</span></div>
          <div className='border border-slate-400 mt-2 mb-5' />
          <div className='text-red-500 text-3xl'>{"Rs: "}{cartData?.details?.data?.price - (cartData?.details?.data?.price * cartData?.details?.data?.discount) / 100} <span className='line-through text-xl text-black'>{cartData?.details?.data?.price}</span></div>
          <div>Discount : {cartData?.details?.data?.discount}% OFF</div>
          <div className='border border-slate-400 mt-2 mb-5' />
          <div className='mb-10'>Promotions &emsp;&emsp;<span className='bg-orange-400 text-white px-2 py-1 rounded-2xl cursor-pointer '>Min Spend Rs 1999</span></div>
          <div className='flex gap-4'>
            <Button className='px-16 text-white bg-blue-400 hover:bg-blue-600'>Buy Now</Button>
            <Button className='px-16 text-white bg-orange-400 hover:bg-orange-600'>Add to cart</Button>
          </div>
        </div> 

        <div className='col-span-5 flex flex-col gap-3 bg-slate-200 px-2'>
          <div>Delivery</div>
          <div><HomeOutlined className='mr-2' />Inside RingRoad only</div>
          <div className='font-bold'><TruckOutlined className='mr-2' />Standard Delivery <span className='font-extralight'>2-3 day(s)</span>&emsp;&emsp;&emsp;Rs 100</div>
          <div><DollarOutlined className='mr-2' />Cash on delivery available</div>
          <div className='border border-slate-400 mt-2 mb-3' />
          <div>Service</div>
          <div><ReloadOutlined className='mr-2' />14 days free & easy return</div>
          <div><SafetyOutlined className='mr-2' />1 Month Seller Warranty</div>
          <div className='flex'>
            <div className='border border-black px-5'>
              <div>Positive Seller Ratings</div>
              <div className='text-2xl font-extrabold'> 98% </div>
            </div>
            <div className='border border-black px-5'>
              <div>Ship on Time</div>
              <div className='text-2xl font-extrabold'>99%</div>
            </div>
          </div>
        </div>


      </div>
      <div className='px-40'>
        <LatestProduct data={trendingProduct} title={'Related Products'} />
      </div>
    </ConfigProvider>





  )
}

export default Details
