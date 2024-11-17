import React from "react";

const Modal = (props) => {
    const { title, contentJSX } = props;

    return (
        <div className="w-1/2 mx-auto shadow shadow-black my-5">
            <div className="border border-b-2 p-2">
                <h2 className="title2">{title}</h2>
            </div>
            <div className="modal-body p-2">{contentJSX}</div>
        </div>
    );
};

export default Modal;
