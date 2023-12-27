import { useCallback } from "react"
import { Collapse, Stack } from "react-bootstrap"
import { useSearchParams } from "react-router-dom"

const Listado = ({ nombre, onSearch }) => {

    return (
        <Stack
            direction="horizontal"
            onClick={() => onSearch(nombre)}
            className="p-1 bg-hoverdark  bg-white cursor-pointer">
            <i style={{ background: "#F0F2F5", padding: "10px" }}
                className="fa-solid mx-1 rounded-circle text-ligthdark fa-magnifying-glass"></i>
            <p className="m-0 text-ligthdark fw-medium bg-hoverdark w-100 border-2 bo p-2 ls-4 text-truncate">{nombre}</p> {/* Aca va el children con un formate diferente para cada tipo de busqueda */}

        </Stack>
    )
}

export const ListadoDeBusquedas = ({ listado }) => {

    const [search, setSearch] = useSearchParams()

    const onSearch = useCallback((seleccionado) => {
        setSearch(`?selectSearch=${seleccionado}`)
    }, [])

    const searching = search.get("search")

    const searchin2 = search.get("selectSearch")

    return (
        <Collapse
            className="z-1 shadow w-100 rounded-4"
            in={!searching || searchin2 ? false : true}
            dimension={"width"} >
            <div
                style={{ minHeight: "100px", maxHeight: "350px" }}
                className="bg-white scrollBarPersonalizada mt-2  border-top border-bottom position-absolute">

                {
                    listado.length > 0 ?
                        listado.map(item =>
                            <Listado
                                onSearch={onSearch}
                                key={item.nombre}
                                nombre={item.nombre} />
                        )
                        :
                        <div
                            style={{ minHeight: "100px" }}
                            className="text-ligthdark d-flex justify-content-center align-items-center h-100 ">
                            <p className="m-0 mx-1 ls-4 fw-medium">No se encontraron coincidencias de "{searching}" :'C</p>
                        </div>
                }

            </div>
        </Collapse>
    )
}

