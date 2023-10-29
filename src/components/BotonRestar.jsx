import React from "react"
import { Button } from "react-bootstrap"

const BotonRestar = React.memo(({ restarCantidad }) => {

    return (
        <Button
            onClick={() => restarCantidad(-1)}
            variant="none"
            className=" p-0 border-0 zoom d-flex align-items-center">
            <i className="fa-solid fa-minus  rounded-2 text-white p-1 "></i>
        </Button>
    )

})

export default BotonRestar