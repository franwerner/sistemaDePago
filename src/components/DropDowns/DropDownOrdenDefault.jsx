import { Dropdown } from "react-bootstrap";
import { memo, useContext } from "react";
import { QueryParamsContext } from "../../context/Contextos";


const ordenList = {
    "<": "down",
    ">": "up"
}

const DropwDownItems = ({ nombre, establecerQueryParams, prioridad, borrarParametro, obtenerOrden }) => {

    const nombreVisual = nombre[0]

    const nombreTecnico = !nombre[1] ? nombreVisual : nombre[1]

    const orden = obtenerOrden(nombreTecnico)

    const buscarPropiedad = orden ? orden : ""

    const color = orden == "<" ? "danger" : "success"

    const onRemove = () => {
        borrarParametro(nombreTecnico)
    }

    const prioridadList = ordenList[buscarPropiedad]

    return (
        <div className="d-flex bg-hoverdark cursor-pointer w-100  position-relative  align-items-center">



            <Dropdown.Item
                onClick={establecerQueryParams}
                data-name={nombreTecnico}
                data-prioridad={prioridad}
                className="fw-medium bg-white position-relative d-flex align-items-center p-3 py-2  " >
                {nombreVisual}
                <i  style={{left : "0%"}} className={`fa-solid fs-7  position-absolute p-1 fa-arrow-${prioridadList} text-${color}`} />
            </Dropdown.Item>

            {
                prioridadList &&
                <i
                    style={{ right: "2%" }}
                    onClick={onRemove}
                    className="fa-solid fs-5 position-absolute cursor-block text-endp-1 bg-white text-ligthdark fa-xmark" />
            }
        </div>
    )
}

const DropwDownParent = memo(({ children }) => {
    return (
        <Dropdown className="position-relative" autoClose="outside" >
            <Dropdown.Toggle
                variant="outline-ligthdark"
                className=" d-flex py-2 align-items-center"
                id="dropdown-orden">
                <i className="fa-solid mx-1 fw-bolder fa-chart-bar"></i>
                <p className="m-0 fw-medium">Ordenar por</p>
            </Dropdown.Toggle>

            <Dropdown.Menu >
                {children}
            </Dropdown.Menu>
        </Dropdown>
    )
})


//la propiedad : [a,b] -> A representa el nombre visual y B representa el nombre del contexto.
//Este enfoque sirve para darle nombres diferentes en casos de que las propiedades no obtengan el mismo nombre.
const DropDownOrdenDefault = ({ dropwDownList = [] }) => {

    const { establecerQueryParams, obtenerOrden, borrarParametro } = useContext(QueryParamsContext)

    return (
        <DropwDownParent>
            {
                dropwDownList.map(item =>
                    <DropwDownItems
                        establecerQueryParams={establecerQueryParams}
                        key={item.nombre}
                        nombre={item.nombre}
                        prioridad={item.prioridad}
                        borrarParametro={borrarParametro}
                        obtenerOrden={obtenerOrden}
                    />
                )
            }
        </DropwDownParent>
    );
};


export default DropDownOrdenDefault