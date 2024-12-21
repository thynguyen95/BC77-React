import { Dropdown } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeaderRQ = () => {
    return (
        <div>
            <ul className="flex justify-center bg-blue-300 p-4 gap-5">
                <li>
                    <NavLink
                        to={"./use-query"}
                        className={(props) =>
                            props.isActive ? "text-red-500" : "text-teal-500"
                        }
                        style={({ isActive }) =>
                            // const {isActive} = props;
                            isActive ? { color: "red" } : { color: "yellow" }
                        }
                    >
                        useQuery
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default HeaderRQ;
