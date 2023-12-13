import { Form, InputGroup } from "react-bootstrap"
import { useForm } from "@/hooks/useForm"
import { memo, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

const BuscadorInput = memo(({ texto = "" }) => {

    const { form, changeForm } = useForm({ "buscador": "" })
    const [search, setSearch] = useSearchParams()

    const searching = search.get("search")

    const { buscador } = form


    useEffect(() => {

        if (buscador.length == 0) return setSearch("")

        setSearch(`?search=${buscador}`)

    }, [buscador])

    return (
        <div
            className="rounded-5 w-100 p-1"
            style={{ background: "#F0F2F5" }}>
            <InputGroup>
                <InputGroup.Text
                    style={{ background: "transparent" }}
                    className="text-center p-0 ms-3 border-0" >
                    <i className="fa-solid text-ligthdark fa-magnifying-glass "></i>
                </InputGroup.Text>
                <Form.Control
                    type="search"
                    value={!searching && buscador.length > 0 ? "" : buscador}
                    name="buscador"
                    className="border-0 fw-medium"
                    style={{ boxShadow: "none", background: "transparent" }}
                    onChange={changeForm}
                    placeholder={`Buscar ${texto}....`}
                    autoComplete="off"
                    aria-label={`Busqueda de ${texto}`} />
            </InputGroup>
        </div>
    )
})

export default BuscadorInput