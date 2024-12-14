import { Dropdown } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const HeaderRouter = () => {
    const cartStore = useSelector((state) => state.cartSliceReducer.cart);

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
                <li>
                    <NavLink
                        to="/search"
                        className={(props) =>
                            props.isActive ? "text-red-500" : "text-teal-500"
                        }
                    >
                        search
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin"
                        className={(props) =>
                            props.isActive ? "text-red-500" : "text-teal-500"
                        }
                    >
                        admin
                    </NavLink>
                </li>
                <li>
                    <Dropdown label="Redux" dismissOnClick={false}>
                        <Dropdown.Item>
                            <NavLink to={"/redux/change-number"}>
                                Change Number
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <NavLink to={"/redux/change-fontsize"}>
                                Change Fontsize
                            </NavLink>
                        </Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </li>
                <li>
                    <NavLink
                        to="/cart"
                        className={(props) =>
                            props.isActive ? "text-red-500" : "text-teal-500"
                        }
                    >
                        {/* cart({cartStore.length}) */}
                        cart(
                        {cartStore.reduce(
                            (total, item) => total + item.quantityCart,
                            0
                        )}
                        )
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default HeaderRouter;
