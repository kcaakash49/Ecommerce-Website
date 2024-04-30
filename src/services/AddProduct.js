import axios from "axios";

import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';

export const addProduct = createAsyncThunk(
    "product/addproduct",
    // async ({username, password, remember}, { rejectWithValue })=> {
    async ({title,price,description,image,category})=> {
        try {
            const config = {
                headers: {
                    "Content-Type" : "application/json",
                },
            };
            const { data } = await axios.post(
                'https://fakestoreapi.com/products',
                { title,price,description,image,category },
                config

            );
            notification.success({
                message: 'Success',
                description: "Successfully Added"
                
              });
            
            return data;
            
            
            
            
        }
        catch (error){
        //     if (error.response && error.response.data.message) {
        //         return rejectWithValue(error.response.data.message);
        //     } else{
        //         return rejectWithValue(error.message);
        //     }
        console.log("Error:", error?.response?.data);

        notification.error({
            message: 'Error',
            description: error?.response?.data,
          });
        }
    }

);