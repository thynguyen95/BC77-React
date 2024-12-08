import { configureStore } from "@reduxjs/toolkit";

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
        numberReducer: (number = 200, action) => {
            console.log("action: ", action);
            //xử lý logic
            const { type, payload } = action;
            if (type === "CHANGE_QUALITY") {
                number += payload;
            }

            return number;
        },
        fontSizeReducer: (fontSize = 50, action) => {
            console.log("action: ", action);
            const { type, payload } = action;

            if (type === "CHANGE_FONT_SIZE") {
                fontSize += payload;
            }

            return fontSize;
        },
        cartReducer: (cart = cartDefault, action) => {
            console.log("action: ", action);
            const { type, payload } = action;

            if (type === "ADD_PRODUCT") {
                let newCart = [...cart, payload];
                return newCart;
            }

            // immutable: tính bất biến
            // cart.push(payload): thay đổi trực tiếp state cart

            return cart;
        },
        // AReducer: (state = "A") => {
        //     return state;
        // },
        // BReducer: (state = "B") => {
        //     return state;
        // },
    },
});

// rxslice
