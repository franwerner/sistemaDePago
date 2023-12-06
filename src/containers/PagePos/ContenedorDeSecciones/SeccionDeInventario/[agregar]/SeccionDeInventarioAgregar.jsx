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

            <SeccionBodyDefault clasesAdd="p-md-5 p-2">
                <SeccionDeInventarioAgregarBody />
            </SeccionBodyDefault>
        </>
    );
};

export default SeccionDeInventarioAgregar