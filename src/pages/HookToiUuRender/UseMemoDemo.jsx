import { Button } from "flowbite-react";
import React, { useMemo, useState } from "react";
import TableCart from "./TableCart";

const UseMemoDemo = () => {
    const [like, setLike] = useState(1);

    const cart = [
        { id: 1, name: "product1", price: 1000 },
        { id: 2, name: "product2", price: 2000 },
        { id: 3, name: "product3", price: 3000 },
    ];

    // useMemo: dùng để cache lại giá trị sau mỗi lần render, khi nào dependency thay đổi thì giá trị đó mới tạo lại
    const memoCart = useMemo(() => cart, []);

    console.log("UseMemoDemo");

    return (
        <div className="container">
            <h1 className="title">UseMemoDemo</h1>

            <Button
                onClick={() => {
                    setLike(like + 1);
                }}
            >
                Like
            </Button>

            <TableCart cart={memoCart} />
        </div>
    );
};

export default UseMemoDemo;
