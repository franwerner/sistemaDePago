import { useState } from "react"


export const useEdicionProducto = () => {
    const [mostrar, setMostrar] = useState(false)

 
    const EditarMostrar = (booleano) =>{

        setMostrar(booleano)
    }

    return {mostrar,EditarMostrar}

}