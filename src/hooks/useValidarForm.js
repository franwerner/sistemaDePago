import { useState } from "react";

export const useValidarForm = () => {
    const [validado, setValidado] = useState(false)

    const onHandleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidado(true);
    }


    return {
        onHandleSubmit,
        validado
    }
};