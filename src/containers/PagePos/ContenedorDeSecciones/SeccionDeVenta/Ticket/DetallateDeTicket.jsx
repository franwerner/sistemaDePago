import { CambioTotalMemoizado } from "@/hooks//useCalcularCambioTotal"
import { CalcularDescuentoMemoizado } from "@/hooks//useCalcularDescuento"
import { SumarProductosMemoizado } from "@/hooks//useSumaTotalDeProductos"
import { Stack } from "react-bootstrap"

export const DetellaDeTicket = () => {

    return (
        <Stack
            gap={2}
            direction="horizontal"
            className="justify-content-between p-1 px-3">
            <div className="text-truncate text-center ">
                <p  className="m-0  fw-semibold text-nowrap">
                    Base
                </p>
                <p className="m-0 text-truncate">
                    $/ <SumarProductosMemoizado />
                </p>
            </div>


            <div className="text-truncate text-center  ">
                <p className="m-0 fw-semibold text-nowrap ">
                    Descuento
                </p>
                <p className="m-0 text-truncate">
                    $/ {<CalcularDescuentoMemoizado />}
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
    )

}