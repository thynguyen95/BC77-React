import React from "react";

/*
    so sánh giữa state & props 
    + state và props đều chứa các giá trị để binding lên giao diện 

    khác nhau: 

    +state chứa các giá trị có thể thay đổi thông qua phương thức setState
    + props chứa các giá trị nhận từ cpn cha truyền vào và không thể gán lại giá trị 
*/

const CardProduct = (props) => {
    console.log("props: ", props); // {}
    // props: đại diện cho các giá trị nhận vào từ propsName của component
    // <Component propsName="value" />

    // props không thể gán lại giá trị (readonly)
    // props.name = "abc" // lỗi

    const { name, price } = props;

    // optional chaining: toán tử ?
    return (
        <div>
            <h1>CardProduct</h1>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default CardProduct;
