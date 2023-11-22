import { AgregarCerosANumeros } from "@/common/helper/AgregarCerosANumeros";
import { Button, Modal } from "react-bootstrap";
import React, { lazy, useCallback, useState } from "react";
import styles from "@/styles/SeccionDeCompras.module.css"
import TablaListaDeProductos from "./TablaListaDeProductos";
import { SuspenseCompontentsLoading } from "@/components//SuspenseCompontentsLoading";
import { retrasoTest } from "@/common//helper/retrasoTest";

const TablaListaDeMetodosDePago = lazy(() => import("./TablaListaDeMetodosDePago"))
const SeccionExtra = lazy(() => import("./SeccionExtra"))
const NotaDelPedido = lazy(() => retrasoTest(import("./NotaDeLaCompra"), 333))

const botonesNavegacion = ["Productos", "Pagos", "Extra", "Nota"]

const componentes = {
    Productos: <TablaListaDeProductos />,
    Pagos: <TablaListaDeMetodosDePago />,
    Extra: <SeccionExtra />,
    Nota: <NotaDelPedido />
};

const BodyButtons = React.memo(({ nombre, onAlternarSeccion }) => {

    const onClick = () => {
        onAlternarSeccion(nombre)
    }

    return <span
        className={`${styles.botonesNavegacion}  cursor-pointer text-uppercase fw-meidum`}
        onClick={onClick}>
        {nombre}
    </span>
})

const ModalBody = () => {

    const [seccion, alterSeccion] = useState("Productos")

    const onAlternarSeccion = useCallback((btnName) => {
        alterSeccion(btnName)
    }, [])

    return (
        <Modal.Body className="h-100">
            <div className="d-flex justify-content-around  p-1 pb-0 ">
                {
                    botonesNavegacion.map(item =>
                        <div
                            key={item}
                            className={`${styles[item == seccion && "btnSeleccionado"]}`}>
                            <BodyButtons
                                nombre={item}
                                onAlternarSeccion={onAlternarSeccion} />
                        </div>
                    )
                }
            </div>

            <div className={`${styles.contenedorDeSecciones} d-flex  justify-content-center h-100 w-100 scrollBarPersonalizada shadow`}>

                {
                    <SuspenseCompontentsLoading>
                        {componentes[seccion]}
                    </SuspenseCompontentsLoading>
                }

            </div>


        </Modal.Body>
    )
}



const ModalDetalleDeCompra = ({ alternarMostrar, mostrar, orden, estado }) => {

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
                        <p className="m-0">{AgregarCerosANumeros({ numero: 1, digitos: 4 })}</p>
                        -
                        <p className="m-0">{AgregarCerosANumeros({ numero: orden, digitos: 5 })}</p>
                    </div>

                </Modal.Title>
            </Modal.Header>

            <ModalBody />

            <Modal.Footer >
                {estado == "Pagado" &&
                    <Button
                        variant="outline-primary"
                        className="fw-bold w-100 p-2">
                        Devolver Producto
                    </Button>}
            </Modal.Footer>

        </Modal>
    );
};


export default ModalDetalleDeCompra