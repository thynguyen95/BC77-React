import axios from "axios";
import { createBrowserHistory } from "history";
import { store } from "../redux/store";
import {
    disableLoadingAction,
    enableLoadingAction,
    hanldeLoadingAction,
} from "../redux/reducer/spinnerReducer";

// cấu hình chuyển hướng trang khi không dùng hook
export const navigateHistory = createBrowserHistory();

const DOMAIN = "https://apistore.cybersoft.edu.vn";
const TOKEN_CYBERSOFT =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NyIsIkhldEhhblN0cmluZyI6IjA1LzA2LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0OTA4MTYwMDAwMCIsIm5iZiI6MTcyMzIyMjgwMCwiZXhwIjoxNzQ5MjI5MjAwfQ.5EInOZxm36n_2HNZsS3kKMLXRYhND8W2KycBygtOP8I";
export const MA_NHOM = "GP01";

export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 3000, // giới hạn thời gian chờ kết quả từ api
});

// cấu hình cho request: khi call api
http.interceptors.request.use((request) => {
    // bật loading
    store.dispatch(hanldeLoadingAction(true));

    request.headers = {
        ...request.headers, //giữ lại các api có header riêng
        Authorization: localStorage.getItem("accessToken"), // thêm phần chung
        TokenCybersoft: TOKEN_CYBERSOFT,
    };

    return request;
});

// cấu hình cho response: khi api trả data về
http.interceptors.response.use(
    (response) => {
        // tắt loading
        store.dispatch(hanldeLoadingAction(false));

        console.log("response: ", response);

        return response;
    },
    (err) => {
        // tắt loading
        store.dispatch(hanldeLoadingAction(false));

        // kiểm tra token hợp lệ => kiểm tra token còn hạn không
        //     => refresh token

        console.log("err: ", err);
        switch (err?.response.status) {
            case 400:
                {
                    // xử lý logic
                }
                break;

            case 401:
                {
                    alert("Bạn không có quyền truy cập trang này");
                    // window.location.href = "/user/login";
                    navigateHistory.push("/user/login");
                }
                break;
        }

        return Promise.reject(err);
    }
);

/*
    statusCode: 
    200: get thành công
    201: dữ liệu đã được thêm thành công (created)
    400: Bad request (đường dẫn không hợp lệ)
    404: Not found (dữ liệu không được tìm thấy)
    401: unauthorize (lỗi không đủ quyền truy cập api)
    403: Forbidden (không đủ quyền truy cập vào hệ thống)
    500: error in server (lỗi tại server mà không xác định được lý do)
    đứng vai trò là dev:
        => test lại api qua postman hoặc swagger với dữ liệu mẫu mà backend đưa 
            => code chạy  => BE đúng, coi lại code của mình 
            => code không chạy => nhờ BE check lại
*/
