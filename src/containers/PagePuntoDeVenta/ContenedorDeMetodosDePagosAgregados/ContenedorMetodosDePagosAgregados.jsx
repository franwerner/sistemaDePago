import { Container } from "react-bootstrap";
import React, { lazy, useContext } from "react";
import { restoDelPagoContext } from "@/context/Contextos";
import { SuspenseLoading } from "../../../components/SuspenseLoading";

const ListaDePagosAgregados = lazy(() => import("./ListaDePagosAgregados"))
const MetodosDePagosVacios = lazy(() => import("../../../components/MetodosDePagosVacios"))

export const ContenedorMetodosDePagosAgregados = () => {

    const { pagoActual } = useContext(restoDelPagoContext)

    return (
        <Container fluid>

            <SuspenseLoading>
                {pagoActual.metodosDePago.length == 0 ? <MetodosDePagosVacios /> : <ListaDePagosAgregados />}
            </SuspenseLoading>

        </Container>

    )
}

