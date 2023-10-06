import styles from "@/styles/TicketDeVenta.module.css"
import { useContext } from "react";
import { productoReducerContext } from "@/context/Contextos";
import { obtenerFecha } from "@/helper/obtenerFecha";
import { useCalcularTotalAValidar } from "@/hooks/useCalcularTotalAValidar";
import { usePrecioFinalDeLosProductos } from "@/hooks/usePrecioFinalDeLosProductos";
import { Col, Container, Row, Table } from "react-bootstrap";
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales";
import { useCalcularCambio } from "@/hooks/useCalcularCambioTotal";
import { agregarCeroEnLaHora } from "../helper/agregarCeroEnLaHora";

const Totales = () => {

    const { totalAValidar } = useCalcularTotalAValidar()

    const { precioFinal } = usePrecioFinalDeLosProductos()

    const cambio = useCalcularCambio()

    const { calculoSinTarifa } = precioFinal

    const porcentajeAplicado = ((totalAValidar - calculoSinTarifa) / calculoSinTarifa) * 100



    return (

        <Container fluid className="p-0">

            <Row className="d-flex justify-content-end">
                <Col xs={2} className="text-end fw-semibold">
                    Base:
                </Col>
                <Col className="mx-3 text-end " style={{ minWidth: "90px" }} xs={"auto"}>
                    $ {separarNumerosConDecimales(calculoSinTarifa)}
                </Col>
            </Row>

            <Row className="d-flex justify-content-end">
                <Col xs={2} className="text-end fw-semibold">
                    P/A:
                </Col>
                <Col className="mx-3  text-end" style={{ minWidth: "90px" }} xs={"auto"}>
                    {`(${(porcentajeAplicado).toFixed(2)})%`}
                </Col>
            </Row>

            <Row className="d-flex justify-content-end">
                <Col xs={2} className="text-end fw-semibold">
                    Total:
                </Col>
                <Col className="mx-3  text-end" style={{ minWidth: "90px" }} xs={"auto"}>
                    $ {separarNumerosConDecimales(totalAValidar)}
                </Col>
            </Row>


            <Row className="d-flex justify-content-end">
                <Col xs={2} className="text-end fw-semibold ">
                    Cambio:
                </Col>
                <Col className="mx-3  text-end" style={{ minWidth: "90px" }} xs={"auto"}>
                    $ {separarNumerosConDecimales(cambio)}
                </Col>
            </Row>

        </Container>

    )
}

const Tabla = () => {
    const { listaProducto } = useContext(productoReducerContext)
    return (
        <Col className={styles.contenedorDeTabla}>

            <Table className={`${styles.tabla}`}>
                <thead >
                    <tr>
                        <th className="text-start p-1 px-1" >Productos</th>
                        <th className="text-end p-1 ">Cant.</th>
                        <th className="text-end p-1 ">Precio</th>
                        <th className="text-end p-1">Importe</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaProducto.map(({ nombre, cantidadSeleccionada, precioModificado }, index) =>

                            <tr key={index} className="p-0">
                                <td style={{ minWidth: "100px" }} className="text-start  p-0 px-1">{nombre}</td>
                                <td className="text-end p-0 px-1">{separarNumerosConDecimales(cantidadSeleccionada)}</td>
                                <td className="text-end p-0 px-1 ">$ {separarNumerosConDecimales(precioModificado)}</td>
                                <td className="text-end p-0 px-1 ">$ {separarNumerosConDecimales(precioModificado * cantidadSeleccionada)}</td>
                            </tr>

                        )
                    }

                </tbody>
            </Table>

        </Col>
    )
}

const InformacionAdicional = () => {

    const { mes, dia, hora, minutos, segundos, año } = obtenerFecha()

    return (
        <Container fluid className=" m-0 my-1">
            <Row className="d-flex justify-content-center ">
                <h3 className={`${styles.cajero} fw-normal m-0`}>
                    Cajero : Franco
                </h3>
            </Row>
            <Row>
                <Col className="d-flex align-items-center justify-content-center">

                    <p className="m-0">
                        Fecha : {dia}/{mes}/{año}
                    </p>

                </Col>
                <Col>
                    <p className="m-0">
                        Hora : {agregarCeroEnLaHora(hora)}:{agregarCeroEnLaHora(minutos)}:{agregarCeroEnLaHora(segundos)}
                    </p>
                </Col>
            </Row>

        </Container>

    )
}



export const TicketDeVenta = () => {

    

    return (
        <Container fluid className={`p-0 ${styles.ticket} `}>


            <Row className="justify-content-center align-items-center text-center">
                <h2 className={`${styles.numeroDeTicket} text-uppercase m-0 py-1`}>
                    n° de ticket 0001-00001
                </h2>
            </Row>

            <Row className={styles.informacionAdicional}>

                <InformacionAdicional />

            </Row>

            <Row>
                <Tabla />
            </Row>

            <Row className={`${styles.totales} pb-1`}>
                <Totales />
            </Row>


            <Row className="pt-2 text-center">
                <h4 className="text-center ">
                    *Ticket no válido como factura.
                </h4>
            </Row>

        </Container>

    )

};