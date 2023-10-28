import { CambioTotalMemoizado } from "@/hooks//useCalcularCambioTotal"
import { CalcularDescuentoMemoizado } from "@/hooks//useCalcularDescuento"
import { SumarProductosMemoizado } from "@/hooks//useSumaTotalDeProductos"
import { Stack } from "react-bootstrap"

export const DetellaDeTicket = () => {

    return (
        <Stack
            gap={0}
            className="">
            <div className="d-flex justify-content-between">
                <p className="m-0">
                    Base :
                </p>
                <p className="m-0">
                    $ <SumarProductosMemoizado />
                </p>
            </div>


            <div className="d-flex justify-content-between">
                <p className="m-0">
                    Descuento :
                </p>
                <p className="m-0">
                    $ {<CalcularDescuentoMemoizado />}
                </p>
            </div>

            <div className="d-flex justify-content-between">
                <p className="m-0">
                    Cambio :
                </p>
                <p className="m-0">
                    $  <CambioTotalMemoizado />
                </p>
            </div>
        </Stack>
    )

}