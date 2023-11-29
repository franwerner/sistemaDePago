import styles from "@/styles/TicketDeVenta.module.css"
import { obtenerFecha } from "@/common/helper/obtenerFecha";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { separarNumerosConDecimales } from "@/common/helper/separarNumerosConDecimales";
import { AgregarCerosANumeros } from "@/common/helper/AgregarCerosANumeros";
import { calcularPorcentaje } from "@/common/helper/calcularPorcentaje";


const DestallesTotales = ({ nombre, numero }) => {
    return (
        <Stack
            direction="horizontal"
            gap={4}
            className={`${styles.DetallesTotales}  justify-content-end  `}>

            <p className="m-0 fw-semibold text-end">
                {nombre}:
            </p>

            <p className="m-0 text-break">
                $ {separarNumerosConDecimales(numero)}
            </p>

        </Stack>
    )
}


const ListaDeProductos = ({ nombre, cantidad, precioModificado, porcentaje = 0 }) => {

    const porcentajeAplicado = calcularPorcentaje({ numero: precioModificado, porcentaje: porcentaje }) + precioModificado

    return (
        <>
            <div
                className=" mt-1 text-start">
                <p className={`${styles.nombreDelProducto}  fw-semibold m-0`} >{nombre}</p>
            </div>

            <Stack
                className="justify-content-between align-items-center mb-1 w-100"
                direction="horizontal">

                <div className={`${styles.contenedorCantidad} d-flex  justify-content-center `}>
                    <p className="fw-bold text-wrap  text-end  m-0  ">
                        {parseFloat(cantidad).toFixed(2)}
                    </p>

                    <p className="fw-bold m-0 mx-1">
                        x
                    </p>

                    <p className="m-0 text-start ">{separarNumerosConDecimales(porcentaje)}</p>
                </div>

                <div className="d-flex justify-content-end  align-items-center  ">
                    <p className={`${styles.totalDelProducto} m-0 fw-semibold mx-2   text-end`} >

                        $ {separarNumerosConDecimales(porcentajeAplicado * cantidad)}
                    </p>
                </div>
            </Stack>
        </>
    )
}

const InformacionAdicional = ({ fecha }) => {

    const { mes, dia, hora, minutos, segundos, año } = obtenerFecha(fecha)

    return (
        <Stack
            direction="horizontal"
            gap={0}
            className="justify-content-between px-4">

            <p className="m-0  my-1  ">
                Fecha : {AgregarCerosANumeros({ numero: dia, digitos: 2 })}/{AgregarCerosANumeros({ numero: mes, digitos: 2 })}/{año}
            </p>


            <p className="m-0  my-1 ">
                Hora : {AgregarCerosANumeros({ numero: hora, digitos: 2 })}:{AgregarCerosANumeros({ numero: minutos, digitos: 2 })}:{AgregarCerosANumeros({ numero: segundos, digitos: 2 })}
            </p>

        </Stack>
    )
}



const TicketDeVenta = ({ listaDeProductos = [], cambio, sumaTotal, descuento , fecha, porcentaje = 0,topAbsolute = 5 }) => {

    const totalTicket = [
        { nombre: "Base", numero: sumaTotal },
        { nombre: "Descuento", numero: descuento },
        { nombre: "Total", numero: (sumaTotal - descuento) },
        { nombre: "Cambio", numero: cambio },
    ]

    return (
        <Container style={{top : `${topAbsolute}%`}} className={`position-absolute  p-0  lh-1 w-100 ${styles.ticket} `}>

            <Row className="justify-content-center m-0 align-items-center text-center">
                <h2 className={`${styles.numeroDeTicket} text-uppercase m-0 py-1`}>
                    n° de ticket 0001-00001
                </h2>
            </Row>

            <Row className={`${styles.informacionAdicional} m-0`}>
                <InformacionAdicional fecha={fecha} />
            </Row>

            <Row className={`${styles.listaDeProductos}  m-0 `}>
                <Col className="overflow-hidden px-3 py-1">
                    {listaDeProductos.map(({ cantidad, precioModificado, nombre }, index) =>
                        <ListaDeProductos
                            porcentaje={porcentaje}
                            key={index}
                            nombre={nombre}
                            precioModificado={precioModificado}
                            cantidad={cantidad} />
                    )}
                </Col>
            </Row>

            <Row className={`${styles.totales} m-0 pb-1`}>
                <Col
                    className="mt-1 px-2">
                    {
                        totalTicket.map(item =>
                            <DestallesTotales
                                key={item.nombre}
                                nombre={item.nombre}
                                numero={item.numero}
                            />
                        )
                    }
                </Col>
            </Row>


            <Row className={`${styles.mensajeInformativo}  m-0 d-flex pt-2 `}>
                <Col className="p-0 px-2">
                    <h4 className="text-center p-0 mx-0 ">
                        *Comprobante no válido como factura.
                    </h4>
                </Col>
            </Row>

        </Container>

    )

};

export default TicketDeVenta