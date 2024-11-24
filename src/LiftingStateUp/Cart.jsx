import React from "react";

import { Button, Table } from "flowbite-react";

const Cart = (props) => {
    const { cart, delProduct, updateQuality } = props;

    const renderProduct = () => {
        return cart.map((product) => {
            return (
                <Table.Row
                    key={product.maSP}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {product.maSP}
                    </Table.Cell>
                    <Table.Cell>
                        <img width={100} src={product.hinhAnh} alt="" />
                    </Table.Cell>
                    <Table.Cell>{product.tenSP}</Table.Cell>
                    <Table.Cell>
                        <div className="flex justify-center text-4xl">
                            <Button
                                color="blue"
                                onClick={() => {
                                    updateQuality(product.maSP, -1);
                                }}
                            >
                                -
                            </Button>
                            <span className="mx-2">{product.soLuong}</span>
                            <Button
                                color="blue"
                                onClick={() => {
                                    updateQuality(product.maSP, 1);
                                }}
                            >
                                +
                            </Button>
                        </div>
                    </Table.Cell>
                    <Table.Cell>{product.giaBan.toLocaleString()}</Table.Cell>
                    <Table.Cell>
                        {(product.soLuong * product.giaBan).toLocaleString()}
                    </Table.Cell>
                    <Table.Cell>
                        <Button
                            color="failure"
                            onClick={() => {
                                delProduct(product.maSP);
                            }}
                        >
                            xóa
                        </Button>
                    </Table.Cell>
                </Table.Row>
            );
        });
    };

    const countProduct = () => {
        // cách 1: dùng for
        // let total = 0;
        // for (let item of cart) {
        //     // total = total + item.soLuong;
        //     total += item.soLuong;
        // }

        // return total;

        // cách 2: dùng reduce
        const total = cart.reduce((totalProduct, item, index) => {
            totalProduct += item.soLuong;

            return totalProduct;
        }, 0);

        return total;
    };

    const calculatorTotalMoney = () => {
        if (cart.length === 0) {
            return 0;
        } else {
            const total = cart.reduce((total, item, index) => {
                total += item.giaBan * item.soLuong;

                return total;
            }, 0);

            return total.toLocaleString();
        }
    };

    return (
        <div className="container mb-10">
            <h1 className="title2">Danh sách giỏ hàng</h1>

            <p className="text-2xl text-red-500">
                Giỏ hàng: {cart.length} - số lượng: {countProduct()}
            </p>
            <p> Tổng tiền:{calculatorTotalMoney()}</p>

            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Mã SP</Table.HeadCell>
                        <Table.HeadCell>Hình Ảnh</Table.HeadCell>
                        <Table.HeadCell>Tên SP</Table.HeadCell>
                        <Table.HeadCell>Số lượng</Table.HeadCell>
                        <Table.HeadCell>Đơn giá</Table.HeadCell>
                        <Table.HeadCell>Thành tiền</Table.HeadCell>
                        <Table.HeadCell>
                            <span>Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {renderProduct()}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default Cart;
