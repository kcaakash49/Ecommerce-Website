import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../services/Products';
import Header from './Header';
import { Form, Table } from 'antd';
import { AntdInput, AntdUpload, AntdUploader, SaveButton } from '../common';
import { addProduct } from '../../services/AddProduct';

const Product = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.addproduct);
  console.log("Product data", data)
  React.useEffect(() => {
    dispatch(fetchData());

  }, [dispatch]);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category ',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'address',
    },
  ];
  const handleFinish = async (values) => {
    await addProduct(values)(dispatch).unwrap();
  }

  const [addPr, setAddPr] = React.useState([{
    title: null,
    price: null,
    category: null,
    image: null,
    sn: 0.
  }]);

  const handleAdd = () => {
    const data = {
      title: null,
      price: null,
      category: null,
      image: null,
      sn: addPr.length,
    }
    setAddPr([...addPr,...[data]]);
  }

  const handleDel = (id) => {
    const deletedata = addPr.filter((item) => item.sn !== id);
    setAddPr(deletedata);
  };
  console.log("AddedPr",addPr)

  return (
    <div>
      <Header name="Add Products" />
      <div className='' onClick={handleAdd}><SaveButton name="Add" /></div>
      <div>
        {/* <Table dataSource={data.data} columns={columns} /> */}
        {/* <AntdUpload/> */}
        <Form className='' layout='vertical' onFinish={handleFinish}>
         
          {
            addPr?.map((item, index) => (
              <div key={index} className='grid grid-cols-12 gap-4 border-black border-2 m-4'>
                <div className='col-span-3'><AntdInput required name={['title',item.sn]} label="Title" /></div>
                <div className='col-span-3'><AntdInput required name={["description",item.sn]} label="Description" /></div>
                <div className='col-span-3'><AntdInput required name={["price",item.sn]} label="Price" /></div>
                <div className='col-span-3'><AntdInput required name={["category",item.sn]} label="Category" /></div>
                <div className='col-span-9'><AntdUploader required name={["image",item.sn]} label="Image" /></div>
                <div className='col-span-12'><SaveButton name="Delete" onClick={()=>handleDel(item.sn)} /></div>
              </div>
            ))
          }
          <div className='col-span-12'><SaveButton name="Save" htmlType="submit" /></div>
        </Form>
        <div>
          {/* <div>{data.title}</div> */}
        </div>
      </div>
    </div>
  )
}

export default Product
