import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobileNavigation: false,
    openNavigation: false
}

export const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        openNav: (state) => {

            state.openNavigation = !state.openNavigation
        },

        openMobileNavigation: (state) => {
            state.mobileNavigation = !state.mobileNavigation;
        }
    }
})

export const { openNav, openMobileNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;