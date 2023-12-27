import { memo } from "react";
import { BotonSeccionNav } from "./BotonSeccionNav";

export const BotonSeccionNavText = memo((props) => {
  

    return (
        <BotonSeccionNav {...props} >
            {props.children}
            {
                props.text && <span className={`d-none d-${props.size || "sm"}-inline  fw-medium`}>{props.text}</span>
            }

        </BotonSeccionNav>
    )
})