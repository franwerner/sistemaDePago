import { useContext } from "react"
import { Button } from "react-bootstrap"
import { productoReducerContext } from "../context/Contextos"

export const BotonTrashItems = () => {
    const { listaProducto, borrarListado } = useContext(productoReducerContext)

    return <Button
        variant="secondary"
        className="d-flex text-white  fw-semibold justify-content-between  rounded-3   p-2  align-items-center ">
        <p className="m-0 mx-2 text-truncate">
            {listaProducto.length} ítems en el carrito
        </p>
        <i
            style={{ cursor: "no-drop" }}
            onMouseUp={borrarListado}
            className="fa-regular zoom mx-2 fs-4 fa-trash-can"></i>
    </Button>
}
