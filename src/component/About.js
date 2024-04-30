import React from 'react';
import { Card } from 'antd';
import { contactItems } from './utils';
import Slider from "react-slick";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    // <div>
    //   <Slider {...settings}>
    //     {
    //       contactItems?.map((items) => (
    //         <div key={items.id}>
    //           <img src={items.image} alt="No preview" />
    //         </div>
    //       ))
    //     }
    //   </Slider>
    // </div>
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  )
}

export default About
