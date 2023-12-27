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
            className="fw-medium  bg-white text-ligthdark bg-hoverdark pe-5  d-flex align-items-center  py-2  ">
            <div className="position-relative d-flex align-items-center">
                <p className="m-0 ">{nombre}</p>

                {
                    filtroActual && <i style={{ right: "-30px" }} className="fa-solid z-1 fa-check text-primary position-absolute text-end  mx-2 fs-6"></i>
                }

            </div>

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
            <Dropdown.ItemText className="text-center text-uppercase  text-ligthdark fw-semibold ls-3">
                Filtros
            </Dropdown.ItemText>
            <Dropdown.Divider className="p-0 m-0" />
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



const DropDownFilterDefault = ({ dropwDownList = [], size = "sm" }) => {
    return (
        <Dropdown
            className="position-relative "
            autoClose="outside" >
            <Dropdown.Toggle
                variant="outline-ligthdark"
                id="dropdown-filter" >
                <i className="fa-solid cursor-pointer zoom fs-4 fa-filter"></i>
                <span className={`m-0 fw-medium d-none d-${size}-inline`}>Filtrar por</span>
            </Dropdown.Toggle>

            <Menu
                dropwDownList={dropwDownList}
            />

        </Dropdown>
    )

}

export default DropDownFilterDefault

