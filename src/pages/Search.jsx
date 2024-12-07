import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

// Phân tích:
// Giao diện:
// 1. form nhập keyword: input + button
// 2. giao diện hiển thị kết quả tìm thấy hoặc không tìm thấy

const Search = () => {
    const [keyword, setKeyword] = useState("");
    console.log("keyword: ", keyword);

    // useSearchParams: dùng để lưu giá trị người dùng nhập lên url
    const [search, setSearch] = useSearchParams();

    // state danh sách sp lấy từ api theo keyword
    const [arrProduct, setArrProduct] = useState([]);

    const valueKeyword = search.get("q");
    console.log("valueKeyword: ", valueKeyword);

    const getProductByKeyWord = () => {
        if (valueKeyword) {
            // gọi api
            axios({
                url: `https://apistore.cybersoft.edu.vn/api/Product?keyword=${valueKeyword}`,
                method: "GET",
            })
                .then((response) => {
                    console.log("response: ", response.data.content);
                    setArrProduct(response.data.content);
                })
                .catch((err) => {
                    console.log("err: ", err);
                });
        }
    };

    useEffect(() => {
        console.log("useEffect");

        getProductByKeyWord();
    }, [valueKeyword]); // nếu keyword thay đổi thì useEffect sẽ chạy lại => api được gọi lại => data được update

    const handleSubmit = (e) => {
        e.preventDefault(); // chặn sự kiện load trang của form
        console.log("submit");

        // đưa giá trị lên url
        setSearch({
            // tên key(q - query): có thể tự đặt
            q: keyword,
        });
    };

    return (
        <div className="container">
            <h1 className="title">Search</h1>

            <div className="mx-auto">
                <form
                    className="flex max-w-md flex-col gap-4 mx-auto"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="keyword" value="Your keyword" />
                        </div>
                        <TextInput
                            id="keyword"
                            type="text"
                            name="keyword"
                            placeholder="your keyword"
                            data-type="keyword"
                            onInput={(e) => {
                                setKeyword(e.target.value);
                            }}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>

            <div className="mt-5">
                <h1 className="title">Result</h1>

                {/* render kết quả tìm kiếm được tại đây
                B1: cần state để chứa kết quả tìm được 
                B2: setState khi data từ api trả về 
                B3: dùng state chạy vòng lặp để render ra  */}
                <div className="grid grid-cols-3 gap-5">
                    {arrProduct?.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                            >
                                <a href="#">
                                    <img
                                        className="rounded-t-lg"
                                        src={item.image}
                                        alt=""
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

export default Search;
