import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    // loading: false,
    data : [],
    // details:[],
}; //intially initilizes the value similar to using usestate

const addToCart = createSlice({
    name: "addtocart",
    initialState,
    reducers: { 
        updateCart: (state,action) => {
            // state.loading = true;
            state.data = action.payload;
        }, //payload contains the new data and can be accessed using action.
        // setLoading: (state,action)=>{
        //     state.loading = action.payload;
        // },
    },
});
  

// export const {updateCart,setLoading} =addToCart.actions;
export const {updateCart} =addToCart.actions;

export default addToCart.reducer;


