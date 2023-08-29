import React, { useContext, useEffect, useRef } from "react"
import { ProductosACobrar } from "./ProductosACobrar"
import { productoReducerContext } from "../context/Contextos"
import { TotalProductos } from "./TotalProductos"
import styles from "../styles/PlantillaCobro.module.css"
import { Col, Container, Row } from "react-bootstrap"
import { PlantillaPagos } from "./PlantillaPagos"
import { BotonBorrarProducto, BotonEditarProducto, BotonEliminarProducto } from "./BotonesCrud"
import { useEventoMostrar } from "../hooks/useEventoMostrar"
import { EdicionProductos } from "./EdicionProductos"
import { ProductoSeleccionadoProvider } from "../context/provider/ProductoSeleccionadoProvider"
import { useEstablecerLimitesEjes } from "../hooks/useEstablecerLimitesEjes"
import { useEjesFinales } from "../hooks/useEjesFinales"
import { useColumna } from "../hooks/useColumna"

const SinProductos = () => {

    return (
        <>
            <Row className={`d-flex justify-content-center align-items-center ${styles.contenedorSinProductos}`}>
                <Col className="d-flex justify-content-center position-relative ">
                    <i className={`fa-solid fa-cart-shopping ${styles.carrito}`}></i>
                    <p className={` text-center fs-5 fw-bolder ${styles.textoCarrito}`}>No hay productos selecionados</p>
                </Col>

            </Row>
        </>
    )
}


const PlantillaCobroBody = React.memo(() => {

    const { listaProducto } = useContext(productoReducerContext)


    const referido = useRef(null)


    useEffect(() => {

        if (!referido.current) return

        referido.current.scrollTop = referido.current.scrollHeight;

    }, [listaProducto])

    return (
        <>


            <Container fluid ref={referido} className={` ${styles.contenedorCobroBody}`}>
                {listaProducto.length == 0 ? <SinProductos></SinProductos> :
                    <>
                        <ProductosACobrar
                            listaProducto={listaProducto}
                        >
                        </ProductosACobrar>

                        <Row>
                            <TotalProductos>

                            </TotalProductos>
                        </Row>
                    </>
                }
            </Container>


        </>
    )
})

const PlantillaCobroHeader = React.memo(() => {


    const { mostrar, alternarMostrar } = useEventoMostrar()


    return (
        <>

            <Container fluid >
                <Row className={` p-2   ${styles.botonesCrud}`}>
                    <Col>
                        <BotonEditarProducto alternarMostrar={alternarMostrar} />
                    </Col>
                    <Col >
                        <BotonBorrarProducto />
                    </Col>
                    <Col >
                        <BotonEliminarProducto></BotonEliminarProducto>
                    </Col>
                </Row>
            </Container>

            {mostrar && <EdicionProductos
                alternarMostrar={alternarMostrar}
            />}
        </>
    )

})



const ContenedorCobro = ({ children }) => {

    const ESTADO_INCIAL = 4

    const { ejeLimitacion, establecerLimiteIncialDocumento } = useEstablecerLimitesEjes()

    const { ejesFinales, establecerEjesFinales, clientX } = useEjesFinales(ejeLimitacion)

    const { calcularColumna, columna } = useColumna(ESTADO_INCIAL)


    const onClickMove = (e) => {
        establecerLimiteIncialDocumento(e)
        establecerEjesFinales(e)
    }

    useEffect(() => {

        calcularColumna({ "XY": { ...ejesFinales }, ejeLimitacion })

    }, [clientX, ejeLimitacion])



    return (
        <>

            <Col md={5} lg={columna}

                style={{ width: clientX, }}
                className={`p-0 overflow-hidden   d-flex`}>

                <div className={`overflow-hidden w-100 d-flex flex-column`}>
                    {children}
                </div>

                <span onMouseDown={onClickMove}
                    className={`d-none d-md-block overflow-hidden h-100 ${styles.linea}`}>
                </span>

            </Col>

        </>
    )

}

export const PlantillaCobro = () => {

    

    return (
        <>
            <ContenedorCobro>

                <ProductoSeleccionadoProvider>
                    <PlantillaCobroHeader></PlantillaCobroHeader>
                    <PlantillaCobroBody></PlantillaCobroBody>
                </ProductoSeleccionadoProvider>

                <PlantillaPagos></PlantillaPagos>

            </ContenedorCobro>

        </>
    )
}
