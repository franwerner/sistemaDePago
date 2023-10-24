import React from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "@/styles/ModalDeSecciones.module.css"
import { Link, useLocation } from "react-router-dom";
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales";
import { obtenerSearchParams } from "../helper/obtenerSearchParams";



const secciones = [
    { nombre: "kiosco" },
    { nombre: "panaderia" },
    { nombre: "helados" },


]

const Secciones = React.memo(({ nombre }) => {

    const { search } = useLocation()

    const searchSeccion = obtenerSearchParams(search)


    return (
        <Link style={{ textDecoration: "none" }} to={`?seccion=${nombre}`}>
            <div className={`${styles.containerSeccion} shadow-sm showing ${searchSeccion == nombre && styles.seccionActual} my-1 p-3 d-flex justify-content-between align-items-center rounded-3`}>
                <p className="m-0 text-uppercase text-truncate" style={{ color: "#555" }}>
                    {nombre}
                </p>
                <p style={{ whiteSpace: "nowrap",color : "#555"}} className="m-0">
                    Cant. <span className="fw-semibold" style={{textDecoration : "underline"}}>{separarNumerosConDecimales(39)}</span>
                </p>
            </div>
        </Link>
    )

})


const ModalDeSecciones = ({ mostrar, alternarMostrar }) => {
    return (
        <Modal
            show={mostrar}
            onHide={alternarMostrar}
            backdrop={"static"}
            keyboard={true}
        >
            <Modal.Body className="" >

                {
                    secciones.map(item =>

                        <Secciones
                            key={item.nombre}
                            nombre={item.nombre} />
                    )
                }


            </Modal.Body>

            <Modal.Footer>
                <Button
                    onClick={alternarMostrar}
                    className={`${styles.botonClose} fw-semibold fs-5 w-100`}>Cerrar</Button>
            </Modal.Footer>

        </Modal>
    );
};


export default ModalDeSecciones