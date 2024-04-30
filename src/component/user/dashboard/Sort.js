import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSortData } from '../../../services/Products';
import { Select,Pagination } from 'antd';
import ReUsableFirst from './ReUsableFirst';

const Sort = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.sortdata);
    

    const handleChange = (value, option) => {
        console.log("change value", value);
        dispatch(fetchSortData(value));
    }

    const option = [
        {
            value: "desc",
            label: "Desc"
        },
        {
            value: "price",
            label: "Price"
        },
    ]
    return (
        <div>
            <div className='flex justify-center'>Sort:
                <Select
                    placeholder="Sort"
                    onSelect={handleChange}
                    options={option}
                />
            </div>
            <ReUsableFirst title={'Sort Result'} data={data?.data} />
            <Pagination defaultCurrent={1} total={50} />


        </div>
    )
}

export default Sort
