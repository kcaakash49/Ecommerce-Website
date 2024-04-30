import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { notification } from 'antd';

export const fetchSlide = createAsyncThunk('api/slideproduct',
    
    async () => {
        
            const response  = await axios.get(`https://fakestoreapi.com/products?limit=5`);
            // const data = await response.json();
            

            return response;
        
    }
);

            


