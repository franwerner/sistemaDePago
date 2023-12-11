import { Form, InputGroup } from "react-bootstrap"
import { useForm } from "@/hooks/useForm"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const BuscadorInput = ({ texto = "" }) => {

    const { form, changeForm } = useForm({ "buscador": "" })

    const { buscador } = form

    const redirect = useNavigate()

    useEffect(() => {

        if (buscador.length == 0) return redirect("")

        redirect(`?search=${buscador}`)

    }, [buscador])

    return (

        <InputGroup>
            <InputGroup.Text className="text-center  border-0 border-bottom rounded-0 bg-white" >
                <i className="fa-solid fa-magnifying-glass "></i>
            </InputGroup.Text>
            <Form.Control type="search"
                value={buscador}
                name="buscador"
                className="border-0 border-bottom rounded-0"
                onChange={changeForm}
                placeholder={`Buscar ${texto}....`}
                autoComplete="off"
                aria-label={`Busqueda de  ${texto}`}
                style={{ boxShadow: "none" }} />
        </InputGroup>
    )
}

export default BuscadorInput