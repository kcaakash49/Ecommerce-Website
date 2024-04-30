import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../services/Products";


const initialState = {
  loading: false,
  data: [],
  error: null,
};



const allProduct = createSlice({
  name: "allproducts",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        console.log("payload Data", action.payload);
        state.data = action.payload;

      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default allProduct.reducer;














