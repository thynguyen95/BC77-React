import { http } from "../../services/configUrl";
import { TOKEN, USER_LOGIN } from "../../services/constant";
import { setCookie } from "../../setting/setting";
import { setProfileAction, setUserLoginAction } from "../reducer/userReducer";

export const loginActionAsync = (data) => {
    // ... logic
    return async (dispatch, getState) => {
        try {
            // thành công
            const res = await http.post(
                "https://apistore.cybersoft.edu.vn/api/Users/signin",
                data,
                {
                    skipLoading: true, // key tùy chỉnh để không bật loading
                }
            );

            // lưu data api trả về vào localStorage
            const token = res.data.content.accessToken;
            localStorage.setItem(TOKEN, token);

            const userLogin = JSON.stringify(res.data.content);
            localStorage.setItem(USER_LOGIN, userLogin);

            // lưu vào cookie
            setCookie(TOKEN, token, 7);

            // dispatch actionPayLoad lên store
            const actionPayload = setUserLoginAction(res.data.content);
            dispatch(actionPayload);

            // login thành công => get profile
            const actionProfile = getProfileActionAsync();
            dispatch(actionProfile);
        } catch (error) {
            console.log("error: ", error);
            // thất bại
        }
    };
};

export const getProfileActionAsync = () => {
    return async (dispatch) => {
        const res = await http.post("/api/Users/getProfile", {
            skipLoading: true,
            // isAdmin: true
            // xxx: false
        });

        const actionPayload = setProfileAction(res.data.content);
        dispatch(actionPayload);
    };
};
