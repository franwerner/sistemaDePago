
import React, { useCallback, useContext, useEffect, useRef } from "react"
import { productoSeleccionadoContext } from "../../context/Contextos"
import styles from "../../styles/PlantillaCobro.module.css"
import { separarNumerosConDecimales } from "../../helper/separarNumerosConDecimales"
import { Col, Container, Row } from "react-bootstrap"
import { useCalculadoraPorcenje } from "../../hooks/useCalcularPorcentaje"
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

    const comprobarMetodo = metodo == "Unidades" ? separarNumerosConDecimales(cantidadSeleccionada) : cantidadSeleccionada.toFixed(3)

    const containerRef = useRef(null)



    return (
        <>
            <Row ref={containerRef} className={`flex-nowrap  ${styles.infoDelProducto}`}>

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
    const referencia = useRef(null)


    useEffect(() => {
        seleccionarProducto(producto)
        referencia.current.focus()
    }, [producto])


    return (
        <>
            <Row
                tabIndex={0}
                onClick={onClick}
                className={`${styles.contenedorDelProducto}`}
                ref={referencia}
                id="producto-a-cobrar"
            >
                <Container fluid className={`${background} my-1 ${styles.productosACobrar} `}>
                    <ContenidoDelProductoArriba producto={producto}></ContenidoDelProductoArriba>
                    <ContenidoDelProductoAbajo producto={producto}></ContenidoDelProductoAbajo>
                </Container>
            </Row>
        </>
    )
})


export const ListaDeProductosACobrar = ({ listaProducto, eliminarProducto }) => {


    const { seleccion, seleccionarProducto } = useContext(productoSeleccionadoContext)




    const handleShortcut = useCallback(() => {
        const target = document.activeElement
     
        if (target.id == "producto-a-cobrar" || target.id == "interface-sistema") {
            eliminarProducto(seleccion)
        }

    },[]);


    useHotkeys("backSpace,", handleShortcut)


    return (
        <>

            {listaProducto.map(lista => {

                const background = seleccion.nombre == lista.nombre ? `${styles.contendorCobroProductoSeleccionado}` : `${styles.contenedorCobroProductoNoSeleccionado}`

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