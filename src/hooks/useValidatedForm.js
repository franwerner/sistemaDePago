import { useState } from "react";

export const useValidatedForm = () => {

    const [validado, setValidado] = useState(false)

    const onValidated = (event) => {
        const form = event.currentTarget;

        event.preventDefault()
  
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidado(true);
        return event
    }

    return {
        onValidated,
        validado
    }
};