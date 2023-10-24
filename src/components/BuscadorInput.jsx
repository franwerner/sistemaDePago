import { Form, InputGroup } from "react-bootstrap"
import { useForm } from "@/hooks/useForm"

const BuscadorInput = () => {

    const { form, onSubmit, changeForm } = useForm({ "buscador": "" })

    const { buscador } = form

    return (
        <Form
            className=""
            onSubmit={onSubmit}>

            <InputGroup >
                <InputGroup.Text className="text-center border-0 border-bottom rounded-0 bg-white" >
                    <i className="fa-solid fa-magnifying-glass "></i>
                </InputGroup.Text>
                <Form.Control type="search"
                    value={buscador}
                    name="buscador"
                    className="border-0 border-bottom rounded-0"
                    onChange={changeForm}
                    placeholder="Buscar productos..."
                    autoComplete="off"
                    aria-label="Search" style={{ boxShadow: "none" }} />
            </InputGroup>
        </Form>
    )
}

export default BuscadorInput