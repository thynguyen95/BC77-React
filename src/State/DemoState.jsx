import React, { useState } from "react";

// hook là tên gọi của những hàm sử dụng trong component của react

const DemoState = () => {
    // useState nhận vào 1 giá trị default
    // const res = useState(20);
    // console.log("res: ", res);
    // khi gọi useState, res sẽ trả về arr có 2 phần tử
    // const [number, setNumber ] = res;

    const [number, setNumber] = useState(20);

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-red-500 text-4xl">DemoState</h1>

            <div className="flex justify-center">
                <button
                    className="bg-black text-white p-4"
                    onClick={() => {
                        setNumber(number - 1);
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
                        let newNumber = number + 1;
                        setNumber(newNumber);

                        // React là SPA vì vậy tất cả cpn sẽ chứa trong 1 file HTMLAllCollection, nếu sử Dom sẽ khó quản lý nơi nào đang thay trên giao diện
                        // let number =
                        //     +document.querySelector("#number").innerHTML;
                        // document.querySelector("#number").innerHTML =
                        //     number + 1;
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default DemoState;

// ôn tập es6
/*
let obj = {
    id: 1,
    fullName: "abc",
};
obj.id;
obj.fullName;

const { id, fullName } = obj;

// tuple: mảng chứa các phần tử khác nhau
let arrayTuple = [
    "Nguyễn Văn A",
    function (newValue) {
        arrayTuple[0] = newValue;
    },
];

// nếu truy cập vào phần tử bằng cách này sẽ khó kiểm soát vị trí index => dùng destructoring
arrayTuple[0]; //"Nguyễn Văn A"
arrayTuple[1](); //function

const [name, setName] = arrayTuple;
setName("Nguyễn Văn B");
console.log("arrayTuple: ", arrayTuple);
*/
