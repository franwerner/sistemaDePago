import React, { memo } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "@/styles/ModalDeSecciones.module.css"
import { Link } from "react-router-dom";
import { separarNumerosConDecimales } from "../../common/helper/separarNumerosConDecimales";

const secciones = [
    { nombre: "kiosco" },
    { nombre: "panaderia" },
    { nombre: "helados" },
]

const Secciones = memo(({ nombre }) => {


    return (
        <Link
            style={{ textDecoration: "none" }}
            to={`?seccion=${nombre}`}>

            <div className={`${styles.containerSeccion} shadow-sm  my-1 p-3 d-flex justify-content-between align-items-center rounded-3`}>
                <p className="m-0 text-uppercase text-truncate text-ligthdark">
                    {nombre}
                </p>
                <p className="m-0 text-ligthdark">
                    Cant. <span className="fw-semibold" style={{ textDecoration: "underline" }}>{separarNumerosConDecimales(39)}</span>
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
                    className={`${styles.botonClose} text-white fw-semibold fs-5 w-100`}>Cerrar</Button>
            </Modal.Footer>

        </Modal>
    );
};


export default ModalDeSecciones