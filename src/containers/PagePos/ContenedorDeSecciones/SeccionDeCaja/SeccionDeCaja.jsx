import { SeccionDeCajaNav } from "./SeccionDeCajaNav"
import { SeccionBodyDefault } from "@/components//SeccionBodyDefault"
import { SeccionNavDefault } from "@/components//SeccionNavDefault"
import { SeccionDeCajaBody } from "./SeccionDeCajaBody"


const SeccionDeCaja = () => {


    return (
        <>
            <SeccionNavDefault classAdd="p-2">
                <SeccionDeCajaNav />
            </SeccionNavDefault>

            <SeccionBodyDefault clasesAdd={"p-md-3 p-xl-2 p-xxl-4 "}>
                <SeccionDeCajaBody/>
            </SeccionBodyDefault>

        </>
    )
}

export default SeccionDeCaja