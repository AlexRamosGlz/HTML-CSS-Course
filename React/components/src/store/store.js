import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../util/navigationSlice";

export const store = configureStore({
    reducer: {
        navigation: navigationReducer
    }
})