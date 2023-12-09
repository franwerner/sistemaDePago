import SeccionDeProductoBody from "./SeccionDeProductoBody";
import SeccionDeProductosNav from "./SeccionDeProductosNav";
import { SeccionNavDefault } from "@/components//SeccionNavDefault";
import { SeccionBodyDefault } from "@/components//SeccionBodyDefault";
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider";

const SeccionDeProductos = () => {
    return (
        <QueryParamsProvider>
            <SeccionNavDefault >
                <SeccionDeProductosNav />
            </SeccionNavDefault >

            <SeccionBodyDefault>
                <SeccionDeProductoBody />
            </SeccionBodyDefault>
        </QueryParamsProvider>
    );
};


export default SeccionDeProductos
