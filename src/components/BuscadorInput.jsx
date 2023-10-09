import { Form, InputGroup } from "react-bootstrap"
import { useForm } from "@/hooks/useForm"

export const BuscadorInput = () => {

    const { form, onSubmit, changeForm } = useForm({ "buscador": "" })

    const { buscador } = form

    return (
        <>
            <Form

                onSubmit={onSubmit}>

                <InputGroup>
                    <InputGroup.Text className="text-center bg-white" style={{ maxHeight: "32px" }}>
                        <i className="fa-solid fa-magnifying-glass "></i>
                    </InputGroup.Text>
                    <Form.Control type="search"
                        value={buscador}
                        name="buscador"
                        className="border-0"
                        onChange={changeForm}
                        placeholder="Buscar productos..."
                        aria-label="Search" style={{ boxShadow: "none", borderColor: "white", maxHeight: "32px" }} />
                </InputGroup>
            </Form>
        </>
    )
}