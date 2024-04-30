import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
// import { useAppContext } from '../../ContextAPI';
import { useSelector, useDispatch} from 'react-redux';
import { updateDetails } from "../../../redux/slices/DetailTab";


const LatestProduct = ({ data, title }) => {
    // console.log(data);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const navigate = useNavigate();

    // const { appState, updateState } = useAppContext();

    const cartData = useSelector((state)=>state);
    // console.log("latest",cartData);

    const dispatch = useDispatch();

    const handleDetails = (item) => {
        // console.log(Array.isArray(item));
        // updateState({ ...appState, data: item })
        dispatch(updateDetails(item))
        navigate('/details')
    }

    return (

        <div>
            <div className='font-extrabold mb-3 text-2xl'>{title}</div>
            <div className='px-5 mb-10 bg-blue-200'>

                <Slider {...settings}>
                    {
                        data?.map((items) => (
                            <div key={items.id}>
                                <img src={items.image} alt="" className='h-[200px]' onClick={() => handleDetails(items)} />


                            </div>

                        ))
                    }
                </Slider>


            </div>
        </div>
    )
}

export default LatestProduct
