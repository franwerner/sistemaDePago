import { QueryParamsContext } from "@/context//Contextos"
import { useContext, useEffect } from "react"
import { Dropdown } from "react-bootstrap"
import { useFiltrado } from "./useFiltrado"

const DropwDownItems = ({
    nombre,
    establecerFiltros,
    filtroActual,
    condicional,
    propiedad
}) => {

    return (
        <Dropdown.Item
            onClick={() => establecerFiltros({ nombre, condicional, propiedad })}
            className="fw-medium  bg-hoverdark position-relative d-flex align-items-center  bg-white"
            data-name={nombre}>
            {nombre}
            {
                filtroActual && <i style={{ right: "26%" }} className="fa-solid fa-check text-primary position-absolute text-end  mx-2 fs-6"></i>
            }
        </Dropdown.Item>
    )
}

const Menu = ({ dropwDownList }) => {

    const { establecerQueryParams } = useContext(QueryParamsContext)

    const { establecerFiltros, filtros } = useFiltrado()

    useEffect(() => {

        establecerQueryParams({ tipo: "filtro", nuevo: filtros })

    }, [filtros])

    return (

        <Dropdown.Menu >

            {
                dropwDownList.map(({ nombre, condicional, propiedad }, index) =>
                    <DropwDownItems
                        key={index}
                        establecerFiltros={establecerFiltros}
                        filtroActual={filtros.nombre == nombre}
                        condicional={condicional}
                        propiedad={propiedad}
                        nombre={nombre} />
                )
            }

            <Dropdown.Divider />
            <Dropdown.Item
                onClick={() => establecerFiltros({})}
                className="text-danger bg-white fw-medium">
                <p className="m-0  zoom">
                    Remover filtros
                </p>
            </Dropdown.Item>
        </Dropdown.Menu>
    )
}

//Las propiedades de dropwDownList, representan:
//nombre : Es la representacion visual.
//propiedad : Es la propiedad que se tendra en cuenta para la db.
//condicional : Es la condicion que se evaluara para la db.



const DropDownFilterDefault = ({ dropwDownList = [] }) => {
    return (
        <Dropdown
            className="position-relative "
            autoClose="outside" >
            <Dropdown.Toggle
                variant="outline-ligthdark"
                id="dropdown-filter" >
                <i className="fa-solid cursor-pointer zoom fs-4 fa-filter"></i>
            </Dropdown.Toggle>

            <Menu
                dropwDownList={dropwDownList}
            />

        </Dropdown>
    )

}

export default DropDownFilterDefault

