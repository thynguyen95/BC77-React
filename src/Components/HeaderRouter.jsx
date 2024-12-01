import React from "react";
import { NavLink } from "react-router-dom";

const HeaderRouter = () => {
    return (
        <div>
            <ul className="flex justify-center bg-blue-300 p-4 gap-5">
                <li>
                    <NavLink
                        to={"/home"}
                        className={(props) =>
                            props.isActive ? "text-red-500" : "text-teal-500"
                        }
                        style={({ isActive }) =>
                            // const {isActive} = props;
                            isActive ? { color: "red" } : { color: "yellow" }
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={(props) =>
                            props.isActive ? "text-red-500" : "text-teal-500"
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/service"
                        className={(props) =>
                            props.isActive ? "text-red-500" : "text-teal-500"
                        }
                    >
                        Service
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/user"
                        className={(props) =>
                            props.isActive ? "text-red-500" : "text-teal-500"
                        }
                    >
                        login/register
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default HeaderRouter;
