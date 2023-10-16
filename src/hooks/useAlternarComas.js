import { useState } from "react";

export const useAlternarComas = () => {

    const [comma, setComma] = useState(false)

    const alternarComas = (button) => {

        if (button == "," || button == "Comma") {

            setComma(prev => !prev)
        }

    }

    return {
        alternarComas,
        comma
    }

};