import React from "react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const ModalCar = (props) => {
    // const [openModal, setOpenModal] = useState(false);

    // cách 1
    // const { openModal, closeModel, selectedCar } = props;

    // cách 2
    const { selectedCar, closeModal } = props;

    return (
        <div>
            <>
                {/* button để mở modal */}
                {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}

                {/* modal --cách1   */}
                {/* <Modal show={openModal} onClose={() => closeModel(false)}>
                    <Modal.Header>{selectedCar.name}</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <img src={selectedCar.img} alt="" />
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {selectedCar.price}
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                        <Button color="gray" onClick={() => closeModel(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> */}

                {/* cách 2 */}
                <Modal show={!!selectedCar} onClose={closeModal}>
                    <Modal.Header>{selectedCar.name}</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <img src={selectedCar.img} alt="" />
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {selectedCar.price}
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            color="gray"
                            onClick={(e) => {
                                console.log("e: ", e);
                                closeModal;
                            }}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    );
};

export default ModalCar;

/*
    !!: cách chuyển đổi bất kì giá trị nào về kiểu boolean trong js
    + giá trị "truthy": object, string không rỗng, số khác 0 sẽ chuyển về true
    + giá trị "falsy": null, undefined, "", 0, false => chuyển về false
*/
// Example:

// const selectedCar =  {
//     id: 1,
//     name: "black car",
//     img: "./img/products/black-car.jpg",
//     price: 1000,
// } // truthy

// !!selectedCar => true

// const selectedCar = null //falsy
// !!selectedCar => false
