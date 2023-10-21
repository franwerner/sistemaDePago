import { BotonPagos } from "@/components//BotonPagos"
import { BotonProductoYRevision } from "@/components//BotonProductoYRevision"
import React from "react"
import { Row } from "react-bootstrap"


export const ContenedorPrincipalFooter = React.memo(({ alternarMostrar, alternarMostrarContenedor, mostrar }) => {

    return (
        <Row className="d-md-none border w-100 m-0 border-ligth ">
            <BotonPagos
                alternarMostrarContenedor={alternarMostrarContenedor} />
            <BotonProductoYRevision
                alternarMostrar={alternarMostrar}
                mostrar={mostrar} />
        </Row>

    )
})