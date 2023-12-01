import { Button, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import BotonValidar from "./BotonValidar";
import { TotalMetodoDePagoMemoizado } from "../Utils/useTotalMetodoDePago";
import { TotalListaProductoMemoizado } from "../Utils/useTotalListaProducto";



export const SeccionVentaPagosNav = () => {
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
                className="mt-3 text-ligthdark mt-sm-0 p-0 ">
                <Stack
                    gap={2}
                    direction="horizontal"
                    className="justify-content-between align-items-center p-1 ">
                    <div className="text-truncate text-center ">
                        <p className="m-0  fw-semibold text-nowrap">
                            Adeudo Total
                        </p>
                        <p className="m-0 textext-truncate">
                            $/ <TotalListaProductoMemoizado obj={"adeudoTotal"} />
                        </p>
                    </div>


                    <div className="text-truncate text-center  ">
                        <p className="m-0 fw-semibold text-nowrap ">
                            Restante
                        </p>
                        <p className="m-0 text-truncate">
                            $/ <TotalMetodoDePagoMemoizado obj={"restante"} />
                        </p>
                    </div>

                    <div className="text-truncate text-center">
                        <p className="m-0 fw-semibold text-nowrap">
                            Cambio
                        </p>
                        <p className="m-0  text-truncate">
                            <TotalMetodoDePagoMemoizado obj={"cambio"} />
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