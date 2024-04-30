import { createSlice } from "@reduxjs/toolkit";
import { fetchdynamicProduct } from "../../services/Products";


const initialState = {
  loading: false,
  data: [],
  error: null,
};



const searchProduct = createSlice({
  name: "searchproduct",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchdynamicProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchdynamicProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log("payload Data", action.payload);
        state.data = action.payload;

      })
      .addCase(fetchdynamicProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default searchProduct.reducer;














