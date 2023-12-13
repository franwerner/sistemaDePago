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

const BodyButtons = memo(({
    nombre,
    onAlternarSeccion,
    isSeccion
}) => {

    const onClick = () => {
        onAlternarSeccion(nombre)
    }

    return (
        <div className={`${isSeccion && "border-bottom border-primary border-3"}`}>
            <span
                className={`${styles.botonesNavegacion}  cursor-pointer text-uppercase fw-meidum`}
                onClick={onClick}>
                {nombre}
            </span>
        </div>
    )
})

export const ModalBody = () => {

    const [seccion, alterSeccion] = useState("Productos")

    const onAlternarSeccion = useCallback((btnName) => {
        alterSeccion(btnName)
    }, [])

    return (
        <Modal.Body className="h-100 ">
            <div className="d-flex justify-content-around mb-2 p-1 pb-0 ">
                {
                    botonesNavegacion.map(item =>
                        <BodyButtons
                            nombre={item}
                            key={item}
                            isSeccion={item == seccion}
                            onAlternarSeccion={onAlternarSeccion} />
                    )
                }
            </div>

            <div className={`${styles.contenedorDeSecciones}  shadow w-100  scrollBarPersonalizada `}>
                <SuspenseCompontentsLoading>
                    {componentes[seccion]}
                </SuspenseCompontentsLoading>
            </div>


        </Modal.Body>
    )
}
