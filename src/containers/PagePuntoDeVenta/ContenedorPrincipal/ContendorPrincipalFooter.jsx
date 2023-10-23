import { SuspenseLoading } from "@/components//SuspenseLoading"
import React, { lazy } from "react"
import { Row } from "react-bootstrap"

const BotonProductoYRevision = lazy(() => import("@/components//BotonProductoYRevision"))
const BotonPagos = lazy(() => import("@/components//BotonPagos"))

export const ContenedorPrincipalFooter = React.memo(({ alternarMostrar, alternarMostrarContenedor, mostrar }) => {

    return (
        <Row className="d-md-none border w-100 m-0 border-ligth ">
            <SuspenseLoading>
                <BotonPagos
                    alternarMostrarContenedor={alternarMostrarContenedor} />

                <BotonProductoYRevision
                    alternarMostrar={alternarMostrar}
                    mostrar={mostrar} />
            </SuspenseLoading>
        </Row>

    )
})