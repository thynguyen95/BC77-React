import React from "react";
import { Button, Label, Radio, Select, TextInput } from "flowbite-react";
import { useFormik } from "formik"; //get value
import * as yup from "yup"; //validation

const DemoFormik = () => {
    const frmLogin = useFormik({
        initialValues: {
            email: "",
            password: "",
            phone: "",
            gender: "male",
            city: "",
        },
        validationSchema: yup.object().shape({
            email: yup
                .string()
                .required("email is required !")
                .email("email is invalid"),
            password: yup
                .string()
                .required("password is required !")
                .min(6, "6-10 ký tự")
                .max(10, "6-10 ký tự"),
            phone: yup
                .string()
                .required("phone is required !")
                .matches(/^(0|84|84\s)[0-9]{9}$/, "phone is invalid"),

            // matches
        }),
        onSubmit: (values) => {
            console.log("values: ", values);
        },
    });

    return (
        <div className="container">
            <h1 className="title">Demo Login Formik</h1>

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
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="phone1" value="Your phone" />
                        </div>
                        <TextInput
                            id="phone1"
                            type="phone"
                            name="phone"
                            data-type="phone"
                            onChange={frmLogin.handleChange}
                            onBlur={frmLogin.handleBlur}
                        />
                        {frmLogin.errors.phone && (
                            <p className="text-red-500 font-bold">
                                {frmLogin.errors.phone}
                            </p>
                        )}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="gender1" value="Your gender" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="male"
                                name="gender"
                                value="male"
                                defaultChecked
                                onChange={frmLogin.handleChange}
                            />
                            <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                id="female"
                                name="gender"
                                value="female"
                                onChange={frmLogin.handleChange}
                            />
                            <Label htmlFor="female">Female</Label>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="city" value="Select your country" />
                        </div>
                        <Select
                            id="city"
                            name="city"
                            onChange={frmLogin.handleChange}
                            required
                        >
                            <option value={"usa"}>United States</option>
                            <option value={"canada"}>Canada</option>
                            <option value={"france"}>France</option>
                            <option value={"germany"}>Germany</option>
                        </Select>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default DemoFormik;
