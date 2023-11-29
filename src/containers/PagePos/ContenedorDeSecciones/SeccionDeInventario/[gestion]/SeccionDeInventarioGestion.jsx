import React from "react";
import { Await, useLoaderData } from "react-router-dom";



const SeccionDeInventarioGestion = () => {

  const data  = useLoaderData();

  return (

      <Await
        resolve={data.promise}>
      <p>Resuelto</p>
      </Await>
      );
};

export default SeccionDeInventarioGestion