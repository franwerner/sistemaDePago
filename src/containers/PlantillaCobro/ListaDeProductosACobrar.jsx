
import React, { useEffect, useRef } from "react"
import styles from "@/styles/PlantillaCobro.module.css"
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales"
import { Col, Container, Row } from "react-bootstrap"
import { CalcularPorcentajeMemoizado } from "@/hooks//useCalcularPorcentaje"


const ContenidoDelProductoArriba = React.memo(({ producto }) => {

    const { nombre, cantidadSeleccionada, precioModificado } = producto

    const nuevoPrecio = precioModificado * cantidadSeleccionada

    return (

        <Row >
            <Col className={`me-1 fw-bolder ${styles.nombreDelProducto}`}>{nombre}</Col>
            <Col className={`fw-bolder text-end  ${styles.precioTotalDelProducto} flex-nowrap text-truncate`}>$ <CalcularPorcentajeMemoizado n1={nuevoPrecio} n2={nuevoPrecio} /></Col>
        </Row>
    )

})

const ContenidoDelProductoAbajo = React.memo(({ producto }) => {

    const { cantidadSeleccionada, precioModificado, metodo } = producto


    return (
        <Row className={`flex-nowrap  ${styles.infoDelProducto}`}>

            <Col className={`mx-1 d-flex justify-content-between `}>

                <p className="fw-bolder text-secondary me-3">
                    {separarNumerosConDecimales(cantidadSeleccionada)}
                </p>

                <div className="d-flex">
                    <p>{metodo} en </p>
                    <div className=" d-flex  mx-1 ">
                        <p>
                            $ <CalcularPorcentajeMemoizado n1={precioModificado} n2={precioModificado} />
                        </p>
                        <p>/{metodo}</p>
                    </div>
                </div>

            </Col>

        </Row>
    )

})

const Producto = React.memo(({ seleccionarProducto, producto, background }) => {

    const onClick = () => {
        seleccionarProducto(producto)
    }

    const referencia = useRef(null)

    useEffect(() => {
        referencia.current.focus()
    }, [producto])


    return (
        <Row
            tabIndex={0}
            onClick={onClick}
            className={`producto-a-cobrar ${styles.contenedorDelProducto}`}
            ref={referencia}
        >
            <Container fluid className={`${styles[background]} my-1 ${styles.productosACobrar} position-relative text-nowrap overflow-hidden`}>
                <ContenidoDelProductoArriba producto={producto} />
                <ContenidoDelProductoAbajo producto={producto} />
            </Container>
        </Row>
    )
})


export const ListaDeProductosACobrar = ({ listaProducto, ultimoSeleccionado, seleccionarProducto }) => {

    const verificarUltimoSeleccionado = (lista) => {
        return ultimoSeleccionado.nombre == lista.nombre ? "contendorCobroProductoSeleccionado" : "contenedorCobroProductoNoSeleccionado"
    }

    return listaProducto.map(lista =>

        <Producto
            key={lista.nombre}
            producto={lista}
            seleccionarProducto={seleccionarProducto}
            background={(verificarUltimoSeleccionado(lista))}
        />

    )

}