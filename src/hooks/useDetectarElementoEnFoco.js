import { useEffect, useState } from "react"


export const useDetectarElementoEnFocos = () =>{

    
    const [elemntoFocus, setFocus] = useState(document.activeElement)


    useEffect(() => {

        const handleFocus = (e) => {
            setFocus(e.target)
        }
       

        document.addEventListener("focusin", handleFocus)
        return () => {
            document.removeEventListener("focusin", handleFocus)
        }


    }, [elemntoFocus])

    return {
        elemntoFocus
    }

}
