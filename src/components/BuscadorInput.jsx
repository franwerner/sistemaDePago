import { Form, InputGroup } from "react-bootstrap"
import { useForm } from "@/hooks/useForm"
import { useFocusMouseElements } from "../hooks/useFocusMouseElements"

const BuscadorInput = ({ texto }) => {

    const { form, onSubmit, changeForm } = useForm({ "buscador": "" })

    const { buscador } = form

    const { refFocusElement, onMouseEnter, onMouseLeave } = useFocusMouseElements()

    return (
        <Form
            className="w-100"
            onSubmit={onSubmit}>

            <InputGroup >
                <InputGroup.Text className="text-center border-0 border-bottom rounded-0 bg-white" >
                    <i className="fa-solid fa-magnifying-glass "></i>
                </InputGroup.Text>
                <Form.Control type="search"
                    ref={refFocusElement}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    value={buscador}
                    name="buscador"
                    className="border-0 border-bottom rounded-0"
                    onChange={changeForm}
                    placeholder={`Buscar ${texto}....`}
                    autoComplete="off"
                    aria-label="Search" style={{ boxShadow: "none" }} />
            </InputGroup>
        </Form>
    )
}

export default BuscadorInput