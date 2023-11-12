import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales";
import { Button, Modal, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

 const ModalDetalleDePagos = ({ alternarMostrar, mostrar }) => {
    return (
        <>
            <Modal
                show={mostrar}
                onHide={alternarMostrar}>
                <Modal.Header className="fs-5 fw-medium text-ligthdark" closeButton>
                   N° 0001-00001
                </Modal.Header>
                <Modal.Body className="scrollBarPersonalizada">
                    <Stack gap={3} >
                        <div className="d-flex">
                            <p className="m-0">Empleado</p>
                            <div className="vr mx-2" />
                            <p className="m-0 fw-medium ">Franco Werner</p>
                        </div>
                        <div className="d-flex">
                            <p className="m-0">Metodo de pago</p>
                            <div className="vr mx-2" />
                            <p className="m-0 fw-medium ">Efectivo</p>
                        </div>
                        <div className="d-flex">
                            <p className="m-0">Total</p>
                            <div className="vr mx-2" />
                            <p className="m-0 fw-medium">$ {separarNumerosConDecimales(34343)}</p>
                        </div>
                        <div className="d-flex">
                            <p className="m-0">Hora</p>
                            <div className="vr mx-2" />
                            <p className="m-0 fw-medium">07/11/2023 21:54</p>
                        </div>
                        <div className="d-flex">
                            <p className="m-0">Estado</p>
                            <div className="vr mx-2" />
                            <p className="m-0 fw-medium text-uppercase text-success">Pagado</p>
                        </div>

                    </Stack>
                </Modal.Body>
                <Modal.Footer>
                    <Link
                        style={{ textDecoration: "none" }}
                        className="w-100" to={"/pos/compras"}>
                        <Button variant="outline-primary"
                            className="w-100 d-flex  align-items-center justify-content-center  fw-semibold">
                            Ir a la compra
                            <i className="fa-solid fa-location-arrow  fs-3 mx-1"/>
                        </Button></Link>
                </Modal.Footer>
            </Modal>
        </>
    );
};


export default ModalDetalleDePagos