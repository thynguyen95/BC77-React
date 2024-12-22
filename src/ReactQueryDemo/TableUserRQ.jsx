import React from "react";
import { Table } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "../services/userRQ.service";

const TableUserRQ = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["getAllUserRQ"],
        queryFn: getAllUser,
        staleTime: 5 * 60 * 1000,
        gcTime: 6 * 60 * 1000,
    });

    if (isLoading) {
        return <div>Loading....</div>;
    } else if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log("data", data);

    return (
        <div className="container mt-10">
            <h1 className="title">TableUserRQ</h1>

            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>User ID</Table.HeadCell>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Phone</Table.HeadCell>
                        <Table.HeadCell>Gender</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {data?.map((row) => {
                            return (
                                <Table.Row
                                    key={row.id}
                                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                                >
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {row.id}
                                    </Table.Cell>
                                    <Table.Cell>{row.name}</Table.Cell>
                                    <Table.Cell>{row.email}</Table.Cell>
                                    <Table.Cell>{row.phone}</Table.Cell>
                                    <Table.Cell>
                                        {row.gender ? "Male" : "Female"}
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default TableUserRQ;
