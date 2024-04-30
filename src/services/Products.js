import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { notification } from 'antd';

export const fetchData = createAsyncThunk('api/allproduct',
    
    async () => {
        
            const response  = await axios.get(`https://fakestoreapi.com/products`);
            // const data = await response.json();
            

            return response;
        
    }
);
export const fetchCustomer = createAsyncThunk('api/allcustomer',
    
    async () => {
        
            const response  = await axios.get(`https://fakestoreapi.com/users`);
            // const data = await response.json();
            

            return response;
        
    }
);
export const fetchdynamicProduct = createAsyncThunk('api/dynamicdata',
    
    async (e) => {
        
            const response  = await axios.get(`https://fakestoreapi.com/products/category/${e}`);
            
            // const data = await response.json();
            

            return response;
        
    }
);
export const fetchSearchProduct = createAsyncThunk('api/searcheddata',
    
    async (e) => {
        
            const response  = await axios.get(`https://fakestoreapi.com/products/${e}`);
            
            // const data = await response.json();
            

            return response;
        
    }
);
export const fetchSortData = createAsyncThunk('api/sortdata',
    
    async (e) => {
        
            const response  = await axios.get(`https://fakestoreapi.com/products?sort=${e}`);
            
            // const data = await response.json();
            

            return response;
        
    }
);

            


