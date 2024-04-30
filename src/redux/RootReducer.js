import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createResetMetaReducer } from "./slices/MetaReducer";
import addToCart from "../redux/slices/AddToCart";
import detailsTab from "../redux/slices/DetailTab";
import authSlice from "../redux/slices/LoginTab";
// import allProduct from "../redux/slices/AllProducts";
import allProduct from "../redux/slices/AllProducts"
import slideProduct from "../redux/slices/SlideProducts"
import allCustomer from "../redux/slices/Customer"
import addingProduct from "../redux/slices/AddingProduct"
import searchProduct from "./slices/SearchData";
import displayProduct from "./slices/DisplaySearchProduct"
import sortData from "./slices/SortData"
    

const resetSlices = [
    "addtocart",
    "details",
    "auth",
    "allproducts",
    "slideproduct",
    "allcustomer",
    "addproduct",
    "searchproduct",
    "displayproduct",
    "sortdata"
];

const rootReducer = createResetMetaReducer(
    "GLOBAL RESET",
    resetSlices
)(
    combineReducers({
        addtocart: addToCart,
        details: detailsTab,
        authInfo: authSlice,
        allproduct:allProduct,
        slideproduct:slideProduct,
        allcustomer:allCustomer,
        addproduct:addingProduct,
        searchproduct:searchProduct,
        displayproduct:displayProduct,
        sortdata:sortData

    })
);

const persistConfig = {
    key:'root',
    storage,
    whitelist:resetSlices,
};

export default persistReducer(persistConfig,rootReducer);