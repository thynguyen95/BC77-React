import { http, MA_NHOM } from "./configUrl";

// https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01

export const userServices = {
    getUserList: () => {
        return http.get(`/api/QuanLyPhim/LayDanhSachUser?maNhom=${MA_NHOM}`);
    },
    getUserDetail: (id) => {
        return http.get(
            `/api/QuanLyPhim/LayDanhSachUser?id=${id}?maNhom=${MA_NHOM}`
        );
    },
};

// call api
// http.get(...)
// userServices.getUserList().then().catch()
// userServices.getUserDetail(id).then().catch()
