import { Form } from "react-bootstrap"
import { useForm } from "../hooks/useForm"
import { useContext, useEffect, useState } from "react"
import { buscadorProductosContext } from "../context/Contextos"


export const BuscadorInput = () => {

    const { form, onSubmit, changeForm } = useForm({ "buscador": "" })

    const { buscador } = form

    const { establecerPruductoARenderizar, productoARenderizar } = useContext(buscadorProductosContext)

    const [timer, setTimer] = useState(null);


    useEffect(() => {
        
        if(buscador == "") establecerPruductoARenderizar(false)
        else{
          establecerPruductoARenderizar(buscador)
        }
        // if (timer) {
        //     clearTimeout(timer);
        // }
        // if (buscador) {
        //     setTimer(
        //         setTimeout(() => {
        //             establecerPruductoARenderizar(buscador);
        //         }, 1000)
        //     );
        // }
    }, [buscador]);


    return (
        <>
            <Form
                onSubmit={onSubmit}>
                <Form.Control type="search"
                    value={buscador}
                    name="buscador"
                    className="border-0"
                    onChange={changeForm}
                    placeholder="Buscar productos..."
                    aria-label="Search" style={{ boxShadow: "none", borderColor: "white", width: "300px" }} />
            </Form>
        </>
    )
}