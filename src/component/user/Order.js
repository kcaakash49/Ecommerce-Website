import React from 'react'
import { useAppContext } from '../ContextAPI'
// import { AppstoreAddOutlined } from '@ant-design/icons';
import { Checkbox,Button } from 'antd';
import { PlusCircleOutlined, DeleteOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { updateCart } from '../../redux/slices/AddToCart';
import { useNavigate } from 'react-router-dom';



const Order = () => {
    // const { appState, updateState } = useAppContext();
    // console.log(appState?.addToCart)
    // console.log(appState?.addToCart[0].name)
    // console.log(Array.isArray(appState.addToCart))

    const [checkedItems, setCheckedItems] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [orderData, setOrderData] = React.useState([]);
    const navigate = useNavigate();

    const cartData = useSelector((state)=>state);
    // console.log("In order",cartData);

    // const navigate = useNavigate();


    const dispatch = useDispatch();

    // console.log('orderData', orderData)

    const handleAdd = (id) => {
        const addtoqty = cartData?.addtocart?.data?.map((item) => {
            if (id === item.id) {
                return {
                    ...item,
                    qty: item.qty + 1

                }
            } else {
                return {
                    ...item
                }

            }
        })
        // setOrderData(addtoqty)
        // updateState({
        //     ...appState,
        //     addToCart:addtoqty,
        // })
        dispatch(updateCart(addtoqty));

    }

    const handleDelete = (id) => {
        // updateState({
        //     ...appState,
        //     addToCart: appState?.addToCart?.filter((item) => item.id !== id)
        // })
        const addToCart = cartData?.addtocart?.data.filter((item) => item.id !== id);
        dispatch(updateCart(addToCart));
    }
    
    const handleMinus = (id, qty) => {
        if (qty > 1) {
            const MinusQty = cartData?.addtocart?.data.map((item) => {
                if (id === item.id) {
                    return {
                        ...item,
                        qty: item.qty - 1
    
                    }
                } else {
                    return {
                        ...item
                    }
    
                }
            })
            // updateState({
            //     ...appState,
            //     addToCart:MinusQty,
            // })
            
            dispatch(updateCart(MinusQty))


    }
}

React.useEffect(() => {
    setOrderData(cartData?.addtocart?.data)
}, [cartData?.addtocart?.data])



// const handleCheckboxChange = (index) => {
//     console.log(index)
//     const isChecked = checkedItems.includes(index);
//     console.log('checkedItems',checkedItems)


//     if (isChecked) {
//         setCheckedItems(checkedItems.filter((item) => item !== index));
//         const discountPrice = Math.floor(appState?.addToCart[index].price - (appState?.addToCart[index].price * appState?.addToCart[index].discount) / 100);
//         setTotal((total - discountPrice*appState?.addToCart[index].qty));
        
       
//     } else {
//         setCheckedItems([...checkedItems, index]);
//         const discountPrice = Math.floor(appState?.addToCart[index].price - (appState?.addToCart[index].price * appState?.addToCart[index].discount) / 100);
//         setTotal((total + discountPrice*appState?.addToCart[index].qty));
       
         
//     }
// };


const total1 = orderData.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue.qty;
  }, 0); 

// const handleTotal =(price)=>(
//     setTotal(total + price)
// )


return (
    <div>
        <div className=''>
            {
                orderData?.map((item, index) => (
                    <div key={index} className='mb-10 grid grid-cols-12 bg-slate-300 p-2'>
                        {/* <div className='col-span-1 flex items-center'><Checkbox className='px-2' checked={checkedItems.includes(index)} onChange={() => handleCheckboxChange(index)}></Checkbox></div> */}
                        <div className='col-span-5 flex items-center'>
                            <img src={item.image} alt="" className='h-[100px]' />
                        </div>
                        <div className='col-span-5 flex flex-col gap-2'>
                            <div className='text-2xl font-bold'>{item.name}</div>
                            <div className='text-2xl text-red-500'>Rs: {Math.floor((item.price - (item.price * item.discount) / 100))*item.qty}</div>
                            <div className='line-through'>Rs. {item.price * item.qty}</div>
                            <div>Discount: {item.discount}%</div>
                            <div>Quantity: {item.qty} </div>
                            


                        </div>
                        <div className='col-span-1 grid justify-end'>
                            <div><PlusCircleOutlined onClick={() => handleAdd(item.id)} /></div>
                            <div><DeleteOutlined onClick={() => handleDelete(item.id)} /></div>
                            <div><MinusCircleOutlined onClick={() => handleMinus(item.id, item.qty)} /> </div>

                        </div>

                    </div>
                ))
                
            }
            <div>Total: {total1} </div>
            <div><Button className='w-full text-center p-1 bg-green-400' onClick={()=>navigate('/payment')}>Order Now</Button></div>
            <div>{checkedItems.length > 0 && <div className='text-2xl text-orange-900 bg-orange-300 p-2 rounded-xl'>Total : {total}</div>
            }
            </div>
        </div>
        
    </div>
)
}

export default Order
