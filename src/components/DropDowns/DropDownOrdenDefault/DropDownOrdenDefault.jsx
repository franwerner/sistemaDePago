import { Dropdown } from "react-bootstrap";
import { memo, useContext, useEffect } from "react";
import { QueryParamsContext } from "@/context/Contextos";
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
        <div className="d-flex bg-hoverdark cursor-pointer w-100 justify-content-between  position-relative  align-items-center">

            <Dropdown.Item
                onClick={onClick}
                className="fw-medium bg-white position-relative text-ligthdark  pe-5 d-flex align-items-center p-3 py-2  " >
                <div className="position-relative">
                    <p className="m-0">{nombre}</p>
                    <span
                        style={{ fontSize: "14px", top: "-40%", right: "-12px" }}
                        className="position-absolute text-dark fw-medium border-bottom ">{prioridad}</span>
                </div>


                <i style={{ left: "0%" }}
                    className={`fa-solid fs-7  position-absolute p-1 fa-arrow-${tipo} text-${color}`} />
            </Dropdown.Item>

            {
                orden &&
                <i
                    style={{ right: "0%" }}
                    onClick={onClick2}
                    className="fa-solid fs-5 position-absolute cursor-block text-end p-1 bg-white text-ligthdark fa-xmark" />
            }
        </div>
    )
})

const Menu = ({ dropwDownList }) => {

    const { establecerQueryParams } = useContext(QueryParamsContext)

    const { establecerOrden, orden, removerOrden, reestablecerOrdenes } = useOrdenamiento()

    useEffect(() => {

        establecerQueryParams({ tipo: "orden", nuevo: orden })

    }, [JSON.stringify(orden)])

    return (
        <Dropdown.Menu >

            <Dropdown.ItemText className="text-center text-uppercase text-ligthdark fw-semibold ls-3">
                Orden
            </Dropdown.ItemText>

            <Dropdown.Divider className="m-0 pb-1" />

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
            <Dropdown.Divider />
            <Dropdown.Item
                onClick={reestablecerOrdenes}
                className="text-danger bg-white fw-medium">
                <p className="m-0 text-center zoom">
                    Remover orden
                </p>
            </Dropdown.Item>
        </Dropdown.Menu>
    )
}


//DropDownList : 
//Nombre : Esta la representacion visual.
//Propiedad : Es la propiedad que se evaluara para el algoritmo/db
//Prioridad : Sirve para ordenar en base a cual es el mas importante

const DropDownOrdenDefault = memo(({ dropwDownList = [] }) => {

    return (
        <Dropdown
            className="position-relative"
            autoClose="outside" >
            <Dropdown.Toggle
                variant="outline-ligthdark"
                className=" d-flex py-2 align-items-center"
                id="dropdown-orden">
                <i className="fa-solid mx-1 fs-5 fw-bolder fa-chart-bar"></i>
                <span className="m-0 fw-medium d-none d-sm-inline">Ordenar por</span>
            </Dropdown.Toggle>

            <Menu dropwDownList={dropwDownList.sort((a, b) => a.prioridad - b.prioridad)} />
        </Dropdown>
    )
})


export default DropDownOrdenDefault