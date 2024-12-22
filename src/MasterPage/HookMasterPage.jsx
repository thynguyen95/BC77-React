import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import HeaderRQ from "../Components/HeaderRQ";

const HookMasterPage = () => {
    return (
        <>
            <div>
                <ul className="flex justify-center bg-blue-300 p-4 gap-5">
                    <li>
                        <NavLink
                            to={"./useRef"}
                            className={(props) =>
                                props.isActive
                                    ? "text-red-500"
                                    : "text-teal-500"
                            }
                            style={({ isActive }) =>
                                // const {isActive} = props;
                                isActive
                                    ? { color: "red" }
                                    : { color: "yellow" }
                            }
                        >
                            useRef
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"./useMemo"}
                            className={(props) =>
                                props.isActive
                                    ? "text-red-500"
                                    : "text-teal-500"
                            }
                            style={({ isActive }) =>
                                // const {isActive} = props;
                                isActive
                                    ? { color: "red" }
                                    : { color: "yellow" }
                            }
                        >
                            useMemo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"./useCallback"}
                            className={(props) =>
                                props.isActive
                                    ? "text-red-500"
                                    : "text-teal-500"
                            }
                            style={({ isActive }) =>
                                // const {isActive} = props;
                                isActive
                                    ? { color: "red" }
                                    : { color: "yellow" }
                            }
                        >
                            useCallback
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="content">
                {/* outlet đại diện cho các cpn khác nhau được load tại block này  */}
                <Outlet />
            </div>

            <footer className="bg-black text-white text-center">Footer</footer>
        </>
    );
};

export default HookMasterPage;
