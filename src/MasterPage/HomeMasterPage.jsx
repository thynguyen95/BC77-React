import React from "react";
import HeaderRouter from "../Components/HeaderRouter";
import { Outlet } from "react-router-dom";

const HomeMasterPage = () => {
    return (
        <>
            <HeaderRouter />

            <div className="content">
                {/* outlet đại diện cho các cpn khác nhau được load tại block này  */}
                <Outlet />
            </div>

            <footer className="bg-black text-white text-center">Footer</footer>
        </>
    );
};

export default HomeMasterPage;
