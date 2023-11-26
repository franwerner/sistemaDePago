import { Dropdown } from "react-bootstrap";
import { memo, useContext } from "react";
import { QueryParamsContext } from "../context/Contextos";


const ordenList = {
    "<": "↓",
    ">": "↑"
}

const DropwDownItems = ({ nombre, onClick, prioridad, orden }) => {

    const buscarPropiedad = orden ? orden : ""

    const color = orden == "<" ? "danger" : "success"

    return (
        <Dropdown.Item
            className="fw-medium bg-white"
            data-name={nombre}
            data-prioridad={prioridad}
            onClick={onClick}>
            {nombre}
            <span
                data-name={nombre}
                data-prioridad={prioridad}
                className={`text-${color} fs-5`}>{ordenList[buscarPropiedad]}</span>
        </Dropdown.Item>
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