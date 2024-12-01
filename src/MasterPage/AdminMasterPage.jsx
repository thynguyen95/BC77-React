import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminMasterPage = () => {
    return (
        <div className="flex">
            <aside className="w-2/6 bg-black h-screen text-white">
                <nav>
                    <ul>
                        <li className="my-5 p-3">
                            <NavLink to={"/admin/user"}>
                                User management
                            </NavLink>
                        </li>
                        <li className="my-5 p-3">
                            <NavLink to={"/admin/movie"}>
                                Movie management
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="w-4/6">
                <header className="bg-blue-300 p-4">header</header>

                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminMasterPage;
