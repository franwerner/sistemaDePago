import { SeccionDeCajaNav } from "./SeccionDeCajaNav"
import { SeccionDeCajaContenedor } from "./SeccionDeCajaContedor/SeccionDeCajaContenedor"
import { SeccionBodyDefault } from "@/components//SeccionBodyDefault"
import { SeccionNavDefault } from "@/components//SeccionNavDefault"


const SeccionDeCaja = () => {


    return (
        <>
            <SeccionNavDefault>
                <SeccionDeCajaNav />
            </SeccionNavDefault>

            <SeccionBodyDefault clasesAdd={"p-md-3 p-xl-2 p-xxl-4 "}>
                <SeccionDeCajaContenedor />
            </SeccionBodyDefault>

        </>
    )
}

export default SeccionDeCaja