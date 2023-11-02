import { useState } from "react";
import { Button } from "react-bootstrap";

const BotonRotacion = ({ alternarMostrar }) => {

    const [rotate, setRotate] = useState(false)

    const onClick = () => {
        alternarMostrar()
        setRotate(!rotate)
    }

    const rotacion = rotate ? "180" : "0"

    return (
        <Button
            style={{ color: "#555"}}
            className="border-2 p-2 d-flex align-items-center rounded-3 border-secondary"
            variant="none"
            onClick={onClick}>
            <i
                style={{ rotate: `${rotacion}deg` }}
                className="fa-solid fs-5 fa-repeat"></i>
        </Button>
    )

};


export default BotonRotacion