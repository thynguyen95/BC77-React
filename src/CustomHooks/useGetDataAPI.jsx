import React, { useEffect, useState } from "react";

/*
    custom hook tương tự cpn tuy nhiên kết quả trả về không phải là jsx(giao diện) mà là 1 giá trị(string, boolean, object, number,array,...)
*/

const useGetDataAPI = (url) => {
    const [data, setData] = useState(null);

    const fetchAPI = async () => {
        const res = await fetch(url);
        const resJson = await res.json();

        setData(resJson.content);
    };

    useEffect(() => {
        fetchAPI();

        return () => {
            // xử lý khi cpn bị phá hủy
            console.log("destroy");

            // clear data, cancel request api
        };
    }, []);

    return data;
};

export default useGetDataAPI;
