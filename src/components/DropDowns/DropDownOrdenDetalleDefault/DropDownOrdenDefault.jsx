import { Dropdown } from "react-bootstrap";
import { memo, useContext, useEffect } from "react";
import { QueryParamsContext } from "../../../context/Contextos";
import { useOrdenamiento } from "./useOrdenamiento";


const ordenList = {
    ">": { tipo: "down", color: "danger" },
    "<": { tipo: "up", color: "success" }
}

const DropwDownItems = memo(({ nombre, nombreTecnico, prioridad, orden, establecerOrden, removerOrden }) => {

    const buscarPropiedad = orden || {}

    const { tipo, color } = ordenList[buscarPropiedad.estado] || {}

    const onClick = () => {
        establecerOrden(nombreTecnico, prioridad)
    }

    const onClick2 = () => {
        removerOrden(nombreTecnico)
    }

    return (
        <div className="d-flex bg-hoverdark cursor-pointer w-100  position-relative  align-items-center">

            <Dropdown.Item
                onClick={onClick}
                className="fw-medium bg-white position-relative d-flex align-items-center p-3 py-2  " >
                {nombre}

                <i style={{ left: "0%" }}
                    className={`fa-solid fs-7  position-absolute p-1 fa-arrow-${tipo} text-${color}`} />
            </Dropdown.Item>

            {
                orden &&
                <i
                    style={{ right: "2%" }}
                    onClick={onClick2}
                    className="fa-solid fs-5 position-absolute cursor-block text-endp-1 bg-white text-ligthdark fa-xmark" />
            }
        </div>
    )
})

const Menu = ({ dropwDownList }) => {

    const { establecerQueryParams } = useContext(QueryParamsContext)

    const { establecerOrden, orden, removerOrden } = useOrdenamiento()

    useEffect(() => {

        establecerQueryParams({ tipo: "orden", nuevo: orden })

    }, [JSON.stringify(orden)])

    return (
        <Dropdown.Menu>
            {
                dropwDownList.map(({ nombre, propiedad, prioridad }, index) => {

                    const nombreTecnico = propiedad ? propiedad : nombre

                    return (
                        <DropwDownItems
                            key={index}
                            establecerOrden={establecerOrden}
                            orden={orden[nombreTecnico.toLowerCase()]}
                            nombre={nombre}
                            nombreTecnico={nombreTecnico.toLowerCase()}
                            removerOrden={removerOrden}
                            prioridad={prioridad}
                        />
                    )
                })
            }
        </Dropdown.Menu>
    )
}


//DropDownList : 
//Nombre : Esta la representacion visual.
//Propiedad : Es la propiedad que se evaluara para el algoritmo/db
//Prioridad : Sirve para ordenar en base a cual es el mas importante
const DropDownOrdenDefault = memo(({ dropwDownList = [] }) => {



    return (
        <Dropdown className="position-relative" autoClose="outside" >
            <Dropdown.Toggle
                variant="outline-ligthdark"
                className=" d-flex py-2 align-items-center"
                id="dropdown-orden">
                <i className="fa-solid mx-1 fw-bolder fa-chart-bar"></i>
                <p className="m-0 fw-medium">Ordenar por</p>
            </Dropdown.Toggle>

            <Menu dropwDownList={dropwDownList} />
        </Dropdown>
    )
})


export default DropDownOrdenDefault