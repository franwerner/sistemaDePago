import SeccionDeComprasNav from "./SeccionDeComprasNav";
import SeccionDeComprasBody from "./SeccionDeComprasBody";
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider";
import { SeccionNavDefault } from "@/components//SeccionNavDefault";
import { SeccionBodyDefault } from "@/components//SeccionBodyDefault";

const SeccionDeCompras = () => {
    return (
        <QueryParamsProvider>
            <SeccionNavDefault >
                <SeccionDeComprasNav />
            </SeccionNavDefault>

            <SeccionBodyDefault clasesAdd="p-1 p-md-3">
                <SeccionDeComprasBody />
            </SeccionBodyDefault>

        </QueryParamsProvider>
    );
};

export default SeccionDeCompras