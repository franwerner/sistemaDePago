import { SeccionBodyDefault } from "@/components//SeccionBodyDefault";
import { SeccionNavDefault } from "@/components//SeccionNavDefault";
import { SeccionDeInventarioAgregarBody } from "./SeccionDeInventarioAgregarBody";
import { SeccionDeInventarioAgregarNav } from "./SeccionDeInventarioAgregarNav";

const SeccionDeInventarioAgregar = () => {

    return (
        <>
            <SeccionNavDefault>
                <SeccionDeInventarioAgregarNav />
            </SeccionNavDefault>

            <SeccionBodyDefault clasesAdd="p-5">
                <SeccionDeInventarioAgregarBody />
            </SeccionBodyDefault>
        </>
    );
};

export default SeccionDeInventarioAgregar