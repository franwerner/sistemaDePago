import { Dropdown } from "react-bootstrap";
import styles from "@/styles/DropDownDefault.module.css"
import { memo, useContext } from "react";
import { QueryParamsContext } from "../context/Contextos";


const ordenList = {
    "<": "↓",
    ">": "↑"
}


const DropwDownParent = memo(({ children }) => {
    return (
        <Dropdown className={`${styles.dropDownOrdenDefault} bg-hover `} autoClose="outside" >
            <Dropdown.Toggle
                variant=""
                className="border"
                id="dropdown-orden">
                <i className="fa-solid mx-1 fa-chart-bar"></i>
                Ordenar por
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {children}
            </Dropdown.Menu>
        </Dropdown>
    )
})

const DropwDownItems = ({ nombre, onClick, prioridad, orden }) => {

    const buscarParametro = orden ? orden : ""

    return (
        <Dropdown.Item
            className="fw-medium"
            data-name={nombre}
            data-prioridad={prioridad}
            onClick={onClick}>
            {nombre}{ordenList[buscarParametro]}
        </Dropdown.Item>
    )
}


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