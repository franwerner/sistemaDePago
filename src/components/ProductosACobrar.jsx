
import React, { useContext, useEffect, useRef } from "react"
import { productoSeleccionadoContext, } from "../context/Contextos"
import styles from "../styles/ProductosACobrar.module.css"
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales"
import { Col, Container, Row } from "react-bootstrap"
import { useCapturarPulsacionesDelTecladoGlobal } from "../hooks/useCapturarPulsacionesDelTecladoGlobal"
import { useCalculadoraPorcenje } from "../hooks/useCalcularPorcentaje"




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

    const comprobarMetodo = metodo == "Unidades" ? separarNumerosConDecimales(cantidadSeleccionada) : cantidadSeleccionada.toFixed(3)

    const containerRef = useRef(null)



    return (
        <>
            <Row ref = {containerRef} className={`flex-nowrap ${styles.infoDelProducto}`}>

                <Col className={`mx-1 d-flex justify-content-between `}>

                    <p className="fw-bolder text-secondary me-3">
                        {comprobarMetodo}
                    </p>

                    <div className="d-flex">
                        <p   >{metodo} en </p>
                        <div className=" d-flex  mx-1 ">
                            <p> {`$ ${separarNumerosConDecimales(precioModificado)}`}</p>
                            <p>/{metodo}</p>
                        </div>
                    </div>

                </Col>

            </Row>
        </>
    )

})

const Producto = React.memo(({ seleccionarProducto, producto, background }) => {

    const onClick = () => {
        seleccionarProducto(producto)
    }


    useEffect(() => {
        seleccionarProducto(producto)
    }, [producto])

  

    return (
        <>
            <Row
                onClick={onClick}
                className={`${styles.contenedorDelProducto}`}
            >
                    <Container fluid className={`${background} p-1 mt-1 ${styles.productosACobrar} `}>
                        <ContenidoDelProductoArriba producto={producto}></ContenidoDelProductoArriba>
                        <ContenidoDelProductoAbajo producto={producto}></ContenidoDelProductoAbajo>
                    </Container>
            </Row>
        </>
    )
})

export const ProductosACobrar = ({ listaProducto }) => {


    const { seleccion, seleccionarProducto } = useContext(productoSeleccionadoContext)

    useCapturarPulsacionesDelTecladoGlobal(seleccion)

    return (
        <>
            {listaProducto.map(lista => {

                const background = seleccion.nombre == lista.nombre ? `${styles.contendorCobroProductoSeleccionado}` : `${styles.contenedorCobroProductos}`

                return (
                    <Producto
                        key={lista.nombre}
                        producto={lista}
                        seleccionarProducto={seleccionarProducto}
                        background={background}
                    >
                    </Producto>
                )
            }
            )}

        </>
    )

}