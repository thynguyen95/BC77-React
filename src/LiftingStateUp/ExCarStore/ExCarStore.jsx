// rafce
import React, { useState } from "react";
import CarItem from "./CarItem";
import ModalCar from "./ModalCar";

const data = [
    {
        id: 1,
        name: "black car",
        img: "./img/products/black-car.jpg",
        price: 1000,
    },
    {
        id: 2,
        name: "red car",
        img: "./img/products/red-car.jpg",
        price: 2000,
    },
    {
        id: 3,
        name: "silver car",
        img: "./img/products/silver-car.jpg",
        price: 3000,
    },
    {
        id: 4,
        name: "steel car",
        img: "./img/products/steel-car.jpg",
        price: 4000,
    },
];

const ExCarStore = () => {
    // cách 1
    // const [openModal, setOpenModal] = useState(false);
    // const [selectedCar, setSelectedCar] = useState({
    //     id: 1,
    //     name: "black car",
    //     img: "./img/products/black-car.jpg",
    //     price: 1000,
    // });

    // cách 2: đóng mở modal dựa theo trạng thái state selectedCar
    const [selectedCar, setSelectedCar] = useState(null);
    const openModal = (car) => setSelectedCar(car);
    const closeModal = () => setSelectedCar(null);

    const renderCar = () => {
        return data.map((car) => {
            return (
                <>
                    {/* cách 1 */}
                    {/* <CarItem
                        key={car.id}
                        car={car}
                        setOpenModal={setOpenModal}
                        setSelectedCar={setSelectedCar}
                    /> */}

                    {/* cách 2 */}
                    <CarItem key={car.id} car={car} openModal={openModal} />
                </>
            );
        });
    };

    return (
        <div className="container">
            <h1 className="title">Ex Car Store</h1>

            <div className="grid grid-cols-4 gap-4">{renderCar()}</div>

            {/* cách 1  */}
            {/* <ModalCar
                openModal={openModal}
                closeModel={setOpenModal}
                selectedCar={selectedCar}
            /> */}

            {/* cách 2 */}
            {/* modal hiển thị khi selectedCar được chọn */}
            {selectedCar && (
                <ModalCar selectedCar={selectedCar} closeModal={closeModal} />
            )}
        </div>
    );
};

export default ExCarStore;
