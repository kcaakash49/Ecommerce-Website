import { createSlice } from "@reduxjs/toolkit";
import { fetchSlide } from "../../services/ProductSlide";



const initialState = {
  loading: false,
  data: [],
  error: null,
};



const slideProduct = createSlice({
  name: "slideproduct",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSlide.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSlide.fulfilled, (state, action) => {
        state.loading = false;
        console.log("payload Data", action.payload);
        state.data = action.payload;

      })
      .addCase(fetchSlide.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default slideProduct.reducer;














