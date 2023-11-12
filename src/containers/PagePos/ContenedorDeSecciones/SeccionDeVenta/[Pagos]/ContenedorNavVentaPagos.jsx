import { productoReducerContext, restoDelPagoContext } from "@/context//Contextos";
import { CambioTotalMemoizado } from "@/hooks//useCalcularCambioTotal";
import { RestanteTotalMemoizando, useRestanteTotal } from "@/hooks//useRestanteTotal";
import { lazy, useContext } from "react";
import { Button, Col, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import buscarCodigoDeMensajes from "@/helper//buscarCodigoDeMensajes";
import TotalAVender from "@/components//TotalAVenderMemoizado";
const TicketDeVenta = lazy(() => import("@/components/TicketDeVenta"))

const BotonValidar = () => {

    const restante = useRestanteTotal()

    const navigate = useNavigate()

    const { listaProducto, borrarListado } = useContext(productoReducerContext)

    const { restablecerPagos } = useContext(restoDelPagoContext)

    const validacion = restante == 0 && listaProducto.length > 0

    const onClick = () => {
        try {
            if (!validacion) throw new ErrorEvent("2F")

            print()

            borrarListado()

            restablecerPagos()

            navigate("/pos/venta")

            buscarCodigoDeMensajes({ codigo: "3F" })

        } catch (error) {

            buscarCodigoDeMensajes({ codigo: `${error.type}` })

        }

    }

    const className = validacion ? "primary" : "secondary"

    return (
        <>

            <Button
                onClick={onClick}
                style={{ minWidth: "140px" }}
                className={`zoom bg-${className} border-0 shadow text-white fs-4`}>
                Validar
                <i className="fa-solid border-0 fa-angles-right"></i>

            </Button>

            {
                validacion && <TicketDeVenta />
            }

        </>
    )
};


export const ContenedorNavVentaPagos = () => {
    return (
        <>
            <Col
                className="p-0 d-flex  align-items-center ">
                <Link to={"/pos/venta"}>
                    <Button
                        variant="secondary"
                        style={{ minWidth: "130px" }}
                        className=" zoom shadow text-white bg-secondary fs-4">
                        <i className="fa-solid m-0 fa-angles-left"></i>
                        Volver
                    </Button>
                </Link>
            </Col>

            <Col
                xs={{ order: 1 }}
                sm={{ order: 0 }}
                style={{ color: "#555" }}
                className="mt-3 mt-sm-0 p-0 ">
                <Stack
                    gap={2}
                    direction="horizontal"
                    className="justify-content-between align-items-center p-1 ">
                    <div className="text-truncate text-center ">
                        <p className="m-0  fw-semibold text-nowrap">
                            AdeudoTotal
                        </p>
                        <p className="m-0 textext-truncate">
                            $/ <TotalAVender />
                        </p>
                    </div>


                    <div className="text-truncate text-center  ">
                        <p className="m-0 fw-semibold text-nowrap ">
                            Restante
                        </p>
                        <p className="m-0 text-truncate">
                            $/ {<RestanteTotalMemoizando />}
                        </p>
                    </div>

                    <div className="text-truncate text-center">
                        <p className="m-0 fw-semibold text-nowrap">
                            Cambio
                        </p>
                        <p className="m-0  text-truncate">
                            $/  <CambioTotalMemoizado />
                        </p>
                    </div>
                </Stack>
            </Col>

            <Col className="d-flex  align-items-center justify-content-end  p-0">
                <BotonValidar />
            </Col>
        </>
    );
};