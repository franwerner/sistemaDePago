import { Modal, Stack } from "react-bootstrap";

export const ModalDetalleDePagos = ({ alternarMostrar, mostrar }) => {
    return (
        <>
            <Modal
                show={mostrar}
                onHide={alternarMostrar}>
                <Modal.Header className="fs-5 fw-medium text-ligthdark" closeButton>
                    0001-00001
                </Modal.Header>
                <Modal.Body className="scrollBarPersonalizada">
                    <Stack gap={3} >
                        <div className="d-flex">
                            <p className="m-0">Empleado</p>
                            <div className="vr mx-2"/>
                            <p className="m-0 fw-medium ">Franco Werner</p>
                        </div>
                        <div className="d-flex">
                            <p className="m-0">Metodo de pago</p>
                            <div className="vr mx-2"/>
                            <p className="m-0 fw-medium ">Efectivo</p>
                        </div>
                        <div>
                            <p className="m-0"></p>
                            <div className="vr mx-2"/>
                            <p className="m-0"></p>
                        </div>
                        <div>
                            <p className="m-0"></p>
                            <div className="vr mx-2"/>
                            <p className="m-0"></p>
                        </div>
                        <div>
                            <p className="m-0"></p>
                            <div className="vr mx-2"/>
                            <p className="m-0"></p>
                        </div>
                        <div>
                            <p className="m-0"></p>
                            <div className="vr mx-2"/>
                            <p className="m-0"></p>
                        </div>
                    </Stack>
                </Modal.Body>
            </Modal>
        </>
    );
};