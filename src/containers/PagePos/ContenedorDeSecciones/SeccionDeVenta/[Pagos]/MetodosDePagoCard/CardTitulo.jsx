import { memo } from "react"
import { useTotalMetodoDePago } from "../../Utils/useTotalMetodoDePago"
import { Button, Card } from "react-bootstrap"
import { cardTitulo } from "@/styles/MetodosDePagoCard.module.css"

export const CardTitulo = memo(({ resto, obj, modificarResto }) => {

    const { restante } = useTotalMetodoDePago()

    const onClick = () => {

      
        if (restante > 0 || restante < 0) {
         
            const verificarResto = resto ? resto : 0

            modificarResto({ resto: verificarResto + restante, ...obj })
        }
        else if (resto == undefined) {
            modificarResto({ resto: 0, ...obj })
        }

    }

    return (
        <Card.Title
            className={`${cardTitulo} position-absolute justify-content-end  w-100 d-flex  align-items-center`}>
            {
                !isNaN(resto) && <Button
                    className="border-0 text-start w-100 "
                    variant="none">
                    <i className="fa-regular text-success fs-4  zoom fa-circle-check"></i>
                </Button>
            }

            <Button
                type="button"
                aria-label="Agregar resto"
                className="border-0"
                variant="none"
                onClick={onClick}>
                <i className="fa-regular zoom text-ligthdark text-end fs-4 p-1 fa-square-plus"></i>
            </Button>
        </Card.Title>
    )

})