import React from "react";
import { useDispatch } from "react-redux";
import useGetDataAPI from "../../CustomHooks/useGetDataAPI";
import { Button } from "flowbite-react";
import useRoute from "../../CustomHooks/useRoute";
import useQueryCustome from "../../CustomHooks/useQueryCustome";

const DemoCustomHook = () => {
    // const dispatch = useDispatch()
    const data = useGetDataAPI("https://apistore.cybersoft.edu.vn/api/Product");

    const { navigate, setSearch } = useRoute();

    // const { data, isLoading, error } = useQueryCustome(
    //     "getAllProduct",
    //     "/api/Product"
    // );

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // }

    // console.log("data", data);

    return (
        <div className="container">
            <h1 className="title">DemoCustomHook</h1>

            {JSON.stringify(data)}

            <Button
                onClick={() => {
                    navigate("/");
                }}
            >
                Go to home
            </Button>

            <div>
                <input
                    type="text"
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                />
            </div>

            {/* tạo 1 thanh search, khi nhập keyword thì sẽ hiển thị keyword lên url của trình duyệt  */}
        </div>
    );
};

export default DemoCustomHook;
