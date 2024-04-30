import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import RootReducer from "./RootReducer";


const store = configureStore({
    reducer: RootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
});

export const persistor = persistStore(store);

export default store;