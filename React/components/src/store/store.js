import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../util/navigationSlice";
import modalReducer from "../util/modalSlice";

export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        modal: modalReducer
    }
})