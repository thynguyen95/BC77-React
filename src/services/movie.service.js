import { http, MA_NHOM } from "./configUrl";

// https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01

export const movieServices = {
    getMovieList: () => {
        return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`);
    },
};
