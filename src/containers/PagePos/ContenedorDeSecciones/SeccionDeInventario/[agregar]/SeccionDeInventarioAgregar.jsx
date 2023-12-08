import { SeccionBodyDefault } from "@/components//SeccionBodyDefault";
import { SeccionNavDefault } from "@/components//SeccionNavDefault";
import { SeccionDeInventarioAgregarBody } from "./SeccionDeInventarioAgregarBody";
import { SeccionDeInventarioAgregarNav } from "./SeccionDeInventarioAgregarNav";
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider";

const SeccionDeInventarioAgregar = () => {

    return (
        <QueryParamsProvider>
            <SeccionNavDefault>
                <SeccionDeInventarioAgregarNav />
            </SeccionNavDefault>

            <SeccionBodyDefault clasesAdd="p-md-4 p-xl-5 p-2">
                <SeccionDeInventarioAgregarBody />
            </SeccionBodyDefault>
        </QueryParamsProvider>
    );
};

export default SeccionDeInventarioAgregar