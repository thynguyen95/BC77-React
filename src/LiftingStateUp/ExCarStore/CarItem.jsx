import React from "react";
import { Button, Card } from "flowbite-react";

const CarItem = (props) => {
    // cách 1
    // const { car, setOpenModal, setSelectedCar } = props;

    // cách 2
    const { car, openModal } = props;

    return (
        <>
            {/* cách 1 */}
            {/* <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={car.img}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {car.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {car.price}
                </p>

                <Button
                    onClick={() => {
                        setOpenModal(true);
                        setSelectedCar(car);
                    }}
                >
                    Xem chi tiết
                </Button>
            </Card> */}

            {/* cách 2 */}
            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={car.img}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {car.name}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {car.price}
                </p>

                <Button
                    onClick={() => {
                        openModal(car);
                    }}
                >
                    Xem chi tiết
                </Button>
            </Card>
        </>
    );
};

export default CarItem;
