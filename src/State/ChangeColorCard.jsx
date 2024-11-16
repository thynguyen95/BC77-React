import React, { useState } from "react";

const ChangeColorCard = () => {
    const [image, setImage] = useState("./img/products/black-car.jpg");

    const handleChangeColor = (color) => {
        let image = `./img/products/${color}-car.jpg`;

        setImage(image);
    };

    return (
        <div>
            <h1 className="text-center text-red-500 text-4xl">
                Change Color Card
            </h1>

            <div className="flex">
                <div className="image w-1/2">
                    <img src={image} alt="" />
                </div>

                <div className="button w-1/2">
                    <button
                        className="block bg-black text-white p-4"
                        onClick={() => {
                            handleChangeColor("black");
                        }}
                    >
                        Black color
                    </button>
                    <button
                        className="block bg-red-500 text-white p-4"
                        onClick={() => {
                            handleChangeColor("red");
                        }}
                    >
                        Red color
                    </button>
                    <button
                        className="block bg-slate-500 text-white p-4"
                        onClick={() => {
                            handleChangeColor("silver");
                        }}
                    >
                        Sliver color
                    </button>
                    <button
                        className="block bg-teal-500 text-white p-4"
                        onClick={() => {
                            handleChangeColor("steel");
                        }}
                    >
                        Steel color
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChangeColorCard;
