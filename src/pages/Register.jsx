import { Button, Label, Select, TextInput } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hanldeChangeInputAction } from "../redux/reducer/userReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const userRegister = useSelector((state) => state.userReducer.userRegister);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        let { id, value } = e.target;

        const action = hanldeChangeInputAction({ id, value });

        dispatch(action);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // call api đăng ký
        axios({
            url: "https://apistore.cybersoft.edu.vn/api/Users/signup",
            method: "POST",
            data: userRegister,
        })
            .then((res) => {
                console.log("res: ", res);
                if (res.data.statusCode === 200) {
                    alert(res.data.message);

                    navigate("/user/login");
                }
            })
            .catch((err) => {
                console.log("err: ", err.response.data.message);
            });
    };

    return (
        <div className="container">
            <h1 className="title">Register</h1>

            <div>
                <form
                    className="flex max-w-full flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="id" value="Your id" />
                        </div>
                        <TextInput
                            id="id"
                            type="text"
                            name="id"
                            placeholder="name@flowbite.com"
                            value={userRegister.id}
                            disabled
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput
                            id="email"
                            type="text"
                            name="email"
                            placeholder="name@flowbite.com"
                            value={userRegister.email}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Your password" />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            data-type="password"
                            value={userRegister.password}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your name" />
                        </div>
                        <TextInput
                            id="name"
                            type="name"
                            name="name"
                            value={userRegister.name}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="gender"
                                value="Select your country"
                            />
                        </div>
                        <Select
                            id="gender"
                            name="gender"
                            required
                            value={userRegister.gender}
                            onChange={handleOnChange}
                        >
                            <option value={true}>Male</option>
                            <option value={false}>Female</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="phone" value="Your phone" />
                        </div>
                        <TextInput
                            id="phone"
                            type="phone"
                            name="phone"
                            value={userRegister.phone}
                            onChange={handleOnChange}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default Register;
