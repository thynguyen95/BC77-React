import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../services/configUrl";

const initialState = {
    arrProduct: [], //state arrProduct của trang home
    detail: {}, //state của detail product
};

const productReducer = createSlice({
    name: "productReducer",
    initialState,
    reducers: {
        setArrProductAction: (state, action) => {
            state.arrProduct = action.payload;
        },
        setProductDetailAction: (state, action) => {
            state.detail = action.payload;
        },
    },
});

export const { setArrProductAction, setProductDetailAction } =
    productReducer.actions;

export default productReducer.reducer;

// ---------------------- action thunk ------------------
// closure function
export const getProductApiActionThunk = () => {
    return (dispatch) => {
        http.get("/api/Product")
            .then((res) => {
                console.log("res: ", res.data.content);

                // tạo ra actionPayload
                const actionPayload = setArrProductAction(res.data.content);
                dispatch(actionPayload); // đưa data lên store
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };
};

export const getProductDetailByIdActionThunk = (id) => {
    return (dispatch) => {
        http.get(`/api/Product/getbyid?id=${id}`)
            .then((response) => {
                console.log("response: ", response);

                // tạo actionPayload
                const actionPayload = setProductDetailAction(
                    response.data.content
                );
                dispatch(actionPayload);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };
};
