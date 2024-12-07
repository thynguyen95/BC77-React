import axios from "axios";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

const ProductManagement = () => {
    const [arrProduct, setArrProduct] = useState([]);
    const [search, setSearch] = useSearchParams();

    const kw = search.get("prodName");
    // https://apitraining.cybersoft.edu.vn/api/ProductApi/getall?keyword=ip

    const getAllProduct = () => {
        axios({
            url: `https://apitraining.cybersoft.edu.vn/api/ProductApi/getall?${
                kw ? `keyword=${kw}` : ""
            }`,
            method: "GET",
        })
            .then((response) => {
                console.log("response: ", response.data);
                setArrProduct(response.data);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };

    useEffect(() => {
        getAllProduct();
    }, [kw]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    };
    return (
        <div className="p-4">
            <NavLink
                to={"/admin/add-product"}
                color="warning"
                className={"bg-orange-500 rounded-md p-4 text-white"}
            >
                Add new product
            </NavLink>

            <NavLink
                to={"/admin/product"}
                color="warning"
                className={"bg-orange-500 rounded-md p-4 text-white"}
            >
                Add new product with useMatch
            </NavLink>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                {/* block search  */}
                {/* Phân tích tính năng search: 
                B1: lấy value từ input 
                B2: đưa value lên url 
                B3: lấy value từ url về và call api  */}
                <form
                    className="pb-4 bg-white dark:bg-gray-900 flex"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for items"
                            onInput={(e) => {
                                // đưa value lên url
                                setSearch({
                                    prodName: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <Button type="submit" color="warning" className="ml-3">
                        search
                    </Button>
                </form>

                {/* block table */}
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="checkbox-all-search"
                                        className="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* deleted: false,
                    description: "demo description",
                    id: "",
                    img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
                    name: "san pham 1",
                    price: "2000",
                    type: "APPLE" */}
                        {arrProduct?.map((item) => {
                            return (
                                <tr
                                    key={item.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id="checkbox-table-search-1"
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor="checkbox-table-search-1"
                                                className="sr-only"
                                            >
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        <img
                                            src={item.img}
                                            alt=""
                                            width={150}
                                        />
                                    </td>
                                    <td className="px-6 py-4">{item.price}</td>
                                    <td className="px-6 py-4">{item.type}</td>
                                    <td className="px-6 py-4">
                                        <NavLink
                                            to={`/admin/edit-product/${item.id}`}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </NavLink>
                                        <NavLink
                                            to={`/admin/product/${item.id}`}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit with useMatch
                                        </NavLink>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManagement;
