import React, { memo } from "react";

const ContentChild = (props) => {
    console.log("Content Child render");

    return (
        <div>
            <h1 className="title2">ContentChild</h1>

            <p>Đây là content children</p>
            <p>like in child: {props.likeProp.number}</p>
        </div>
    );
};

export default memo(ContentChild);
// dùng memo để tối ưu render
// memo nó sẽ render lại khi prop đầu vào thay đổi
// nhược điểm: so sánh shallow compare
