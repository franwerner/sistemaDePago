
import { Stack } from "react-bootstrap"
import { TotalListaProductoMemoizado } from "../Utils/useTotalListaProducto"
import { TotalMetodoDePagoMemoizado } from "../Utils/useTotalMetodoDePago"

export const DetellaDeTicket = () => {

    return (
        <Stack
            gap={2}
            direction="horizontal"
            className="justify-content-between p-1 px-3">
            <div className="text-truncate text-center ">
                <p className="m-0  fw-semibold text-nowrap">
                    Base
                </p>
                <p className="m-0 text-truncate">
                    $/ <TotalListaProductoMemoizado obj={"total"} />
                </p>
            </div>


            <div className="text-truncate text-center  ">
                <p className="m-0 fw-semibold text-nowrap ">
                    Descuento
                </p>
                <p className="m-0 text-truncate">
                $/ <TotalListaProductoMemoizado obj={"descuento"} />
                </p>
            </div>

            <div className="text-truncate text-center">
                <p className="m-0 fw-semibold text-nowrap">
                    Cambio
                </p>
                <p className="m-0  text-truncate">
                $/ <TotalMetodoDePagoMemoizado obj={"cambio"} />
                </p>
            </div>
        </Stack>
    )

}

//SOLO SE USA ACA SUMAPRODUCTOS,DESCUENTO