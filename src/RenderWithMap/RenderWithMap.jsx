import React from "react";
import PhoneCard from "./PhoneCard";

const RenderWithMap = () => {
    const data = [
        {
            id: 1,
            name: "iphone",
            price: 3000,
            image: "https://picsum.photos/200/300",
        },
        {
            id: 2,
            name: "samsung",
            price: 3000,
            image: "https://picsum.photos/200/300",
        },
        {
            id: 3,
            name: "sony",
            price: 3000,
            image: "https://picsum.photos/200/300",
        },
    ];

    // + thuộc tính key để theo dõi từng phần tử trong danh sách. Nếu không có key, react phải render lại toàn bộ danh sách, gây tốn tài nguyên
    // + key phải là duy nhất trong phạm vi danh sách hiện tại.
    const renderListPhone = () => {
        const arrJSX = data.map((item, index) => {
            return (
                <div className="w-1/3" key={item.id}>
                    <PhoneCard detail={item} />
                </div>
            );
        });

        return arrJSX;
    };

    return (
        <div>
            <h1 className="title">RenderWithMap</h1>

            <h2 className="title2">Danh sách sản phẩm</h2>
            <div className="flex"> {renderListPhone()}</div>
            {/* <div className="flex">
                {data.map((item, index) => {
                    return (
                        <div className="w-1/3" key={item.id}>
                            <PhoneCard detail={item} />
                        </div>
                    );
                })}
            </div> */}
        </div>
    );
};

export default RenderWithMap;
