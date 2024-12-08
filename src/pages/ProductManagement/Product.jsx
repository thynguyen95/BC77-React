import axios from "axios";
import { Button, Label, Select, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useMatch, useNavigate, useParams } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
    const match = useMatch("/admin/product/:id");
    // nếu match có data({}) là edit , nếu null là add
    console.log("match: ", match);

    const isEdit = !!match;

    const getProductByID = () => {
        axios({
            url: `https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${match.params.id}`,
            method: "GET",
        })
            .then((response) => {
                console.log("response: ", response);
                // frmProduct.setFieldValue("id", response.data.id); // set từng field riêng
                frmProduct.setValues(response.data);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };

    useEffect(() => {
        if (isEdit) {
            getProductByID();
        }
    }, [isEdit]);

    const frmProduct = useFormik({
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

            let url =
                "https://apitraining.cybersoft.edu.vn/api/ProductApi/create";
            let method = "POST";

            if (isEdit) {
                url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/update/${values.id}`;
                method = "PUT";
            }

            axios({
                url: url,
                method: method,
                data: values,
            })
                .then((response) => {
                    console.log("response: ", response);
                    if (isEdit) {
                        alert("bạn đã update thành công");
                    } else {
                        alert("bạn đã thêm thành công");
                    }
                    navigate("../product-management");
                })
                .catch((err) => {
                    console.log("err: ", err);
                });
        },
    });

    return (
        <div className="container">
            <h1 className="title">{isEdit ? "Edit product" : "Add product"}</h1>

            <div>
                <form
                    className="flex max-w-md flex-col gap-4 mx-auto"
                    onSubmit={frmProduct.handleSubmit}
                >
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="id1" value="Your id" />
                        </div>
                        <TextInput
                            id="id1"
                            type="text"
                            name="id"
                            disabled={isEdit}
                            value={frmProduct.values.id}
                            onChange={frmProduct.handleChange}
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
                            value={frmProduct.values.name}
                            onChange={frmProduct.handleChange}
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
                            value={frmProduct.values.price}
                            onChange={frmProduct.handleChange}
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
                            value={frmProduct.values.img}
                            onChange={frmProduct.handleChange}
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
                            data-type="description"
                            value={frmProduct.values.description}
                            onChange={frmProduct.handleChange}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="type" value="Select your country" />
                        </div>
                        <Select
                            id="type"
                            name="type"
                            onChange={frmProduct.handleChange}
                            value={frmProduct.values.type}
                            required
                        >
                            <option value={"SAMSUNG"}>SAMSUNG</option>
                            <option value={"APPLE"}>APPLE</option>
                            <option value={"OPPO"}>OPPO</option>
                            <option value={"XIAOMI"}>XIAOMI</option>
                        </Select>
                    </div>
                    <Button type="submit">{isEdit ? "Update" : "Add"}</Button>
                </form>
            </div>
        </div>
    );
};

export default Product;
