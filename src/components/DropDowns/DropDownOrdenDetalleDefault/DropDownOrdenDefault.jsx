import { Dropdown } from "react-bootstrap";
import { memo, useContext, useEffect } from "react";
import { QueryParamsContext } from "../../../context/Contextos";
import { useOrdenamiento } from "./useOrdenamiento";


const ordenList = {
    "<": { tipo: "down", color: "danger" },
    ">": { tipo: "up", color: "success" }
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


//la propiedad nombre : [a,b] -> A representa el nombre visual y B representa el nombre de la propiedad.
//Este enfoque sirve darle un nombre diferente en caso de que el objecto que contiene las propiedades no sea igual al nombre visual.

const DropDownOrdenDefault = memo(({ dropwDownList = [] }) => {

    const { establecerQueryParams } = useContext(QueryParamsContext)

    const { establecerOrden, orden, removerOrden } = useOrdenamiento()

    useEffect(() => {

        establecerQueryParams({ tipo: "orden", nuevo: orden })

    }, [JSON.stringify(orden)])

    return (
        <DropwDownParent>
            {
                dropwDownList.map(item => {

                    const nombreVisual = item.nombre[0]

                    const nombreTecnico = !item.nombre[1] ? nombreVisual : item.nombre[1]

                    return (
                        <DropwDownItems
                            key={item.nombre}
                            establecerOrden={establecerOrden}
                            orden={orden[nombreTecnico.toLowerCase()]}
                            nombre={item.nombre[0]}
                            nombreTecnico={nombreTecnico.toLowerCase()}
                            removerOrden={removerOrden}
                            prioridad={item.prioridad}
                        />
                    )
                })
            }
        </DropwDownParent>
    );
})


export default DropDownOrdenDefault