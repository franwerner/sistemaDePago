import { useState } from "react";
import { BotonSeccionNav } from "./BotonSeccionNav";

const BotonRotacion = ({ alternarMostrar }) => {

    const [rotate, setRotate] = useState(false)

    const onClick = () => {
        alternarMostrar()
        setRotate(!rotate)
    }

    const rotacion = rotate ? "180" : "0"

    return (
        <BotonSeccionNav onClick={onClick} >
            <i
                style={{ rotate: `${rotacion}deg` }}
                className="fa-solid fs-5 fa-repeat"></i>
        </BotonSeccionNav>
    )

};


export default BotonRotacion