import { useState } from "react";

export const useAlternarComas = () => {

    const [comma, setComma] = useState(false)

    const alternarComas = (button) => {

        button == "," ? setComma(!comma) : comma

    }

    return {
        alternarComas,
        comma
    }

};