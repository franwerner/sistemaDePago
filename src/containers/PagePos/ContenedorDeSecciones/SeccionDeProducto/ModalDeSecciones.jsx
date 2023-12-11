import React, { memo } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { separarNumerosConDecimales } from "@/common/helper/separarNumerosConDecimales";
import { splitDeRutasUtils } from "@/common//utils/splitDeRutasUtils";

const secciones = [
    { nombre: "kiosco" },
    { nombre: "panaderia" },
    { nombre: "helados" },
]

const Secciones = memo(({ nombre }) => {

    const split = splitDeRutasUtils()

    const color = split[2] == nombre ? "bg-primary text-white" : "bg-white text-ligthdark"

    return (
        <Link
            style={{ textDecoration: "none" }}
            to={`/${split[0]}/${split[1]}/${nombre}`}>

            <div className={`border ${color} border-1 border-ligthdark  my-1 p-3 d-flex justify-content-between align-items-center rounded-3`}>
                <p className="m-0 text-uppercase text-truncate  fw-semibold ls-4">
                    {nombre}
                </p>
                <p className="m-0">
                    Prod. <span className="fw-semibold">{separarNumerosConDecimales(39)}</span>
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
            <Modal.Header closeButton className="border-0">
                <Modal.Title className="text-center w-100 text-uppercase text-ligthdark ls-3 border-bottom">Secciones</Modal.Title>
            </Modal.Header>
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
                    variant="outline-primary"
                    onClick={alternarMostrar}
                    className={`fw-semibold fs-5 w-100 ls-3`}>Cerrar</Button>
            </Modal.Footer>

        </Modal>
    );
};


export default ModalDeSecciones