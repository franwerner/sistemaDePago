import styles from "@/styles/TicketDeVenta.module.css"
import { useContext } from "react";
import { productoReducerContext } from "@/context/Contextos";
import { obtenerFecha } from "@/helper/obtenerFecha";
import { useCalcularTotalAValidar } from "@/hooks/useCalcularTotalAValidar";
import { usePrecioFinalDeLosProductos } from "@/hooks/usePrecioFinalDeLosProductos";
import { Col, Container, Row } from "react-bootstrap";
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales";
import { useCalcularCambio } from "@/hooks/useCalcularCambioTotal";
import { AgregarCeroEnNumeroDeUnDigito } from "../helper/AgregarCeroEnNumeroDeUnDigito";




const RowTotales = ({ nombre, texto }) => {

    return (
        <Row className={`${styles.rowTotal} d-flex justify-content-between  `}>
            <Col className="text-end  mx-2 fw-bold">
                <p className="m-0">
                    {nombre}:
                </p>
            </Col>
            <Col className="text-end mx-2 " xs={"auto"}>
                <p className="m-0">
                    {texto}
                </p>
            </Col>
        </Row>
    )
}

const Totales = () => {

    const { totalAValidar } = useCalcularTotalAValidar()

    const { calculoSinTarifa } = usePrecioFinalDeLosProductos()

    const { cambioTotal } = useCalcularCambio()

    const porcentajeAplicado = ((totalAValidar - calculoSinTarifa) / calculoSinTarifa) * 100

    const verificarSiPorcentajeEsNan = isNaN(porcentajeAplicado) ? 0 : porcentajeAplicado

    return (

        <Container className="mt-1">

            <RowTotales nombre={"Base"} texto={`$ ${separarNumerosConDecimales(calculoSinTarifa)}`} />
            <RowTotales nombre={"P/A"} texto={`$ (${(verificarSiPorcentajeEsNan).toFixed(2)}%)`} />
            <RowTotales nombre={"Total"} texto={`$ ${separarNumerosConDecimales(totalAValidar)}`} />
            <RowTotales nombre={"Cambio"} texto={`$ ${separarNumerosConDecimales(cambioTotal)}`} />

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
                    className="overflow-hidden py-1">

                    <Row className="position-relative">

                        <Col
                            xs={12}
                            className="p-0 mx-1 text-start">
                            <p className={`${styles.nombreDelProducto}  fw-semibold m-0`} >{nombre}</p>

                        </Col>

                        <Col className=" d-flex justify-content-between p-0  align-items-center">

                            <div
                                className={`${styles.contenedorCantidad} d-flex  w-50 justify-content-center `}>

                                <p  className="fw-bold text-wrap  text-end  m-0  ">
                                    {parseFloat(cantidadSeleccionada).toFixed(2)}
                                </p>

                                <p className="fw-bold m-0 mx-1">
                                    x
                                </p>

                                <p className="m-0 text-start w-50">{separarNumerosConDecimales(precioModificado)}</p>

                            </div>

                            <div className="d-flex justify-content-end  align-items-center   w-50">

                                <p className={`${styles.totalDelProducto} m-0 fw-semibold mx-2  text-end`} >

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

                    <p className="m-0  my-1  ">
                        Fecha : {AgregarCeroEnNumeroDeUnDigito(dia)}/{AgregarCeroEnNumeroDeUnDigito(mes)}/{año}
                    </p>


                    <p className="m-0  my-1 ">
                        Hora : {AgregarCeroEnNumeroDeUnDigito(hora)}:{AgregarCeroEnNumeroDeUnDigito(minutos)}:{AgregarCeroEnNumeroDeUnDigito(segundos)}
                    </p>

                </Col>
            </Row>

        </Container>

    )
}



 const TicketDeVenta = () => {

    return (
        <Container className={`position-absolute px-3 lh-1 w-100 ${styles.ticket} `}>


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


            <Row className={`${styles.mensajeInformativo} px-0 d-flex pt-2 `}>
                <h4 className="text-center mx-0 ">
                    *Comprobante no válido como factura.
                </h4>
            </Row>

        </Container>

    )

};

export default TicketDeVenta