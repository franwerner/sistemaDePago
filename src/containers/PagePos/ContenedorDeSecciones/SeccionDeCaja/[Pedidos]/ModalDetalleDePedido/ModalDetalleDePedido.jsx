import { AgregarCerosANumeros } from "@/helper//AgregarCerosANumeros";
import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import styles from "@/styles/SeccionDeCaja.module.css"
import TablaListaDeMetodosDePago from "./TablaListaDeMetodosDePago";
import TablaListaDeProductos from "./TablaListaDeProductos";
import { SeccionExtra } from "./SeccionExtra";

const botonesNavegacion = ["Productos", "Pagos", "Extra"]

const componentes = {
    Productos: <TablaListaDeProductos />,
    Pagos: <TablaListaDeMetodosDePago />,
    Extra: <SeccionExtra/>,
};

const BodyButtons = React.memo(({ nombre, onAlternarSecion }) => {

    const onClick = () => {
        onAlternarSecion(nombre)
    }

    return <span className={`${styles.botonesNavegacion} text-uppercase fw-meidum`} onClick={onClick}>{nombre}</span>
})

const ModalBody = () => {

    const [seccion, alterSeccion] = useState("Productos")

    const onAlternarSecion = (btnName) => {
        alterSeccion(btnName)
    }

    return (
        <Modal.Body className="h-100">
            <div className="d-flex justify-content-around p-1">
                {
                    botonesNavegacion.map(item =>
                        <div
                            key={item}
                            className={`${styles[item == seccion && "btnSeleccionado"]}`}>
                            <BodyButtons
                                nombre={item}
                                onAlternarSecion={onAlternarSecion} />
                        </div>
                    )
                }
            </div>

            <div
                className={`${styles.contenedorDeSecciones} scrollBarPersonalizada shadow`}>
                {componentes[seccion]}
            </div>


        </Modal.Body>
    )
}



const ModalDetalleDePedido = ({ alternarMostrar, mostrar, ticket, estado }) => {

    return (
        <Modal
            show={mostrar}
            size="lg"
            className="h-100 scrollHidden"
            onHide={alternarMostrar}>
            <Modal.Header className="shadow" closeButton>
                <Modal.Title className="d-flex align-items-center w-100 justify-content-between">

                    <div className="d-flex fw-normal justify-content-center align-items-center">
                        <p className="m-0 me-1">N°</p>
                        <p className="m-0">{AgregarCerosANumeros({ numero: ticket.caja, digitos: 4 })}</p>
                        -
                        <p className="m-0">{AgregarCerosANumeros({ numero: ticket.orden, digitos: 5 })}</p>
                    </div>


                </Modal.Title>

            </Modal.Header>
            <ModalBody />
            <Modal.Footer >
                {estado == "Pagado" &&
                    <Button
                        className="border-0 w-100 p-2 bg-hoverdark"
                        style={{ background: "#746AF4" }}>
                        Devolver Producto
                    </Button>}
            </Modal.Footer>
        </Modal>
    );
};


export default ModalDetalleDePedido