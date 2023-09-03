import { NavegacionHeader } from "../NavegacionHeader/NavegacionHeader"
import { Container, Modal } from "react-bootstrap"
import React from "react"
import { ContenedorDePagoHeader } from "./ContenedorPagos/ContendorDePagoHeader"
import { ContenedorDePagoBody } from "./ContenedorPagos/ContendorDePagoBody"
import styles from "@/styles"


export const ContenedorDePagos = ({ mostrar, alternarMostrar }) => {

    console.log(styles)

    const display = mostrar ? "block" : "none"

    return (

        <>
            <Container fluid
                tabIndex={1}
                id="modal-pagos"
                className="modal p-0 show"
                style={{ display }}
            >
                <Modal.Dialog fullscreen={true}>

                    <Modal.Header className="p-0 flex-grow-0 d-block" >

                        <Modal.Title>

                            <NavegacionHeader mostrar={mostrar} />

                        </Modal.Title>

                    </Modal.Header>

                    <Modal.Body className="flex-grow-1">

                        <Container fluid className=" h-100 d-flex flex-column  w-75 ">

                            <ContenedorDePagoHeader alternarMostrar={alternarMostrar} />

                            <ContenedorDePagoBody mostrar={mostrar} />

                        </Container>

                    </Modal.Body>

                </Modal.Dialog>

            </Container>
        </>


    )

}
