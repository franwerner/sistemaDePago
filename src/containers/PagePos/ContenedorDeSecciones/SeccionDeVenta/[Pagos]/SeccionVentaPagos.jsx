import SeccionVentaPagosBody from "./SeccionVentaPagosBody";
import { SeccionVentaPagosNav } from "./SeccionVentaPagosNav";
import { SeccionBodyDefault } from "@/components//SeccionBodyDefault";
import { SeccionNavDefault } from "@/components//SeccionNavDefault";


const SeccionVentaPagos = () => {

    return (
        <>
            <SeccionNavDefault>
                <SeccionVentaPagosNav />
            </SeccionNavDefault>


            <SeccionBodyDefault>
                <SeccionVentaPagosBody />
            </SeccionBodyDefault>
        </>
    );
};

export default SeccionVentaPagos
