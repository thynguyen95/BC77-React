import React from "react";

const Event = () => {
    const handleLike = (e) => {
        console.log("e handleLike: ", e);
        e.target.style.background = "red";
    };

    const handlePage = (number, e) => {
        console.log("number: ", number, e);
        e.target.style.background = "red";
    };

    return (
        <div>
            <h1 className="text-center text-red-500 text-2xl">Event</h1>

            {/* event nhận vào 1 callback function  */}
            <button
                className="block my-2 bg-green-500 text-white p-4"
                onClick={(e) => {
                    console.log("click me", e);
                    // code logic
                }}
            >
                Click me !!!
            </button>

            {/* khi gọi hàm trong onClick sẽ không có () như ở html vì react sẽ hiểu là cú pháp databinding nên sẽ gọi hàm chạy luôn ngay khi render */}
            <button
                className="block my-2 bg-green-500 text-white p-4"
                onClick={handleLike}
            >
                Click me call method handleLike !!!
            </button>

            {/* khi cần truyền tham số vào hàm callback thì mượn anonymous function  */}
            {/* closure function */}
            <button
                className="mx-2 bg-green-500 text-white p-4"
                onClick={(e) => {
                    console.log("e: ", e);
                    // e.target.style.background = "red";
                    handlePage(1, e);
                }}
            >
                1
            </button>
            <button
                className="mx-2 bg-green-500 text-white p-4"
                onClick={(e) => {
                    console.log("e: ", e);
                    handlePage(2, e);
                }}
            >
                2
            </button>
            <button
                className="mx-2 bg-green-500 text-white p-4"
                onClick={(e) => {
                    console.log("e: ", e);
                    handlePage(3, e);
                }}
            >
                3
            </button>
        </div>
    );
};

export default Event;
