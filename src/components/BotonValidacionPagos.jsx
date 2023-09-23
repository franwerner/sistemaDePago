import { Button } from "react-bootstrap";

export const BotonValidacionPagos = () => {
    return (
        <>

            <Button
                style={{ background: "#D3D3D3"}}
                className="fs-5 fs-md-4 border-0">
                <span className="me-1">
                    Validar
                </span>
                <i className="fa-solid fa-angles-right"></i>
            </Button>

        </>
    );
};