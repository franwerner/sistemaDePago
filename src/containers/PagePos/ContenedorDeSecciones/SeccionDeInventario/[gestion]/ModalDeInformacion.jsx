import { AgregarCerosANumeros } from "@/common//helper/AgregarCerosANumeros";
import { Modal } from "react-bootstrap";

const Body = ({ tipo, texto }) => {
    return (
        <div className="d-flex my-2 justify-content-center border-bottom border-2 flex-column" >
            <p className="m-0  text-ligthdark ls-4 ">{tipo} :</p>

            <p className="m-0 fw-semibold text-center text-truncate mb-2 text-ligthdark">{texto}</p>
        </div>
    )
}


export const ModalDeInformacion = ({ alternarMostrar, mostrar }) => {

    const BodyRenderList = [
        { tipo: "Recibido por", texto: "Franco Werner" },
        { tipo: "Ingreso", texto: "17/11/2023 13:33:00" },
        { tipo: "Cantidad de productos", texto: 25 },
        { tipo: "Cantidad de items", texto: (130).toFixed(2) },
        { tipo: "ID del producto a vencer", texto: "33" },
        { tipo: "ID del producto ultimo a vencer", texto: "23" },
    ]


    return (
        <Modal
            show={mostrar}
            onHide={alternarMostrar}   >
            <Modal.Header closeButton className="border-2">
                <Modal.Title className="m-0 border-bottom border-2 text-ligthdark ls-4 fs-3 mx-2">
                    #{AgregarCerosANumeros({ digitos: 3, numero: 45 })}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center p-0">
                {
                    BodyRenderList.map((item, index) =>
                        <Body key={index} {...item} />
                    )
                }
            </Modal.Body>
        </Modal>
    );
};