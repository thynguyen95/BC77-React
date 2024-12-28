import React from "react";
import ModalContainer from "../../ContainerComponent/ModalContainer";
import DemoLoginForm from "../../DemoForm/DemoLoginForm";

const DemoContainerComponent = () => {
    return (
        <div>
            <h1>DemoContainerComponent</h1>

            <ModalContainer title="Login" content={<DemoLoginForm />} />
        </div>
    );
};

export default DemoContainerComponent;
