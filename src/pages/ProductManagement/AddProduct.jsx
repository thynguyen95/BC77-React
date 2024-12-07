import axios from "axios";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate();

    const frmAddProduct = useFormik({
        initialValues: {
            id: "",
            name: "",
            price: "",
            img: "",
            description: "",
            type: "",
            deleted: false,
        },
        onSubmit: (values) => {
            console.log("values: ", values);

            axios({
                url: "https://apitraining.cybersoft.edu.vn/api/ProductApi/create",
                method: "POST",
                data: values,
            })
                .then((response) => {
                    console.log("response: ", response);
                    alert("thêm sản phẩm thành công");

                    navigate("../product-management");
                })
                .catch((err) => {
                    console.log("err: ", err);
                });
        },
    });

    return (
        <div className="container">
            <h1 className="title">Add product</h1>

            <div>
                <form
                    className="flex max-w-md flex-col gap-4 mx-auto"
                    onSubmit={frmAddProduct.handleSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="id1" value="Your id" />
                        </div>
                        <TextInput
                            id="id1"
                            type="text"
                            name="id"
                            onChange={frmAddProduct.handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name1" value="Your name" />
                        </div>
                        <TextInput
                            id="name1"
                            type="text"
                            name="name"
                            data-type="name"
                            onChange={frmAddProduct.handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="price1" value="Your price" />
                        </div>
                        <TextInput
                            id="price1"
                            type="text"
                            name="price"
                            data-type="price"
                            onChange={frmAddProduct.handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="img1" value="Your img" />
                        </div>
                        <TextInput
                            id="img1"
                            type="text"
                            name="img"
                            data-type="img"
                            onChange={frmAddProduct.handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="idescription1"
                                value="Your idescription"
                            />
                        </div>
                        <TextInput
                            id="idescription1"
                            type="text"
                            name="description"
                            data-type="idescription"
                            onChange={frmAddProduct.handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="type" value="Select your country" />
                        </div>
                        <Select
                            id="type"
                            name="type"
                            onChange={frmAddProduct.handleChange}
                            required
                        >
                            <option value={"SAMSUNG"}>SAMSUNG</option>
                            <option value={"APPLE"}>APPLE</option>
                            <option value={"OPPO"}>OPPO</option>
                            <option value={"XIAOMI"}>XIAOMI</option>
                        </Select>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
