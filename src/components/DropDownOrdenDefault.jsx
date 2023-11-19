import { Dropdown } from "react-bootstrap";
import { memo, useContext } from "react";
import { QueryParamsContext } from "../context/Contextos";


const ordenList = {
    "<": "↓",
    ">": "↑"
}

const DropwDownItems = ({ nombre, onClick, prioridad, orden }) => {

    const buscarPropiedad = orden ? orden : ""

    return (
        <Dropdown.Item
            className="fw-medium"
            data-name={nombre}
            data-prioridad={prioridad}
            onClick={onClick}>
            {nombre}{ordenList[buscarPropiedad]}
        </Dropdown.Item>
    )
}

const DropwDownParent = memo(({ children }) => {
    return (
        <Dropdown  className="position-relative" autoClose="outside" >
            <Dropdown.Toggle
                variant=""
                className="border"
                id="dropdown-orden">
                <i className="fa-solid mx-1 fa-chart-bar"></i>
                Ordenar por
            </Dropdown.Toggle>

            <Dropdown.Menu >
                {children}
            </Dropdown.Menu>
        </Dropdown>
    )
})



const DropDownOrdenDefault = ({ dropwDownList = [] }) => {

    const { establecerQueryParams, obtenerOrden } = useContext(QueryParamsContext)

    return (
        <DropwDownParent>
            {
                dropwDownList.map(item =>
                    <DropwDownItems
                        onClick={establecerQueryParams}
                        key={item.nombre}
                        nombre={item.nombre}
                        prioridad={item.prioridad}
                        orden={obtenerOrden(item.nombre.toLowerCase())} />
                )
            }
        </DropwDownParent>
    );
};


export default DropDownOrdenDefault