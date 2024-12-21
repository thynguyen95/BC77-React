import React from "react";
import { Outlet } from "react-router-dom";
import HeaderRQ from "../Components/HeaderRQ";

const RQMasterPage = () => {
    return (
        <>
            <HeaderRQ />

            <div className="content">
                {/* outlet đại diện cho các cpn khác nhau được load tại block này  */}
                <Outlet />
            </div>

            <footer className="bg-black text-white text-center">Footer</footer>
        </>
    );
};

export default RQMasterPage;
