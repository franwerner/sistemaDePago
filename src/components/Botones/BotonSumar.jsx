import React from "react"
import { Button } from "react-bootstrap"

const BotonSumar = React.memo(({sumarCantidad}) => {

    return <Button
        onClick={()=> sumarCantidad(+1)}
        variant="none"
        className="p-0 d-flex zoom bg-primary border-0 align-items-center">
        <i className="fa-solid  rounded-2 text-white p-1 fa-plus"></i>
    </Button>

})

export default BotonSumar