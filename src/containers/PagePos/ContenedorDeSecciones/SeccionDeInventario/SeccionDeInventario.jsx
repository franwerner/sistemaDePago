import { SeccionDeInventarioBody } from "./SeccionDeInventarioBody";
import { SeccionDeInventarioNav } from "./SeccionDeInventarioNav";
import { SeccionNavDefault } from "@/components//SeccionNavDefault";
import { SeccionBodyDefault } from "@/components//SeccionBodyDefault";
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider";
import { useEffect, useRef } from "react";

const SeccionDeInventario = () => {

    const ref = useRef(null)

    useEffect(() => {
        ref.current.addEventListener("scroll", (e) => {
            const { scrollTop, scrollHeight, clientHeight } = ref.current;

            const maxScrollTop = scrollHeight - clientHeight;

            if (scrollTop == maxScrollTop) console.log("Si")
        })
    }, [])

    return (
        <QueryParamsProvider>
            <SeccionNavDefault>
                <SeccionDeInventarioNav />
            </SeccionNavDefault>

            <SeccionBodyDefault referido={ref}>
                <SeccionDeInventarioBody />
            </SeccionBodyDefault>

        </QueryParamsProvider>
    );
};


export default SeccionDeInventario