import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { registerUserRQ } from "../services/userRQ.service";

const RegisterFormRQ = () => {
    const [userRegister, setUserRegister] = useState({
        id: "",
        name: "",
        password: "",
        phone: "",
        gender: true,
        email: "",
    });

    // useQueryClient dùng để thao tác trực tiếp với cache của react query
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationKey: ["registerUserRQ"],
        mutationFn: registerUserRQ,
        onSuccess: (data) => {
            console.log("data: ", data);

            // xóa cache và fetch lại data
            queryClient.invalidateQueries("getAllUserRQ");
        },
        onError: (err) => {
            console.log("err: ", err);
        },
    });

    const handleOnChange = (e) => {
        let { id, value } = e.target;
        setUserRegister({
            ...userRegister,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", userRegister);

        // call api = mutation
        mutation.mutate(userRegister);
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
                            onChange={handleOnChange}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default RegisterFormRQ;
