import { SeccionBodyDefault } from "@/components//SeccionBodyDefault";
import { SeccionNavDefault } from "@/components//SeccionNavDefault";
import { QueryParamsProvider } from "@/context//provider/QueryParamsProvider";
import { SeccionDeInventarioGestionNav } from "./SeccionDeInventarioGestionNav";
import { SeccionDeInventarioGestionBody } from "./SeccionDeInventarioGestionBody";


const SeccionDeInventarioGestion = () => {


  return (
    <QueryParamsProvider>

      <SeccionNavDefault classAdd="p-2">
        <SeccionDeInventarioGestionNav />
      </SeccionNavDefault>

      <SeccionBodyDefault clasesAdd="p-1 p-md-3 p-xl-5">
        <SeccionDeInventarioGestionBody />
      </SeccionBodyDefault>

    </QueryParamsProvider>
  );
};

export default SeccionDeInventarioGestion