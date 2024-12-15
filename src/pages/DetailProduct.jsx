import axios from "axios";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProductDetailByIdActionThunk } from "../redux/reducer/productReducer";

const DetailProduct = () => {
    // const [detail, setDetail] = useState({});
    const { detail } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const [transform, setTransform] = useState("rotate(0deg)");

    // global state: bất kì cpn nào cũng có thể lấy được
    //prodId: tên key trong param giống tên path được đặt ở route
    const param = useParams();
    console.log("param: ", param);

    const getProductByID = () => {
        // axios({
        //     url: `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${param.prodId}`,
        //     method: "GET",
        // })
        //     .then((response) => {
        //         console.log("response: ", response.data.content);
        //         setDetail(response.data.content);
        //     })
        //     .catch((error) => {
        //         console.log("error: ", error);
        //     });

        // tạo actionThunk (là 1 hàm có tham số là dispatch)
        const actionThunk = getProductDetailByIdActionThunk(param.prodId);
        dispatch(actionThunk);
    };

    useEffect(() => {
        //gọi khi html load xong
        getProductByID();
    }, [param.prodId]);

    return (
        <div className="container">
            <h1 className="title">Chi tiết sản phẩm</h1>

            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="w-full rounded-t-lg h-96 md:h-auto md:w-2/6 md:rounded-none md:rounded-s-lg">
                    <img
                        className="object-cover "
                        src={detail.image}
                        style={{
                            transform: transform,
                            transition: "0.3s linear",
                        }}
                        alt
                    />
                    <div className="grid grid-cols-4 gap-3">
                        {detail.detaildetailedImages?.map((deg, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`border ${
                                        transform === deg
                                            ? "border-red-500"
                                            : "border-black"
                                    } cursor-pointer`}
                                >
                                    <img
                                        src={detail.image}
                                        style={{ transform: deg }}
                                        alt=""
                                        onClick={() => {
                                            setTransform(deg);
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col justify-between p-4 leading-normal w-4/6">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {detail.name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {detail.description}
                    </p>

                    {/* binding size  */}
                    <div className="flex gap-5">
                        {detail.size?.map((item, index) => {
                            return <Button key={index}>{item}</Button>;
                        })}
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h2 className="title">Sản phẩm liên quan</h2>

                <div className="grid grid-cols-3 gap-5">
                    {detail.relatedProducts?.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                            >
                                <a href="#">
                                    <img
                                        className="rounded-t-lg"
                                        src={item.image}
                                        alt
                                    />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {item.name}
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {item.price}
                                    </p>
                                    <NavLink
                                        to={`/detail/${item.id}`}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Read more
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
