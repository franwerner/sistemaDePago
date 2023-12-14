import BotonRotacion from "@/components//Botones/BotonRotacion"
import BuscadorInput from "@/components//BuscadorInput"
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault/DropDownOrdenDefault"
import { SeccionNavCol } from "@/components//SeccionNavCol"
import { memo, useCallback, useState } from "react"
import { Col, Collapse } from "react-bootstrap"
import { useSearchParams } from "react-router-dom"

const dropDownList = [
    { nombre: "Nombre", prioridad: 2 },
    { nombre: "Metodo", prioridad: 3 },
    { nombre: "Precio", propiedad: "precioModificado", prioridad: 1 },
]


const testList = ["Papas", "Galletitas", "Factura Con Leche de caballo", "Pene bien rico al whisky", "a", "b", "3", "5", "f", "g"]

const TestListado = ({ nombre, onSearch }) => {

    return (
        <div onClick={() => onSearch(nombre)} className="p-1  w-100 bg-white d-flex align-items-center cursor-pointer">
            <i style={{ background: "#F0F2F5", padding: "10px" }} className="fa-solid rounded-circle text-ligthdark fa-magnifying-glass"></i>
            <p className="m-0 text-ligthdark fw-medium bg-hoverdark w-100 border-2 p-2 ls-4">{nombre}</p>
        </div>
    )
}

const Test = () => { //Podria pasar un array con las propiedades que quiero tener en cuenta y mostrar, y otro el cual diga que propiedades tendra en cuenta el servidor.
    const [search, setSearch] = useSearchParams()

    const searching = search.get("search")
    const searchin2 = search.get("selectSearch")

    const onSearch = useCallback((seleccionado) => {
        setSearch(`?selectSearch=${seleccionado}`)
    }, [])

    const [mostrar, alternarMostrar] = useState(false)

    const verificar = mostrar ? "w-75  position-absolute p-2 position-relative " : "p-0"

    return (
        <Col
            xs="auto"
            style={{ right: "0%" }}
            className={`${verificar}`}>
            <div className="w-100 d-flex bg-white  justify-content-end align-items-center  ">

                {
                    mostrar && <i onClick={() => alternarMostrar(false)} className="fa-solid ms-2 rounded-circle bg-hoverdark cursor-pointer bg-white p-2 mx- text-ligthdark fs-5 fa-left-long"></i>
                }

                <div className="w-100 position-relative mx-1 " onClick={() => alternarMostrar(true)} >

                    <BuscadorInput texto={"productos"} />

                    {
                        searching && mostrar && <Collapse
                            className="z-1 shadow w-100 rounded-4"
                            in={!searching || searchin2 ? false : true}
                            dimension={"width"} >

                            <div
                                style={{ left: "0%", maxHeight: "350px" }}
                                className="bg-white scrollBarPersonalizada  position-absolute">
                                {
                                    testList.map(item =>
                                        <TestListado onSearch={onSearch} key={item} nombre={item} />
                                    )
                                }
                            </div>
                        </Collapse>
                    }
                </div>
            </div>

        </Col>
    )
}

const SeccionDeVentaNav = memo(({ alternarMostrar }) => {

    const listado = [
        { component: <BotonRotacion alternarMostrar={alternarMostrar} />, props: { className: "d-md-none" } },
        { component: <DropDownOrdenDefault dropwDownList={dropDownList} /> },
        // { component: <Test />, props: { className: "position-relative position-absolute p-0", xs: "" } },
    ]

    return (
        <SeccionNavCol list={listado}>
            <Test />
        </SeccionNavCol>
    )
})

export default SeccionDeVentaNav