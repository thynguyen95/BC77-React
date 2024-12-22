import React, { memo } from "react";

const TableCart = (props) => {
    console.log("TableCart");

    return (
        <div>
            <h1 className="title2">TableCart</h1>

            {props.cart.map((item) => {
                return <p key={item.id}>{item.name}</p>;
            })}
        </div>
    );
};

export default memo(TableCart);
