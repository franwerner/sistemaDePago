import { AgregarCerosANumeros } from "@/helper//AgregarCerosANumeros";
import { Button, Modal } from "react-bootstrap";



const ModalDetalleDePedido = ({ alternarMostrar, mostrar, ticket, estado }) => {


    return (
        <Modal
            show={mostrar}
            size="lg"
            onHide={alternarMostrar}>
            <Modal.Header >
                <Modal.Title className="d-flex align-items-center w-100 justify-content-between">
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="m-0">{AgregarCerosANumeros({ numero: ticket.caja, digitos: 4 })}</p>
                        -
                        <p className="m-0">{AgregarCerosANumeros({ numero: ticket.orden, digitos: 5 })}</p>
                    </div>
                    {estado == "Pagado" && <Button
                        className="border-0 p-2 bg-hoverdark"
                        style={{ background: "#746AF4" }}>
                        Devolver Producto
                    </Button>}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
        </Modal>
    );
};


export default ModalDetalleDePedido