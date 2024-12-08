import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangNumberRedux = () => {
    // const [number, setNumber] = useState(1)

    // useSelector: dùng để lấy state từ redux về(redux store)
    // state: đại diện cho object reducer ở store => cần lấy state của reducer nào thì . tên của reducer đó
    const number = useSelector((state) => state.numberReducer);

    // useDispatch: dùng để đưa dữ liệu lên store redux
    const dispatch = useDispatch();

    const handleChangeState = (quanlity) => {
        // để đưa dữ liệu lên store dùng dispatch

        // tạo action
        const action = {
            type: "CHANGE_QUALITY", // bắt buộc
            payload: quanlity,
        };

        // dùng dispatch để gửi action lên store
        dispatch(action);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-red-500 text-4xl">DemoState</h1>

            <div className="flex justify-center">
                <button
                    className="bg-black text-white p-4"
                    onClick={() => {
                        handleChangeState(-1);
                    }}
                >
                    -
                </button>
                <p className="text-4xl text-green-500 mx-4" id="number">
                    {number}
                </p>
                <button
                    className="bg-black text-white p-4"
                    onClick={() => {
                        handleChangeState(1);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ChangNumberRedux;
