import React from 'react';
import ReUsableFirst from './ReUsableFirst';
import { hotproduct, trendingProduct } from '../../utils';
import { shoes } from '../../utils';
import ReUsableSecond from './ReUsableSecond';
import { premiumProduct } from '../../utils';
import ReUsableThird from './ReUsableThird';
import Carousel from './Carousel';
import LatestProduct from './LatestProduct';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../services/Products';
import { Spin } from "antd";
import { fetchSlide } from '../../../services/ProductSlide';
// import useSelection from 'antd/es/table/hooks/useSelection';



const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.allproduct);
  const slideData = useSelector((state) => state.slideproduct.data);
  // const {data:carouselData,loading:carouselLoading} = useSelector((state) => state.slideproduct); Destructing data
  console.log("SlideData", slideData);
  console.log("Product data", data?.data);

  React.useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchSlide());
  }, [dispatch]);



  return (
    <div className='bg-slate-200 px-2'>
      {/* <div className='w-full px-1'> */}
      <Carousel data={hotproduct} />
      <Spin spinning={loading}>
        <ReUsableFirst title={'API Products'}
          data={
            data?.data?.map((item) => {
              return {
                ...item,
                qty: 1,
                discount: 10
              }
            })
          } />
      </Spin>
      {/* </div> */}
      <ReUsableFirst title={'Hot Products'} data={hotproduct} />
      <LatestProduct data={slideData.data} title={'Latest Products'} />
      <div className='grid w-full gap-y-2'>
        <ReUsableFirst title={'Football Boots'} data={shoes} />
        <ReUsableSecond title={'Premium Products'} data={premiumProduct} />
        <ReUsableThird title={'Trending Products'} data={trendingProduct} />
      </div>
    </div>
  )
}

export default Dashboard
