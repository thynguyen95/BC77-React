import axios from "axios";
import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";

const ShoeShopAPI = () => {
    const [arrProduct, setArrProduct] = useState([]);

    // dùng fetch
    const getAllProductAPI = async () => {
        const response = await fetch(
            "https://apistore.cybersoft.edu.vn/api/Product"
        );
        console.log("response", response);

        const data = await response.json();
        console.log("data: ", data);

        setArrProduct(data.content);
    };

    const getAllProductAxios = async () => {
        // axios({
        //     url: "https://apistore.cybersoft.edu.vn/api/Product",
        //     method: "GET",
        // })
        //     .then((response) => {
        //         console.log("response: ", response);

        //         setArrProduct(response.data.content);
        //     })
        //     .catch((error) => {
        //         console.log("error: ", error);
        //     });

        const res = await axios.get(
            "https://apistore.cybersoft.edu.vn/api/Product"
        );

        setArrProduct(res.data.content);
    };

    // getAllProductAPI();

    console.log("mounting");

    // useEffect sẽ chạy sau khi html render và mỗi khi bất kì hàm setState nào được gọi
    // useEffect(() => {
    //     console.log("useEffect");
    //     getAllProductAPI();
    // });

    // dependency list: [] thì hàm chỉ chạy 1 lần sau khi render component
    useEffect(() => {
        console.log("useEffect");
        // getAllProductAPI();

        getAllProductAxios();
    }, []);

    return (
        <div className="container">
            <h1 className="title">Shoe Shop</h1>

            {/* <Button
                onClick={() => {
                    getAllProductAPI();
                }}
            >
                get API
            </Button> */}

            <div className="grid grid-cols-3 gap-5">
                {arrProduct.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            className="max-w-sm"
                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                            imgSrc={item.image}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {item.price}
                            </p>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default ShoeShopAPI;
