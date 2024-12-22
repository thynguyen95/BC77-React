import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getAllUserPagingRQ } from "../services/userRQ.service";

const columns = [
    {
        title: "ID",
        dataIndex: "id",
        key: "id",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        render: (data, record) => {
            console.log("data: ", data, record);
            return record.gender ? (
                <Tag color="volcano">Male</Tag>
            ) : (
                <Tag>Female</Tag>
            );
        },
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
    },
];
const data = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
        tags: ["cool", "teacher"],
    },
];

const TableUserPagingRQ = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const { data, error, isLoading } = useQuery({
        // chỉ cần 1 trong 3 key thay đổi thì key sẽ kích hoạt call lại fn tương tự dependency của useEffect
        queryKey: ["userPaging", pageIndex, pageSize],
        queryFn: getAllUserPagingRQ,
        staleTime: 10 * 1000,
        gcTime: 15 * 1000,
        placeholderData: keepPreviousData,
    });

    if (isLoading) {
        return <div>Loading....</div>;
    } else if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log("data", data);
    const items =
        data?.items.map((item) => ({
            ...item,
            key: item.id,
        })) || [];

    return (
        <div className="container">
            <h1 className="title">TableUserPagingRQ</h1>

            <Table
                columns={columns}
                dataSource={items}
                pagination={{
                    pageSize: data.pageSize,
                    current: pageIndex,
                    total: data.totalRow,
                    onChange: (page, size) => {
                        setPageIndex(page);
                        setPageSize(size);
                    },
                }}
            />
        </div>
    );
};

export default TableUserPagingRQ;
