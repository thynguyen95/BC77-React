import { http } from "./configUrl";

export const getAllUser = async () => {
    const res = await http.get("/api/Users/getAll");

    return res.data.content;
};

export const registerUserRQ = async (userRegister) => {
    const res = await http.post("/api/Users/signup", userRegister);

    return res.data.content;
};

export const getAllUserPagingRQ = async (param) => {
    console.log("param: ", param); //queryKey
    const pageSize = param.queryKey[2];
    const pageIndex = param.queryKey[1];

    const res = await http.get(
        `/api/Users/paging?pageIndex=${pageIndex}&pageSize=${pageSize}`
    );

    return res.data.content;
};
