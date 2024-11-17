import React, { useState } from "react";
import CardProduct from "./CardProduct";
import Article from "./Article";
import Modal from "./Modal";
import ChangeColorCard from "../State/ChangeColorCard";
import DemoChangeFontSize from "../State/DemoChangeFontSize";
import DemoPropsCallBack from "./DemoPropsCallBack";
import DemoPropsChildren from "./DemoPropsChildren";

const DemoProps = () => {
    const contentArticle = {
        title: "news 2",
        content: "Lorem 2",
        image: "https://picsum.photos/200/300",
    };

    const [login, setLogin] = useState(false);

    const renderLogin = () => {
        if (login) {
            return <h3>hello user !!!</h3>;
        } else {
            return (
                <button
                    className="bg-green-500 p-2"
                    onClick={() => {
                        setLogin(true);
                    }}
                >
                    login
                </button>
            );
        }
    };

    return (
        <div className="container">
            <h1 className="title">Demo Props</h1>

            <h2 className="title2">Danh sách sản phẩm</h2>

            <div className="flex">
                <div className="w-1/3">
                    <CardProduct name="Sunlight" price={3000} />
                </div>
                <div className="w-1/3">
                    <CardProduct name="Nước giặt" price={4000} />
                </div>
                <div className="w-1/3">
                    <CardProduct name="Xà bông" price={5000} />
                </div>
            </div>

            <h2 className="title2">Danh sách Bài viết </h2>
            <Article
                content={{
                    title: "news",
                    content: "Lorem",
                    image: "https://picsum.photos/200/300",
                }}
            />

            <Article content={contentArticle} />

            <h2 className="title2">Demo props JSX</h2>
            <Modal
                title="login form"
                contentJSX={
                    <>
                        <form className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@flowbite.com"
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        defaultValue
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                        required
                                    />
                                </div>
                                <label
                                    htmlFor="remember"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Remember me
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Submit
                            </button>
                        </form>
                    </>
                }
            />

            <Modal
                title="Change color car app"
                contentJSX={<ChangeColorCard />}
            />

            <Modal
                title="Change font size app"
                contentJSX={<DemoChangeFontSize />}
            />

            <h2 className="title2">Demo props Callback</h2>
            <DemoPropsCallBack renderCondition={renderLogin} />

            <h2 className="title2">Demo props Children</h2>
            <DemoPropsChildren title="Children">
                <h3>Đây là props children</h3>
                <ChangeColorCard />
            </DemoPropsChildren>
        </div>
    );
};

export default DemoProps;
