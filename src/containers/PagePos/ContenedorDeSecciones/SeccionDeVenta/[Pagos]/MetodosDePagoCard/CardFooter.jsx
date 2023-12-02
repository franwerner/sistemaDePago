import { memo } from "react"
import { Button, Card } from "react-bootstrap"

export const CardFooter = memo(({ eliminarResto, obj }) => {

    const onClick = () => {
        eliminarResto({...obj})
    }

    return (
        <Card.Footer
            className="d-flex justify-content-center bg-white">
            <Button
                onClick={onClick}
                type="reset"
                variant="none"
                className="border-0 p-0 ls-4  fw-medium text-ligthdark zoom text-uppercase" >
                Restablecer
            </Button>
        </Card.Footer>
    )
})