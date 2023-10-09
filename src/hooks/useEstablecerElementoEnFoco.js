import { useState } from "react";

export const useEstablecerElementoEnFoco = () => {

    const [focus, setFocus] = useState()

    const establecerFoco = ({ target }) => {
        setFocus(target.name)
    }

    const limpiarFoco = () => {
        setFocus()
    }


    return {
        focus,
        establecerFoco,
        limpiarFoco
    }

};