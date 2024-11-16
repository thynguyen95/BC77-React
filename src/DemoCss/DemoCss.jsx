import React from "react";
import DemoCssChild from "./DemoCssChild";
import styles from "./style.module.css";

const DemoCss = () => {
    const styleObj = {
        color: "blue",
        fontSize: 20,
        background: "black",
    };

    return (
        <div>
            <h1 className="text-center text-red-500 text-4xl">Demo Css</h1>
            <p className="txt">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                fugiat.
            </p>

            <p className={`${styles.text} ${styles.background}`}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                fugiat.
            </p>

            <p style={styleObj}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A,
                fugiat.
            </p>

            <DemoCssChild />
        </div>
    );
};

export default DemoCss;
