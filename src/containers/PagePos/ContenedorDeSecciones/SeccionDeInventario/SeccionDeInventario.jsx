import { SeccionDeInventarioBody } from "./SeccionDeInventarioBody";
import { SeccionDeInventarioNav } from "./SeccionDeInventarioNav";
import { SeccionNavDefault } from "@/components//SeccionNavDefault";
import { SeccionBodyDefault } from "@/components//SeccionBodyDefault";
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider";

const SeccionDeInventario = () => {
    return (
        <QueryParamsProvider>
            <SeccionNavDefault>
                <SeccionDeInventarioNav />
            </SeccionNavDefault>

            <SeccionBodyDefault>
                <SeccionDeInventarioBody />
            </SeccionBodyDefault>
        </QueryParamsProvider>
    );
};


export default SeccionDeInventario