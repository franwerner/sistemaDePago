import { useState } from "react"


export const useBuscador = () =>{

    const [buscador,setBuscador] = useState("")

    return buscador
}