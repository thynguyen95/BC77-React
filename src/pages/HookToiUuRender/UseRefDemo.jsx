import { Button } from "flowbite-react";
import React, { useRef, useState } from "react";
import ContentChild from "./ContentChild";

/*
    + useState: dùng để lưu trữ các giá trị thay đổi trên giao diện 
    + useRef: dùng để lưu trữ các giá trị thay mà không cần hiển thị lên giao diện
        useRef là gì ? khi nào thì dùng useRef?
            1. là hook chứa giá trị thay đổi sau mỗi lần render 
            2. sử dụng khi các giá trị thay đổi mà không cần hiển thị lên giao diện (input ko cần validate, form post , form search)
*/

const UseRefDemo = () => {
    const [state, setState] = useState(1);
    const [like, setLike] = useState({ number: 1 });

    console.log("useRef render");

    const valueInputRef = useRef();

    return (
        <div className="container">
            <h1 className="container">UseRefDemo</h1>

            <ContentChild likeProp={like} />

            <Button
                onClick={() => {
                    // like.number + 1;
                    // setLike(like);

                    // khi dùng array, object nên clone ra địa chỉ ô nhớ mới vì memo sử dụng shallow compare
                    let newLike = { ...like };
                    newLike.number += 1;
                    setLike(newLike);
                }}
            >
                Like
            </Button>

            <p>Like: {like.number}</p>

            <div>
                <input
                    type="text"
                    onChange={(e) => {
                        // setState(e.target.value);

                        valueInputRef.current = e.target.value;
                    }}
                />
                <Button
                    onClick={() => {
                        console.log("inputRef", valueInputRef);
                    }}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default UseRefDemo;
