import axios from "axios";

import { createAsyncThunk } from '@reduxjs/toolkit';
import { notification } from 'antd';

export const userLogin = createAsyncThunk(
    "auth/login",
    // async ({username, password, remember}, { rejectWithValue })=> {
    async ({username, password, remember})=> {
        try {
            const config = {
                headers: {
                    "Content-Type" : "application/json",
                },
            };
            const { data } = await axios.post(
                'https://fakestoreapi.com/auth/login',
                { username, password, remember },
                config

            );
            notification.success({
                message: 'Success',
                description: "Login Successful"
                
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