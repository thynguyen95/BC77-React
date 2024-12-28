import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";

const ModalContainer = (props) => {
    const [openModal, setOpenModal] = useState(true);
    return (
        <div>
            <h1>ModalContainer</h1>

            <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>{props.title}</Modal.Header>
                <Modal.Body>{props.content}</Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>
                        I accept
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalContainer;
