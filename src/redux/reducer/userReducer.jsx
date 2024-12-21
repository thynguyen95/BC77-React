import { createSlice } from "@reduxjs/toolkit";
import { USER_LOGIN } from "../../services/constant";

const getUserLoginDefault = () => {
    if (localStorage.getItem(USER_LOGIN)) {
        const userDefault = JSON.parse(localStorage.getItem(USER_LOGIN));

        return userDefault;
    }

    return null;
};

const initialState = {
    userRegister: {
        id: 0,
        email: "",
        password: "",
        name: "test",
        gender: true,
        phone: "",
    },
    userLogin: getUserLoginDefault(),
    userProfile: {},
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
        setUserLoginAction: (state, action) => {
            state.userLogin = action.payload;
        },
        setProfileAction: (state, action) => {
            state.userProfile = action.payload;
        },
    },
});

export const { hanldeChangeInputAction, setUserLoginAction, setProfileAction } =
    userReducer.actions;

export default userReducer.reducer;

// chưa login => login
// login thành công => disptach action lên redux store để lưu trữ data => dựa vào data để hiển thị chữ login hoặc hello user
