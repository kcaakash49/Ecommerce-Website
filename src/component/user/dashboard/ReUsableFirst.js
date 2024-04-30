import React from 'react'
import { Card, Button} from 'antd'
import { useNavigate } from 'react-router-dom'
// import { useAppContext } from '../../ContextAPI';
import { updateCart } from '../../../redux/slices/AddToCart';
// import { AppstoreAddOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateDetails } from '../../../redux/slices/DetailTab';


const ReUsableFirst = ({ data, title }) => {
  const navigate = useNavigate();

  // const {appState, updateState} = useAppContext();
  const dispatch = useDispatch();
  const cartData = useSelector((state)=>state);
  console.log("Cart Contains", cartData);

  const handleDetails = (item)=>{
    // console.log(Array.isArray(item));
    // updateState({...appState, data:item});
    
   dispatch(updateDetails(item))
    navigate('/details')
  }

  const addToCart = (item)=>{
    // item.qty = 1
    // updateState({...appState, 
    // addToCart:[...appState?.addToCart,...[item]]})

    dispatch(updateCart([...new Set([...cartData?.addtocart?.data,...[item]])]));
    }
  
  // console.log(cartData)
  
  return (
    <div className='mb-10 p-2'>
      <div className='font-bold text-2xl mb-3'>{title}</div>

      <div className='grid grid-cols-6 grid-flow-row gap-12'>
        {
          data?.map((items) => (
            <div key={items.id} className='col-span-1 cursor-pointer'>
              {/* <div className='h-20 w-20'><Image src = {items.image}/></div>
            <div className='text-black'>{items.name}</div> */}
              <Card
                cover={<img alt="no display" src={items.image} className='h-[250px]'  onClick={()=>handleDetails(items)}/>}
                className='bg-blue-300 shadow-2xl shadow-blue-600'
              >
                <div className='grid gap-2'>
                  <div className='font-bold hover:underline' onClick={()=>handleDetails(items)}>{items.title}</div>
                  <div className='text-red-500'>{"Rs. "}{items.price}</div>
                  {/* <div>Brand: <span className='font-bold'>{items.brand}</span> </div> */}
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

export default ReUsableFirst
