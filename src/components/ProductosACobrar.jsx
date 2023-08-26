
import React, {  useContext, useEffect, useRef } from "react"
import { TarifaContex, productoSeleccionadoContext, } from "../context/Contextos"
import styles from "../styles/ProductosACobrar.module.css"
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales"
import { calculadoraPorcentaje } from "../helper/calcularPorcentaje"
import { Col, Container, Row } from "react-bootstrap"
import { usebackSpace } from "../hooks/useAccionDeTeclas"


const ContendioDelProducto = React.memo(({ producto }) => {

    const { tarifa } = useContext(TarifaContex)

    const { nombre, cantidadSeleccionada, precioModificado, metodo } = producto

    const nuevoPrecio = precioModificado * cantidadSeleccionada

    const porcentaje = calculadoraPorcentaje(nuevoPrecio, tarifa.tarifa)

    const comprobarMetodo = metodo == "Unidades" ? separarNumerosConDecimales(cantidadSeleccionada) : cantidadSeleccionada.toFixed(3)

    return (
        <>
            <Container fluid className="p-0">
                <Row >
                    <Col className={` me-1 fw-bolder ${styles.nombreDelProducto}`}>{nombre}</Col>
                    <Col className={`fw-bolder text-end ${styles.precioTotalDelProducto}`}>{`$ ${separarNumerosConDecimales(porcentaje + nuevoPrecio)}`}</Col>
                </Row>

                <Row className={`flex-nowrap ${styles.infoDelProducto}`}>

                    <Col className={`mx-1 d-flex justify-content-between  ${styles.test} `}>

                        <p className="fw-bolder text-secondary  me-3">
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
            </Container>
        </>
    )


})

const Producto = ({ seleccionarProducto, producto, background }) => {

    const onClick = () => {
        seleccionarProducto(producto)
    }

    const { backSpace } = usebackSpace(producto)

    const containerRef = useRef(null)

    const onKeyDown = (e) => {
        backSpace(e)
    }



    useEffect(() => {

        containerRef.current.focus()

    }, [producto])


    return (
        <>
            <Row
              
                onClick={onClick}
                className={`${styles.contenedorDelProducto}`}
            >
                <Col
                    ref={containerRef}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    className={`${background} mt-1 ${styles.productosACobrar} `}>

                    <ContendioDelProducto producto={producto}></ContendioDelProducto>

                </Col>
            </Row>
        </>
    )
}

export const ProductosACobrar = ({ listaProducto }) => {

    const { seleccion, seleccionarProducto } = useContext(productoSeleccionadoContext)

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