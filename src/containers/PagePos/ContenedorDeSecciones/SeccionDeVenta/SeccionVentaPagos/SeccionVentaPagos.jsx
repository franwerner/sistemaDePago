import { Button, Col, Row, Stack } from "react-bootstrap";
import styles from "@/styles/SeccionDeVenta.module.css"
import { IconClone } from "@/components//IconClone";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { CambioTotalMemoizado } from "@/hooks//useCalcularCambioTotal";
import { RestanteTotalMemoizando } from "@/hooks//useRestanteTotal";
import { ListaDeMetodosDePagos } from "@/components//ListaDeMetodosDePagos";
import TotalAVender from "@/components//TotalAVenderMemoizado";
import { MetodosDePagosAgregados } from "@/components//MetodosDePagosAgregados";


const ContenedorDeMetodosDePagos = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <>
            <Row className="border-bottom m-0 overflow-hidden flex-grow-0 p-2">
                <Col className="text-end p-0">
                    <IconClone
                        mostrar={mostrar}
                        alternarMostrar={alternarMostrar} />
                </Col>
            </Row>
            <Row className="h-100 m-0 scrollBarPersonalizada flex-grow-1 " >
                <Col className="h-100  p-0   ">
                    {
                        mostrar ? <MetodosDePagosAgregados /> : <ListaDeMetodosDePagos />
                    }
                </Col>
            </Row>
        </>

    )
}

const ContenedorTotales = () => {


    return (
        <Row
            className="m-3  scrollHidden  h-100 flex-grow-1">
            <Col className="h-100">
                <Stack
                    className="justify-content-between  p-1 p-md-3 border-bottom"
                    direction="horizontal">
                    <p
                        style={{ fontSize: "2.5svh" }}
                        className="m-0 mx-1 text-nowrap ">Adeudo Total</p>
                    <p className="m-0 text-truncate">
                        $/ <TotalAVender />
                    </p>
                </Stack>
                <Stack
                    className="justify-content-between p-1 p-md-3  border-bottom"
                    direction="horizontal">
                    <p
                        style={{ fontSize: "2.5vh" }}
                        className=" m-0 mx-1">Restante</p>
                    <p className="m-0 text-truncate ">
                        $/ <RestanteTotalMemoizando />
                    </p>
                </Stack>
                <Stack
                    className="justify-content-between p-1 p-md-3  m-0 "
                    direction="horizontal">
                    <p
                        style={{ fontSize: "2.5vh" }}
                        className=" m-0 mx-1 ">Cambio</p>
                    <p className=" m-0 text-truncate">
                        $/ <CambioTotalMemoizado />
                    </p>
                </Stack>
            </Col>

        </Row>
    )
}

const ContenedorBotones = () => {

    return (
        <>
            <Col className=" p-1  justify-content-center d-flex justify-content-sm-start">
                <Button
                    variant="secondary"
                    className="fw-semibold px-4 px-sm-5  shadow  border-0 p-3  text-uppercase">
                    Volver
                </Button>
            </Col>
            <Col className=" justify-content-center d-none d-md-flex p-0">
                <p style={{ color: "#555" }} className="m-0 text-uppercas fw-semibold fs-2">Pagos</p>
            </Col>
            <Col className="  p-1 d-flex justify-content-center justify-content-sm-end">
                <Button
                    style={{ background: "#6EC89B" }}
                    className=" border-0 p-3 px-4 px-sm-5 text-uppercase shadow fw-semibold ">
                    Validar
                </Button>
            </Col>
        </>
    )
}

const SeccionVentaPagos = () => {
    return (
        <>
            <Row className="m-0  px-md-5 shadow  p-xxl-3 justify-content-center align-items-center">
                <ContenedorBotones />
            </Row>

            <Row className={`${styles.seccionVentaPagos} flex-grow-1 scrollHidden h-100 d-flex flex-column flex-md-row p-3 p-4  m-0`}>

                <Col
                    xs={{ order: 1 }}
                    md={{ order: 0 }}
                    className=" overflow-hidden d-flex flex-column flex-grow-1 p-0 h-100 shadow ">
                    <ContenedorDeMetodosDePagos />
                </Col>

                <Col className="mx-md-3 d-flex  flex-grow-0 flex-md-grow-1 flex-column h-100 shadow ">
                    <ContenedorTotales />
                </Col>
            </Row>
        </>
    );
};

export default SeccionVentaPagos