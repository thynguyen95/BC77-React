import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeFontSizeRedux = () => {
    const fSize = useSelector((state) => state.fontSizeReducer);

    const dispatch = useDispatch();

    const handleChangeFontSize = (number) => {
        // tạo action
        const action = {
            type: "CHANGE_FONT_SIZE",
            payload: number,
        };

        // dùng dispatch gửi action lên store
        dispatch(action);
    };

    return (
        <div className="container">
            <h1 className="text-center text-red-500 text-4xl">
                Demo Change FontSize
            </h1>

            <p
                className="mt-5 text-red-400"
                style={{ fontSize: fSize, color: "green" }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, quibusdam.
            </p>

            <div className="mt-5">
                <button
                    className="bg-green-500 text-white p-4 mx-2"
                    onClick={() => {
                        handleChangeFontSize(-1);
                    }}
                >
                    zoom in
                </button>
                <button
                    className="bg-green-500 text-white p-4 mx-2"
                    onClick={() => {
                        handleChangeFontSize(1);
                    }}
                >
                    zoom out
                </button>
            </div>
        </div>
    );
};

export default ChangeFontSizeRedux;
