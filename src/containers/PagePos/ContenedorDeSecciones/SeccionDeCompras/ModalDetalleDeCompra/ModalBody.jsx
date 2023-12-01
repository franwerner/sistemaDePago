import { lazy, memo, useCallback, useState } from "react";
import TablaListaDeProductos from "./TablaListaDeProductos";
import { Modal } from "react-bootstrap";
import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading";
import styles from "@/styles/SeccionDeCompras.module.css"

const TablaListaDeMetodosDePago = lazy(() => import("./TablaListaDeMetodosDePago"))
const SeccionExtra = lazy(() => import("./SeccionExtra"))
const NotaDelPedido = lazy(() => import("./NotaDeLaCompra"))

const botonesNavegacion = ["Productos", "Pagos", "Extra", "Nota"]

const componentes = {
    Productos: <TablaListaDeProductos />,
    Pagos: <TablaListaDeMetodosDePago />,
    Extra: <SeccionExtra />,
    Nota: <NotaDelPedido />
};

const BodyButtons = memo(({ nombre, onAlternarSeccion }) => {

    const onClick = () => {
        onAlternarSeccion(nombre)
    }

    return <span
        className={`${styles.botonesNavegacion}  cursor-pointer text-uppercase fw-meidum`}
        onClick={onClick}>
        {nombre}
    </span>
})

export const ModalBody = () => {

    const [seccion, alterSeccion] = useState("Productos")

    const onAlternarSeccion = useCallback((btnName) => {
        alterSeccion(btnName)
    }, [])

    return (
        <Modal.Body className="h-100 p-0">
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
