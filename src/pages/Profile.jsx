import axios from "axios";
import React, { useEffect } from "react";

const Profile = () => {
    const getProfile = () => {
        axios({
            url: "https://apistore.cybersoft.edu.vn/api/Users/getProfile",
            method: "POST",
            headers: {
                Authorization: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                console.log("res: ", res);
            })
            .catch((err) => {
                console.log("err: ", err);
            });
    };

    useEffect(() => {
        getProfile();
    }, []);

    return <div>Profile</div>;
};

export default Profile;
