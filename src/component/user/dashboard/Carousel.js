import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='px-5 mb-10'>.
            <Slider {...settings}>
                {
                    data?.map((items) => (
                        <div key={items.id} className='relative'>
                            <div style={{backgroundImage: `url(${items.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,opacity:0.1}}></div>
                            <div className='flex justify-center'>
                                <img src={items.image} alt="" className='h-[250px]' />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Carousel
