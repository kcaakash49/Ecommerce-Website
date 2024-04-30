import { createSlice } from "@reduxjs/toolkit";
import { fetchSortData } from "../../services/Products";


const initialState = {
  loading: false,
  data: [],
  error: null,
};



const sortData = createSlice({
  name: "sortdata",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSortData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSortData.fulfilled, (state, action) => {
        state.loading = false;
        console.log("payload Data", action.payload);
        state.data = action.payload;

      })
      .addCase(fetchSortData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default sortData.reducer;














