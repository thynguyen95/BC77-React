import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./reducer/numberReducer";
import { fontSizeReducer } from "./reducer/fontSizeReducer";
import cartReducer from "./reducer/cartReducer";
import userReducer from "./reducer/userReducer";
import spinnerReducer from "./reducer/spinnerReducer";
import productReducer from "./reducer/productReducer";

const cartDefault = [
    {
        id: 1,
        name: "product",
        price: 1000,
        quantityCart: 2,
        image: "https://picsum.photos/200/200",
    },
];

export const store = configureStore({
    reducer: {
        // có thể có nhiều reducer
        // reducer là hàm sẽ return về state
        // numberReducer: (number = 200, action) => {
        //     console.log("action: ", action);
        //     //xử lý logic
        //     const { type, payload } = action;
        //     if (type === "CHANGE_QUALITY") {
        //         number += payload;
        //     }

        //     return number;
        // },
        // fontSizeReducer: (fontSize = 50, action) => {
        //     console.log("action: ", action);
        //     const { type, payload } = action;

        //     if (type === "CHANGE_FONT_SIZE") {
        //         fontSize += payload;
        //     }

        //     return fontSize;
        // },
        numberReducer: numberReducer,
        fontSizeReducer: fontSizeReducer,
        cartReducer: (cart = cartDefault, action) => {
            // console.log("action: ", action);
            const { type, payload } = action;

            if (type === "ADD_PRODUCT") {
                // kiểm tra sp đã có trong giỏ hàng chưa
                const itemIndex = cart.findIndex(
                    (item) => item.id === payload.id
                );

                if (itemIndex !== -1) {
                    // đã tồn tại => tăng số lượng lên 1

                    // tạo ra bản sao của cart
                    const cartUpdate = [...cart];
                    cartUpdate[itemIndex] = {
                        ...cartUpdate[itemIndex], //sao chép phần tử item bên trong cart để xử lý tính bất biến (imutable)
                        quantityCart: cartUpdate[itemIndex].quantityCart + 1, // cập nhật thuộc tính quantityCart
                    };

                    return cartUpdate;

                    // cách 2:
                    // return cart.map((item) => {
                    //     item.id === payload.id ? {...item, quantityCart: item.quantityCart + 1} : item
                    // })
                } else {
                    // chưa có => thêm sản phẩm vào giỏ hàng
                    return [...cart, payload];
                }
            }

            // immutable: tính bất biến
            // cart.push(payload): thay đổi trực tiếp state cart

            return [...cart];
        },
        cartSliceReducer: cartReducer,
        userReducer: userReducer,
        spinnerReducer,
        productReducer,
        // AReducer: (state = "A") => {
        //     return state;
        // },
        // BReducer: (state = "B") => {
        //     return state;
        // },
    },
});

// rxslice
