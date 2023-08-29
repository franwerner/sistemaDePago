import { useRef, useState } from "react"

export const useEstablecerRef = () => {

    const [elementosDeRefencia, setElementosDeReferencia] = useState(null)

    const contenedorHijo = useRef(0)

    const contenedorPadre = useRef(0)

    const establecerElementosDeReferencia = () => {
        setElementosDeReferencia({contenedorHijo,contenedorPadre})
    }


    return {
        establecerElementosDeReferencia,
        elementosDeRefencia,
        "referencias": { contenedorHijo, contenedorPadre }
    }
}
//NO SE USA PARA NADA ESTO TODAVIA