import { SeccionDeInventarioBody } from "./SeccionDeInventarioBody";
import { SeccionDeInventarioNav } from "./SeccionDeInventarioNav";
import { SeccionNavDefault } from "@/components//SeccionNavDefault";
import { SeccionBodyDefault } from "@/components//SeccionBodyDefault";

const SeccionDeInventario = () => {
    return (
        <>
            <SeccionNavDefault>
                <SeccionDeInventarioNav />
            </SeccionNavDefault>

            <SeccionBodyDefault>
                <SeccionDeInventarioBody />
            </SeccionBodyDefault>
        </>
    );
};


export default SeccionDeInventario