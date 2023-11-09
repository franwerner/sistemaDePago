import { useRef } from "react";

export const useFocusMouseElements = () => {

    const refFocusElement = useRef(null)

    const onMouseEnter = () => {
        refFocusElement.current.focus()
    }

    const onMouseLeave = () => {
        refFocusElement.current.blur()
    }

    const onClick = (e) => {
        console.log(e)
        refFocusElement.current.focus()
    }

    return {
        refFocusElement,
        onMouseEnter,
        onMouseLeave,
        onClick
    }
};



