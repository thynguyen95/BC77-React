import axios from "axios";
import React, { useEffect, useState } from "react";
import { http } from "../services/configUrl";
import { getProfileActionAsync } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
    const [profile, setProfile] = useState({}); // cách 1
    const { userProfile } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const getProfile = () => {
        // axios({
        //     url: "https://apistore.cybersoft.edu.vn/api/Users/getProfile",
        //     method: "POST",
        //     headers: {
        //         Authorization: localStorage.getItem("accessToken"),
        //     },
        // })
        //     .then((res) => {
        //         console.log("res: ", res);
        //     })
        //     .catch((err) => {
        //         console.log("err: ", err);
        //     });
        // http.post("/api/Users/getProfile")
        //     .then((res) => {
        //         console.log("res: ", res);
        //         setProfile(res.data.content);
        //         // dispatch lên store
        //     })
        //     .catch((err) => {
        //         console.log("err: ", err);
        //     });

        const actionAsync = getProfileActionAsync();
        dispatch(actionAsync);
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div>
            <h1 className="title">Profile</h1>

            <div className="flex">
                <div className="w-1/2">
                    <img src={userProfile.image} alt="" />
                </div>
                <div className="w-1/2">
                    <p>{userProfile.name}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
