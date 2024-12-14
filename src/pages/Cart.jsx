import { Button } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeQuantityAction,
    deleteProductAction,
} from "../redux/reducer/cartReducer";

const Cart = () => {
    // redux thủ công
    // const cartStore = useSelector((state) => state.cartReducer);

    // redux toolkit
    const cartStore = useSelector((state) => state.cartSliceReducer.cart);
    console.log("cartStore: ", cartStore);

    const dispatch = useDispatch();

    return (
        <div className="container">
            <h1 className="title">Danh sách giỏ hàng </h1>

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartStore?.map((item) => {
                            return (
                                <tr
                                    key={item.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {item.id}
                                    </th>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">
                                        <img
                                            src={item.image}
                                            alt=""
                                            width={120}
                                        />
                                    </td>
                                    <td className="px-6 py-4">{item.price}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <Button
                                                onClick={() => {
                                                    // tạo action
                                                    const action =
                                                        changeQuantityAction({
                                                            id: item.id,
                                                            quantityCart: -1,
                                                        });
                                                    dispatch(action);
                                                }}
                                            >
                                                -
                                            </Button>
                                            <span className="text-red-500 mx-3 text-2xl">
                                                {" "}
                                                {item.quantityCart}
                                            </span>
                                            <Button
                                                onClick={() => {
                                                    // tạo action
                                                    const action =
                                                        changeQuantityAction({
                                                            id: item.id,
                                                            quantityCart: 1,
                                                        });
                                                    dispatch(action);
                                                }}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.price * item.quantityCart}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Button
                                            color="failure"
                                            onClick={() => {
                                                // xử lý logic
                                                // tạo action
                                                const action =
                                                    deleteProductAction(
                                                        item.id
                                                    );

                                                // dispatch action lên reducer
                                                dispatch(action);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
