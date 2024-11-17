import React, { useState } from "react";
import Detail from "./Detail";
import Card from "./Card";

const data = [
    {
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/imgPhone/vsphone.jpg",
    },
    {
        maSP: 2,
        tenSP: "Meizu 16Xs",
        manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
        heDieuHanh: "Android 9.0 (Pie); Flyme",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 7600000,
        hinhAnh: "./img/imgPhone/meizuphone.jpg",
    },
    {
        maSP: 3,
        tenSP: "Iphone XS Max",
        manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
        heDieuHanh: "iOS 12",
        cameraSau: "Chính 12 MP & Phụ 12 MP",
        cameraTruoc: "7 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 27000000,
        hinhAnh: "./img/imgPhone/applephone.jpg",
    },
];

const LiftingStateUp = () => {
    const [detailProduct, setDetailProduct] = useState({
        maSP: 1,
        tenSP: "VinSmart Live",
        manHinh: "AMOLED, 6.2, Full HD+",
        heDieuHanh: "Android 9.0 (Pie)",
        cameraTruoc: "20 MP",
        cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
        ram: "4 GB",
        rom: "64 GB",
        giaBan: 5700000,
        hinhAnh: "./img/imgPhone/vsphone.jpg",
    });

    const renderCard = () => {
        return data.map((item) => {
            return (
                <Card
                    key={item.maSP}
                    detail={item}
                    handleChangeState={setDetailProduct}
                />
            );
        });
    };

    return (
        <div className="container">
            <h1 className="title">Lifting State Up</h1>

            <h2 className="title2">Danh sách sản phẩm</h2>

            <div className="grid grid-cols-3 gap-5">{renderCard()}</div>

            <Detail detailProduct={detailProduct} />
        </div>
    );
};

export default LiftingStateUp;
