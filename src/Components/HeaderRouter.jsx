import React from "react";

const HeaderRouter = () => {
    return (
        <div className="container">
            <ul>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">about</a>
                </li>
                <li>
                    <a href="/service">Service</a>
                </li>
            </ul>
        </div>
    );
};

export default HeaderRouter;
