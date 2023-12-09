import { QueryParamsContext } from "@/context//Contextos"
import { useContext, useEffect } from "react"
import { Dropdown } from "react-bootstrap"
import { useFiltrado } from "./useFiltrado"

const DropwDownItems = ({ nombre, component }) => {


    return (
        <>
            {component ? (
                component
            ) : (
                <Dropdown.Item
                    className="fw-medium  bg-hoverdark  bg-white"
                    data-name={nombre}
                >
                    {nombre}<i className="fa-solid fa-check text-primary mx-2 fs-6"></i>
                </Dropdown.Item>
            )}
        </>
    )
}

const DropDownParent = ({ children }) => {
    return (
        <Dropdown
            className="position-relative "
            autoClose="outside" >
            <Dropdown.Toggle
                variant="outline-ligthdark"
                id="dropdown-filter" >
                <i className="fa-solid cursor-pointer zoom fs-4 fa-filter"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu >
                {children}
                <Dropdown.Divider />
                <Dropdown.Item className="text-danger bg-hoverdark bg-white fw-medium">
                    <p className="m-0  zoom">
                        Remover filtros
                    </p>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

//la propiedad nombre : [a,b] -> A representa el nombre visual y B representa el nombre de la propiedad.
//Este enfoque sirve darle un nombre diferente en caso de que el objecto que contiene las propiedades no sea igual al nombre visual.

const DropDownFilterDefault = ({ dropwDownList = [], componentes }) => {

    const { establecerQueryParams,queryParams } = useContext(QueryParamsContext)
    const { establecerFiltros, filtros } = useFiltrado()

    useEffect(() => {

        establecerQueryParams({ tipo: "filtro", nuevo: filtros })

    }, [JSON.stringify(filtros)])

    return (
        <DropDownParent>
            {
                dropwDownList.map(({ nombre, component }) =>
                    <DropwDownItems key={nombre} component={component} nombre={nombre} />
                )
            }
            {componentes}
        </DropDownParent>
    )

}

export default DropDownFilterDefault

