import { Paginacion } from "@/components//Paginacion";
import { Suspense } from "react";
import { Await, useLoaderData, useLocation, useNavigate, useNavigation, useParams } from "react-router-dom";


const SeccionDeProductosAgregar = () => {

  const a = useLoaderData()

  const { state } = useNavigation()


  const params = useParams()

  return (
    <>
      <Paginacion largo={15} parametro={params.id} url={"pos/productos/agregar"}></Paginacion>
      <Suspense fallback={<p>cargando...</p>}>
        <Await resolve={a} children ={a.id}>

        </Await>
      </Suspense>
    </>
  );
};

export default SeccionDeProductosAgregar