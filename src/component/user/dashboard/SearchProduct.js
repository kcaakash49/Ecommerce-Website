import React from 'react'
import { useAsyncError, useNavigate, useParams } from 'react-router-dom'
import { fetchSearchProduct } from '../../../services/Products';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Card, Image, Skeleton } from 'antd';


const SearchProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  console.log("params", param);

  React.useEffect(() => {
    dispatch(fetchSearchProduct(`${param?.id}`))
  }, [param?.id])

  const { data, loading } = useSelector((state) => state.displayproduct);
  console.log("display data", data)
  return (
    <Skeleton loading={loading}>
      <div>
        <div onClick={()=>navigate("/sort")}>Sort</div>
        <Card>
          <div className='grid gap-4 p-20'>
            <div className="flex justify-center">
              <img src={data?.data.image} className='h-52' />
            </div>
            <div className="text-center">{data?.data?.name}</div>
            <div className="text-pretty text-center">{data?.data?.title}</div>
            <div className="text-pretty text-center">RS : {data?.data?.price}</div>
            <div className="text-pretty text-center">Rate :{data?.data?.rating?.rate}</div>
          </div>
        </Card>
      </div>
    </Skeleton>
  )
}

export default SearchProduct
