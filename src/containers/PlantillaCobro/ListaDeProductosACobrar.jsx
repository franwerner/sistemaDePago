
import React, { useContext, useEffect, useRef } from "react"
import styles from "@/styles/PlantillaCobro.module.css"
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales"
import { Col, Container, Row } from "react-bootstrap"
import { useCalculadoraPorcenje } from "@/hooks/useCalcularPorcentaje"
import { useHotkeys } from "react-hotkeys-hook"


const ContenidoDelProductoArriba = React.memo(({ producto }) => {


    const { nombre, cantidadSeleccionada, precioModificado } = producto

    const nuevoPrecio = precioModificado * cantidadSeleccionada

    const porcentaje = useCalculadoraPorcenje(nuevoPrecio)

    return (
        <>

            <Row className="" >
                <Col className={`me-1 fw-bolder ${styles.nombreDelProducto}`}>{nombre}</Col>
                <Col className={`fw-bolder text-end  ${styles.precioTotalDelProducto}`}>{`$ ${separarNumerosConDecimales(porcentaje + nuevoPrecio)}`}</Col>
            </Row>
        </>
    )

})

const ContenidoDelProductoAbajo = React.memo(({ producto }) => {

    const { cantidadSeleccionada, precioModificado, metodo } = producto

    const porcentaje = useCalculadoraPorcenje(precioModificado)



    return (
        <>
            <Row className={`flex-nowrap  ${styles.infoDelProducto}`}>

                <Col className={`mx-1 d-flex justify-content-between `}>

                    <p className="fw-bolder text-secondary me-3">
                        {separarNumerosConDecimales(cantidadSeleccionada)}
                    </p>

                    <div className="d-flex">
                        <p   >{metodo} en </p>
                        <div className=" d-flex  mx-1 ">
                            <p> {`$ ${separarNumerosConDecimales(precioModificado + porcentaje)}`}</p>
                            <p>/{metodo}</p>
                        </div>
                    </div>

                </Col>

            </Row>
        </>
    )

})

const Producto = React.memo(({ seleccionarElemento, producto, background }) => {

    const onClick = () => {
        seleccionarElemento(producto)
    }

    const referencia = useRef(null)


    useEffect(() => {
        seleccionarElemento(producto)
        referencia.current.focus()
    }, [producto])


    return (
        <>
            <Row
                tabIndex={0}
                onClick={onClick}
                className={`producto-a-cobrar ${styles.contenedorDelProducto}`}
                ref={referencia}
            >
                <Container fluid className={`${background} my-1 ${styles.productosACobrar} `}>
                    <ContenidoDelProductoArriba producto={producto}></ContenidoDelProductoArriba>
                    <ContenidoDelProductoAbajo producto={producto}></ContenidoDelProductoAbajo>
                </Container>
            </Row>
        </>
    )
})


export const ListaDeProductosACobrar = ({ listaProducto, eliminarProducto, seleccion, seleccionarElemento }) => {


    const config = {
        keyup: true
    }

    const handleShortcut = () => {

        eliminarProducto(seleccion)

    };

    useHotkeys("backSpace,", handleShortcut, config)


    return (
        <>

            {listaProducto.map(lista => {

                const background = seleccion.nombre == lista.nombre ? `${styles.contendorCobroProductoSeleccionado}` : `${styles.contenedorCobroProductoNoSeleccionado}`

                return (
                    <Producto
                        key={lista.nombre}
                        producto={lista}
                        seleccionarElemento={seleccionarElemento}
                        background={background}
                    >
                    </Producto>
                )
            }
            )}

        </>
    )

}