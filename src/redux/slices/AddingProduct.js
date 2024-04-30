import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "../../services/AddProduct";


const initialState = {
    loading:false,
    data:[],
    error:null,
}; 

const addingProduct = createSlice({
    name: "addproduct",
    initialState,
    reducers: {},

    

    extraReducers: (builder) => {
        builder
          .addCase(addProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
            
          })
          .addCase(addProduct.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.data = payload;
          })
          .addCase(addProduct.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
            
          });
      },
    

    
});
            

export default addingProduct.reducer;
       






