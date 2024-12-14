import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userRegister: {
        id: 0,
        email: "",
        password: "",
        name: "test",
        gender: true,
        phone: "",
    },
};

const userReducer = createSlice({
    name: "userReducer",
    initialState,
    reducers: {
        hanldeChangeInputAction: (state, action) => {
            const { id, value } = action.payload;
            // id(pin):"email"
            // value(pin):"h"

            state.userRegister[id] = value;
        },
    },
});

export const { hanldeChangeInputAction } = userReducer.actions;

export default userReducer.reducer;
