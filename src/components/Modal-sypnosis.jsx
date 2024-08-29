import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ModalSypnosis(props) {
    return (
        <div
            className='modal-synopsis-container'
        >
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header
                    closeButton
                >
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                        style={{ fontSize: "25px", color: "#060d2c", fontWeight: "bold" }}
                    >
                        Sypnosis
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{ fontSize: "22px", color: "#060d2c" }}>{props.synopsis}</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default ModalSypnosis;