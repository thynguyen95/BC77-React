import React, { useState } from "react";

const DemoChangeFontSize = () => {
    const [fontSize, setFontsize] = useState(20);
    const [bg, setBg] = useState("red");

    return (
        <div>
            <h1 className="text-center text-red-500 text-4xl">
                Demo Change FontSize
            </h1>

            <p
                className="mt-5 text-red-400"
                style={{ fontSize: fontSize, background: bg }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, quibusdam.
            </p>

            <div className="mt-5">
                <button
                    className="bg-green-500 text-white p-4 mx-2"
                    onClick={() => {
                        setFontsize(fontSize - 1);
                        setBg("green");
                    }}
                >
                    zoom in
                </button>
                <button
                    className="bg-green-500 text-white p-4 mx-2"
                    onClick={() => {
                        setFontsize(fontSize + 1);
                    }}
                >
                    zoom out
                </button>
            </div>
        </div>
    );
};

export default DemoChangeFontSize;
