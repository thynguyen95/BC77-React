import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

const spinnerReducer = createSlice({
    name: "spinnerReducer",
    initialState,
    reducers: {
        enableLoadingAction: (state, action) => {
            state.isLoading = true;
        },
        disableLoadingAction: (state, action) => {
            state.isLoading = false;
        },
        hanldeLoadingAction: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const {
    enableLoadingAction,
    disableLoadingAction,
    hanldeLoadingAction,
} = spinnerReducer.actions;

export default spinnerReducer.reducer;

// gôm 2 action lại thành 1 hay không?
