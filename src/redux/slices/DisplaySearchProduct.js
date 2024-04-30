import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchProduct } from "../../services/Products";


const initialState = {
  loading: false,
  data: [],
  error: null,
};



const displayProduct = createSlice({
  name: "displayproduct",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSearchProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log("payload Data", action.payload);
        state.data = action.payload;

      })
      .addCase(fetchSearchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default displayProduct.reducer;














