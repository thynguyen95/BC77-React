import { Button } from "flowbite-react";
import React, { useCallback, useState } from "react";
import CommentComponent from "./CommentComponent";

const UseCallBackDemo = () => {
    const [like, setLike] = useState(1);

    const renderLike = () => {
        return `Bạn đã nhấn ${like} like`;
    };

    console.log("UseCallBackDemo");

    const callbackRenderLike = useCallback(renderLike, [like]);

    return (
        <div className="container">
            <h1 className="title">UseCallBackDemo</h1>

            <Button
                onClick={() => {
                    setLike(like + 1);
                }}
            >
                {like}
            </Button>

            <CommentComponent renderLike={callbackRenderLike} />
        </div>
    );
};

export default UseCallBackDemo;
