import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllProduct } from "../services/product.service";
import { Card } from "flowbite-react";

const ShoeShopRQ = () => {
    // key gắn liền với fn, khi key được gọi sẽ kích hoạt gọi fn
    const query = useQuery({
        queryKey: ["getProduct"],
        queryFn: getAllProduct,
        staleTime: 1 * 1000 * 60, // thời gian mà dữ liệu được xem là đã cũ
        cacheTime: 2000 * 60, // thời gian xóa cache
    });

    // query: data, error, isLoading,...

    if (query.isLoading) {
        return <div>Loading...</div>;
    } else if (query.error) {
        return <div>Lỗi: {query.error.message}</div>;
    }

    return (
        <div>
            <h1 className="title">ShoeShopRQ</h1>

            <div className="grid grid-cols-3 gap-5">
                {query.data?.map((item) => {
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

export default ShoeShopRQ;
