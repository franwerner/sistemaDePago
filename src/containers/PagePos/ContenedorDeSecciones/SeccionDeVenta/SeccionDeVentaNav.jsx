import BotonRotacion from "@/components//Botones/BotonRotacion"
import BuscadorInput from "@/components//BuscadorInput"
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDetalleDefault/DropDownOrdenDefault"
import { memo } from "react"
import { Col } from "react-bootstrap"


const dropDownList = [
    { nombre: "Nombre", prioridad: 7 },
    { nombre: "Metodo", prioridad: 6 },
    { nombre: "Precio", propiedad: "precioModificado", prioridad: 3 },
    { nombre: "Lote", prioridad: 2 },
]

const SeccionDeVentaNav = memo(({ alternarMostrar }) => {

    return (
        <>
            <Col
                xs="auto"
                className="d-flex d-md-none position-relative align-items-center">
                <BotonRotacion alternarMostrar={alternarMostrar} />
            </Col>

            <Col xs="8" md="auto" className="d-flex justify-content-end   align-items-center">
                <DropDownOrdenDefault dropwDownList={dropDownList} />
            </Col>

            <Col xs="11" md="8" className="d-flex mx-3  d-flex justify-content-center align-items-center">
                <BuscadorInput texto={"productos"} />
            </Col>
        </>
    )
})

export default SeccionDeVentaNav