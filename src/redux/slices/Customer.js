import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomer } from "../../services/Products";


const initialState = {
  loading: false,
  data: [],
  error: null,
};



const allCustomer = createSlice({
  name: "allcustomer",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomer.fulfilled, (state, action) => {
        state.loading = false;
        console.log("payload Data", action.payload);
        state.data = action.payload;

      })
      .addCase(fetchCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default allCustomer.reducer;














