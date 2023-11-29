import { Dropdown } from "react-bootstrap";
import { memo, useContext } from "react";
import { QueryParamsContext } from "../context/Contextos";


const ordenList = {
    "<": "down",
    ">": "up"
}

const DropwDownItems = ({ nombre, establecerQueryParams, prioridad, orden, borrarParametro }) => {

    const buscarPropiedad = orden ? orden : ""

    const color = orden == "<" ? "danger" : "success"

    const onRemove = () => {
        borrarParametro(nombre)
    }

    const prioridadList = ordenList[buscarPropiedad]
    return (
        <div className="d-flex bg-hoverdark cursor-pointer  w-100 align-items-center">
            <Dropdown.Item
                onClick={establecerQueryParams}
                data-name={nombre}
                data-prioridad={prioridad}
                className="fw-medium bg-white" >
                {nombre}
                <i className={`fa-solid fs-7 fa-arrow-${prioridadList} text-${color}`} />
            </Dropdown.Item>
            {
                prioridadList &&
                <i
                    style={{ right: "2%" }}
                    onClick={onRemove}
                    className="fa-solid fs-5 position-absolute  text-end text-ligthdark fa-xmark" />
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
                        orden={obtenerOrden(item.nombre.toLowerCase())} />
                )
            }
        </DropwDownParent>
    );
};


export default DropDownOrdenDefault