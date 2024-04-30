import React from 'react'
import { useAppContext } from '../../ContextAPI'
// import { AppstoreAddOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';


const Cart = () => {
    const { appState } = useAppContext();
    // console.log(appState?.addToCart)
    // console.log(appState?.addToCart[0].name)
    // console.log(Array.isArray(appState.addToCart))

    const [checkedItems, setCheckedItems] = React.useState([]);
    const [total,setTotal] = React.useState(0);

    const handleCheckboxChange = (index) => {
        console.log(index)
        const isChecked = checkedItems.includes(index);
        console.log(isChecked)

        if (isChecked) {
            setCheckedItems(checkedItems.filter((item) => item !== index));
            const discountPrice = Math.floor(appState?.addToCart[index].price - (appState?.addToCart[index].price * appState?.addToCart[index].discount)/100);
            setTotal(total - discountPrice);
        } else {
            setCheckedItems([...checkedItems, index]);
            const discountPrice = Math.floor(appState?.addToCart[index].price - (appState?.addToCart[index].price * appState?.addToCart[index].discount)/100);
            setTotal(total + discountPrice);
        }
    };

    // const handleTotal =(price)=>(
    //     setTotal(total + price)
    // )
    return (
        <div>
            <div className='min-h-screen px-96 bg-slate-600'> 
                {
                    appState?.addToCart.map((item, index) => (
                        <div key={index} className='pb-4 grid grid-cols-12 bg-slate-300 p-10'>
                            <div className='col-span-1 flex items-center'><Checkbox className='px-2' checked={checkedItems.includes(index)}  onChange={() => handleCheckboxChange(index)}></Checkbox></div>
                            <div className='col-span-5 flex items-center'>
                                <img src={item.image} alt="" className='h-[100px]' />
                            </div>
                            <div className='col-span-5 flex flex-col gap-2'>
                                <div className='text-2xl font-bold'>{item.info}</div>
                                <div className='text-2xl text-red-500'>Rs: {Math.floor(item.price - (item.price * item.discount) / 100)}</div>
                                <div className='line-through'>Rs. {item.price}</div>
                                <div>Discount: {item.discount}%</div>
                            </div>

                        </div>
                    ))

                }
                <div>{checkedItems.length > 0 && <div className='text-2xl text-orange-900 bg-orange-300 p-2 rounded-xl'>Total : {total}</div>}</div>
            </div>
        </div>
    )
}

export default Cart
