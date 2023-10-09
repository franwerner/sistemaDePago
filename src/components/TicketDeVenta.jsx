import styles from "@/styles/TicketDeVenta.module.css"
import { useContext } from "react";
import { productoReducerContext } from "@/context/Contextos";
import { obtenerFecha } from "@/helper/obtenerFecha";
import { useCalcularTotalAValidar } from "@/hooks/useCalcularTotalAValidar";
import { usePrecioFinalDeLosProductos } from "@/hooks/usePrecioFinalDeLosProductos";
import { Col, Container, Row } from "react-bootstrap";
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales";
import { useCalcularCambio } from "@/hooks/useCalcularCambioTotal";
import { agregarCeroEnLaHora } from "@/helper/agregarCeroEnLaHora";



const RowTotales = ({ nombre, texto }) => {

    return (
        <Row className={`${styles.rowTotal} d-flex justify-content-between  `}>
            <Col className="text-end  mx-2 fw-bold">
                <p className="m-0">
                    {nombre}:
                </p>
            </Col>
            <Col className="text-end " xs={"auto"}>
                <p className="m-0">
                    {texto}
                </p>
            </Col>
        </Row>
    )
}

const Totales = () => {

    const { totalAValidar } = useCalcularTotalAValidar()

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const cambio = useCalcularCambio()

    const { calculoSinTarifa } = precioFinal

    const porcentajeAplicado = ((totalAValidar - calculoSinTarifa) / calculoSinTarifa) * 100


    return (

        <Container className="mt-1">

            <RowTotales nombre={"Base"} texto={`$ ${separarNumerosConDecimales(calculoSinTarifa)}`} />
            <RowTotales nombre={"P/A"} texto={`$ (${(porcentajeAplicado).toFixed(2)}%)`} />
            <RowTotales nombre={"Total"} texto={`$ ${separarNumerosConDecimales(totalAValidar)}`} />
            <RowTotales nombre={"Cambio"} texto={`$ ${separarNumerosConDecimales(cambio)}`} />

        </Container>

    )
}

const ListaDeProductos = () => {
    const { listaProducto } = useContext(productoReducerContext)

    return (

        <Col className={`${styles.listaDeProductos} py-2`}>
            {listaProducto.map(({ cantidadSeleccionada, precioModificado, nombre }, index) =>
                <Container
                    key={index}
                    className="overflow-hidden">

                    <Row className="position-relative">

                        <Col
                            xs={12}
                            className="p-0 mx-1 text-start">
                            <p className={`${styles.nombreDelProducto}  fw-semibold m-0`} >{nombre}</p>

                        </Col>

                        <Col className=" d-flex justify-content-between p-0  align-items-center">

                            <div
                                className={`${styles.contenedorCantidad} d-flex  w-50 justify-content-center `}>

                                <p className="fw-bold text-nowrap text-end w-25 m-0 mx-1 me-1 ">
                                    {cantidadSeleccionada} x
                                </p>

                                <p className="m-0 text-start w-50">{separarNumerosConDecimales(precioModificado)}</p>

                            </div>

                            <div className="d-flex justify-content-end h-100 align-items-center al  w-50">

                                <p className={`${styles.totalDelProducto} m-0 fw-semibold pb-1 text-end`} >

                                    $ {separarNumerosConDecimales(precioModificado * cantidadSeleccionada)}

                                </p>

                            </div>

                        </Col>

                    </Row>

                </Container>
            )}

        </Col>
    )

}

const InformacionAdicional = () => {

    const { mes, dia, hora, minutos, segundos, año } = obtenerFecha()

    return (
        <Container className={`m-0 my-1`}>
            <Row>
                <Col className="mx-1 text-start">

                    <p className="m-0 me-1  ">
                        Fecha : {dia}/{mes}/{año}
                    </p>


                    <p className="m-0  ">
                        Hora : {agregarCeroEnLaHora(hora)}:{agregarCeroEnLaHora(minutos)}:{agregarCeroEnLaHora(segundos)}
                    </p>

                </Col>
            </Row>

        </Container>

    )
}



export const TicketDeVenta = () => {

    return (
        <Container className={` p-2 position-absolute  lh-1 w-100 ${styles.ticket} `}>


            <Row className="justify-content-center align-items-center text-center">
                <h2 className={`${styles.numeroDeTicket} text-uppercase m-0 py-1`}>
                    n° de ticket 0001-00001
                </h2>
            </Row>

            <Row className={styles.informacionAdicional}>

                <InformacionAdicional />

            </Row>

            <Row>
                <ListaDeProductos />
            </Row>

            <Row className={`${styles.totales} pb-1`}>
                <Totales />
            </Row>


            <Row className={`${styles.mensajeInformativo} pt-2 `}>
                <h4 className="text-center ">
                    *Comprobante no válido como factura.
                </h4>
            </Row>

        </Container>

    )

};