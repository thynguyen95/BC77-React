import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const DemoLoginForm = () => {
    // state input
    const [userLogin, setUserLogin] = useState({
        email: "", // đặt key trùng tên với value của thuộc tính name trong input
        password: "",
    });
    console.log("userLogin", userLogin);

    // state error: stateDefault của error giống với input
    const [error, setError] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault(); //chặn sự kiện load lại trang của form
        console.log("sumit");

        // không dùng cách này vì ko kiểm soát được
        // const userLogin = {
        //     email: document.querySelector('#email').value;
        // }
    };

    // const obj = {
    //     email: 'abc',
    //     password: 'abc'
    // }

    // obj.email || obj[email]

    const handleChangeInput = (e) => {
        console.log("e: ", e.target);
        const { name, value } = e.target;
        console.log("name: ", name);
        // console.log("value: ", value);

        // name = email
        // if (name === 'email') {

        // }

        // state error
        let messError = "";
        if (value === "") {
            messError = `${name} is required !`;
        }

        setError({
            ...error,
            [name]: messError,
        });

        // state input
        // dynamic key
        setUserLogin({
            ...userLogin,
            [name]: value,
        });
    };

    return (
        <div className="container">
            <h1 className="title">Demo Login Form</h1>

            <div>
                <form
                    className="flex max-w-md flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            name="email"
                            placeholder="name@flowbite.com"
                            // cách 1:
                            // onChange={(e) => {
                            //     // làm sao giữ được giá trị của field còn lại, chỉ update giá trị của field này
                            //     setUserLogin({
                            //         ...userLogin,
                            //         email: e.target.value,
                            //     });
                            // }}

                            onChange={handleChangeInput}
                        />
                        {error.email && (
                            <p className="text-red-500 text-xl">
                                {error.email}
                            </p>
                        )}
                    </div>
                    {/* <div>
                        <div className="mb-2 block">
                            <Label htmlFor="age" value="Your email" />
                        </div>
                        <TextInput
                            id="age"
                            type="text"
                            name="age"
                            placeholder="name@flowbite.com"
                            // cách 1:
                            // onChange={(e) => {
                            //     // làm sao giữ được giá trị của field còn lại, chỉ update giá trị của field này
                            //     setUserLogin({
                            //         ...userLogin,
                            //         email: e.target.value,
                            //     });
                            // }}

                            onChange={handleChangeInput}
                        />
                    </div> */}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            name="password"
                            // cách 1:
                            // onChange={(e) => {
                            //     setUserLogin({
                            //         ...userLogin,
                            //         password: e.target.value,
                            //     });
                            // }}

                            onChange={handleChangeInput}
                        />
                        {error.password && (
                            <p className="text-red-500 text-xl">
                                {error.password}
                            </p>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default DemoLoginForm;
