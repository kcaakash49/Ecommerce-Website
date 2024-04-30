import React from 'react'
import { Carousel } from 'antd';

import { contactItems } from './utils';

const Contact = () => {
    return (
        <div>


            <Carousel autoplay>
                {
                    contactItems?.map((items) => (
                        <div key={items.id} className='h-screen relative'>
                            <img src={items.image} alt="" className='bg-cover w-full h-full' />
                            <div className="absolute inset-x-0 top-0 flex justify-center">
                                <p className="text-white text-2xl">{items.text}</p>
                            </div>
                        </div>
                    ))
                }
            </Carousel>


        </div>
        //     <div>
        //       <Carousel autoplay>
        //     <div>
        //       <h3 style={contentStyle}>1</h3>
        //     </div>
        //     <div>
        //       <h3 style={contentStyle}>2</h3>
        //     </div>
        //     <div>
        //       <h3 style={contentStyle}>3</h3>
        //     </div>
        //     <div>
        //       <h3 style={contentStyle}>4</h3>
        //     </div>
        //   </Carousel>
        //     </div>

    )
}

export default Contact
