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

        // không dùng cách này vì ko kiểm soát được
        // const userLogin = {
        //     email: document.querySelector('#email').value;
        // }

        // chặn submit không hợp lệ

        // error(email,password): chỉ cần 1 trường trong state error lỗi(có value) => data đầu vào không hợp lệ
        // chạy vòng lặp để duyệt qua từng trường => kiểm tra xem trường đó có giá trị không
        // 1. nếu có giá trị => data còn bị lỗi => không cho submit
        // 2. nếu ko có giá trị => data đã hợp lệ => cho submit
        for (let key in error) {
            if (error[key] !== "") {
                return;
            }
        }

        // trường hợp bỏ qua 1 trường không muốn check
        for (let key in userLogin) {
            // userLogin[key] === "": email|password bằng rỗng
            // key !== 'password': email
            // =>

            if (userLogin[key] === "" && key !== "password") {
                console.log("test");

                return;
            }
        }

        // xử lý sumbit
        console.log("sumit");
        // gửi state cuối cùng đã hợp lệ lên API login
    };

    // const obj = {
    //     email: 'abc',
    //     password: 'abc'
    // }

    // obj.email || obj[email]

    // style.backgroundColor

    const handleChangeInput = (e) => {
        console.log("e: ", e.target);
        const { name, value } = e.target;
        console.log("name: ", name);
        // console.log("value: ", value);

        let attrType = e.target.getAttribute("data-type");
        console.log("attrType: ", attrType);

        // name = email
        // if (name === 'email') {

        // }

        // state error
        let messError = "";
        if (value === "") {
            messError = `${name} is required !`;
        } else {
            // xét lỗi nếu như đã nhập liệu => xét format

            switch (attrType) {
                case "email": {
                    const regexEmail =
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                    if (!regexEmail.test(value)) {
                        messError = `${name} is invalid ! example: user@gmail.com`;
                    }
                    break;
                }
                case "password": {
                    // check validation cho password
                    const regexPassword =
                        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`-]).{6,12}$/;

                    if (!regexPassword.test(value)) {
                        messError = `${name} is invalid ! từ 6~12 ký tự, 1 kí tự hoa, 1 ký tự đặc biệt`;
                    }
                    break;
                }
                default:
                    break;
            }
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
                            type="text"
                            name="email"
                            placeholder="name@flowbite.com"
                            data-type="email"
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
                            data-type="password"
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
