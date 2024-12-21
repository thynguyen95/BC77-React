import React from "react";
import { Outlet } from "react-router-dom";
import HeaderRouter from "../Components/HeaderRouter";

const UserMasterPage = () => {
    return (
        <div
            className="h-screen "
            style={{
                background: "url(https://picsum.photos/2000/2000)",
                backgroundSize: "cover",
            }}
        >
            <HeaderRouter />
            <div className="h-full flex items-center justify-center bg-black bg-opacity-15">
                <Outlet />
            </div>
        </div>
    );
};

export default UserMasterPage;
