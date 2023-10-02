import { Modal } from "react-bootstrap";


export const ModalDeMensajesPersonalizados = ({ tipo, mensaje }) => {

    return (
        <>
            <Modal
                centered
                show={false}
                onHide={(handleClose) => { }}>
                <Modal.Header 
             
                className="my-0 p-3" closeButton>

                </Modal.Header >
                <Modal.Body 
                   style={{ background: "#dd6262" }}
                >
                    <div
                        style={{ background: "#d22e2e" }}
                        className=" ">
                        Para ver el detalle debes tener el resto en 0 y al menos un producto en la lista.
                    </div>
                </Modal.Body>
            </Modal>

        </>
    );
};