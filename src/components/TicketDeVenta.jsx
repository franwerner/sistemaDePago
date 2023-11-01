import styles from "@/styles/TicketDeVenta.module.css"
import { useContext } from "react";
import { productoReducerContext } from "@/context/Contextos";
import { obtenerFecha } from "@/helper/obtenerFecha";
import { useCalcularTotalAValidar } from "@/hooks/useCalcularTotalAValidar";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales";
import { useCalcularCambio } from "@/hooks/useCalcularCambioTotal";
import { AgregarCeroEnNumeroDeUnDigito } from "../helper/AgregarCeroEnNumeroDeUnDigito";
import { useSumaTotalDeProductos } from "../hooks/useSumaTotalDeProductos";
import { useCalcularDescuento } from "../hooks/useCalcularDescuento";
import { useCalculadoraPorcenje } from "../hooks/useCalcularPorcentaje";


const DestallesTotales = ({ nombre, texto }) => {


    return (
        <Stack
            direction="horizontal"
            gap={4}
            className={`${styles.DetallesTotales}  justify-content-end  `}>

            <p
                className="m-0 fw-semibold text-end">
                {nombre}:
            </p>

            <p
                className="m-0">
                {texto}
            </p>

        </Stack>
    )
}

const Totales = () => {

    const suma = useSumaTotalDeProductos()

    const descuento = useCalcularDescuento()

    const cambio = useCalcularCambio()

    return (

        <Col
            style={{ wordBreak: "break-all" }}
            className="mt-1 px-2">

            <DestallesTotales nombre={"Base"} texto={`$ ${separarNumerosConDecimales(suma)}`} />
            <DestallesTotales nombre={"Descuento"} texto={`$ ${separarNumerosConDecimales(descuento)}`} />
            <DestallesTotales nombre={"Total"} texto={`$ ${separarNumerosConDecimales(suma - descuento)}`} />
            <DestallesTotales nombre={"Cambio"} texto={`$ ${separarNumerosConDecimales(cambio)}`} />

        </Col>

    )
}




const ListaDeProductos = ({ nombre, cantidad, precioModificado }) => {

    const porcentaje = useCalculadoraPorcenje(precioModificado) + precioModificado

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

                        $ {separarNumerosConDecimales(porcentaje * cantidad)}

                    </p>

                </div>
            </Stack>
        </>
    )

}

const InformacionAdicional = () => {

    const { mes, dia, hora, minutos, segundos, año } = obtenerFecha()

    return (
        <Stack
            direction="horizontal"
            gap={0}
            className="justify-content-between px-4">

            <p className="m-0  my-1  ">
                Fecha : {AgregarCeroEnNumeroDeUnDigito(dia)}/{AgregarCeroEnNumeroDeUnDigito(mes)}/{año}
            </p>


            <p className="m-0  my-1 ">
                Hora : {AgregarCeroEnNumeroDeUnDigito(hora)}:{AgregarCeroEnNumeroDeUnDigito(minutos)}:{AgregarCeroEnNumeroDeUnDigito(segundos)}
            </p>

        </Stack>
    )
}



const TicketDeVenta = () => {

    const { listaProducto } = useContext(productoReducerContext)

    return (
        <Container className={`position-absolute p-0 lh-1 w-100 ${styles.ticket} `}>


            <Row className="justify-content-center m-0 align-items-center text-center">
                <h2 className={`${styles.numeroDeTicket} text-uppercase m-0 py-1`}>
                    n° de ticket 0001-00001
                </h2>
            </Row>

            <Row className={`${styles.informacionAdicional} m-0`}>
                <InformacionAdicional />
            </Row>

            <Row className={`${styles.listaDeProductos}  m-0 `}>
                <Col className="overflow-hidden px-3 py-1">
                    {listaProducto.map(({ cantidad, precioModificado, nombre }, index) =>
                        <ListaDeProductos
                            key={index}
                            nombre={nombre}
                            precioModificado={precioModificado}
                            cantidad={cantidad} />
                    )}
                </Col>
            </Row>

            <Row className={`${styles.totales} m-0 pb-1`}>
                <Totales />
            </Row>


            <Row className={`${styles.mensajeInformativo}   m-0 d-flex pt-2 `}>
                <Col className="p-0 px-2">
                    <h4 className="text-center mx-0 ">
                        *Comprobante no válido como factura.
                    </h4>
                </Col>
            </Row>

        </Container>

    )

};

export default TicketDeVenta