import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    data : [],
}; 

const detailsTab = createSlice({
    name: "details",
    initialState,
    reducers: { 
        updateDetails: (state,action) => {
            state.data = action.payload;
        }, 
    },
});
            
export const {updateDetails} =detailsTab.actions;
export default detailsTab.reducer;
       






