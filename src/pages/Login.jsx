import { Button, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const frmLogin = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log("values: ", values);
            if (
                values.email === "cybersoft" &&
                values.password === "cybersoft"
            ) {
                // nếu login thành công => chuyển user về trang home

                navigate("/home");
            } else {
                // nếu login thất bại chuyển về forgot pass

                // navigate("../forgot-pass");

                navigate("../forgot-pass", { replace: true });
            }
        },
    });

    return (
        <div className="container">
            <h1 className="title"> Login </h1>

            <div>
                <form
                    className="flex max-w-md flex-col gap-4"
                    onSubmit={frmLogin.handleSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput
                            id="email1"
                            type="text"
                            name="email"
                            placeholder="name@flowbite.com"
                            data-type="email"
                            onChange={frmLogin.handleChange}
                            onBlur={frmLogin.handleBlur}
                        />
                        {frmLogin.errors.email && (
                            <p className="text-red-500 font-bold">
                                {frmLogin.errors.email}
                            </p>
                        )}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            name="password"
                            data-type="password"
                            onChange={frmLogin.handleChange}
                            onBlur={frmLogin.handleBlur}
                        />
                        {frmLogin.errors.password && (
                            <p className="text-red-500 font-bold">
                                {frmLogin.errors.password}
                            </p>
                        )}
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
