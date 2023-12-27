import BotonRotacion from "@/components//Botones/BotonRotacion"
import { BuscadorResponsivo } from "@/components//BuscadorResponsivo"
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault/DropDownOrdenDefault"
import { ListadoDeBusquedas } from "@/components//ListadoDeBusquedas"
import { SeccionNavCol } from "@/components//SeccionNavCol"
import { productoReducerContext } from "@/context//Contextos"
import { memo, useContext, useEffect } from "react"
import { useSearchParams } from "react-router-dom"


const dropDownList = [
    { nombre: "Nombre", prioridad: 2 },
    { nombre: "Metodo", prioridad: 3 },
    { nombre: "Precio", propiedad: "precioModificado", prioridad: 1 },
]


const listaDataBase = [
    {
        id: 1,
        nombre: "Galletitas993",
        precio: 500,
        metodo: "kg",
        cantidad_disponible: 3.29
    }
]

const SeccionDeVentaNav = memo(({ alternarMostrar }) => {

    const listado = [
        { component: <BotonRotacion alternarMostrar={alternarMostrar} />, props: { className: "d-md-none" } },
        { component: <DropDownOrdenDefault dropwDownList={dropDownList} /> },
    ]

    const [search] = useSearchParams()

    const { agregarProducto } = useContext(productoReducerContext)

    const seleccionado = search.get("selectSearch")

    useEffect(() => {

        if (seleccionado && seleccionado.length > 0) {
            const a = listaDataBase.find(item => item.nombre == seleccionado)
            agregarProducto({ ...a, cantidad: 1 })
        }

    }, [seleccionado])

    return (
        <SeccionNavCol list={listado}>
            <BuscadorResponsivo
                texto={"productos"} >

                <ListadoDeBusquedas listado={listaDataBase} />

            </BuscadorResponsivo>
        </SeccionNavCol>
    )
})

export default SeccionDeVentaNav