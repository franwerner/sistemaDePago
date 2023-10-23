import { Container } from "react-bootstrap";
import { useEventoMostrar } from "../../../hooks/useEventoMostrar";
import { useAltenarModoResponsive } from "../../../hooks/useAltenarModoResponsive";
import HocTouchEvents from "../../../components/HocTouchEvents";
import React, { useEffect } from "react";
import { ContenedorPrincipalFooter } from "./ContendorPrincipalFooter";
import { ContenedorPrincipalBody } from "./ContenedorPrincipalBody";


const ContenedorPrincipalWrapper = ({ alternarMostrarContenedor, touchAplicado }) => {

    const { alternarMostrar, mostrar } = useEventoMostrar()


    useAltenarModoResponsive({ mostrar, alternarMostrar })

    useEffect(() => {

        touchAplicado == "end" && alternarMostrar()

    }, [touchAplicado])


    return (
        <Container
            fluid
            className='h-100 d-flex w-100 flex-column overflow-hidden p-0' >

            <ContenedorPrincipalBody
                mostrar={mostrar}
                alternarMostrar={alternarMostrar}
                alternarMostrarContenedor={alternarMostrarContenedor} />

            <ContenedorPrincipalFooter
                mostrar={mostrar}
                alternarMostrarContenedor={alternarMostrarContenedor}
                alternarMostrar={alternarMostrar} />
        </Container>
    )

}

export default HocTouchEvents(ContenedorPrincipalWrapper)

