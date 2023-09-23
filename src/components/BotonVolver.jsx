import { Button } from "react-bootstrap";

export const BotonVolver = ({ alternarMostrar }) => {

    return (
        <>
            <Button
                style={{ background: "#D3D3D3"}}
                className="fs-5 fs-md-4 border border-0" 
              
                onClick={alternarMostrar}>
                <i className="fa-solid me-1 fa-angles-left"></i>
                <span>
                    Volver
                </span>
            </Button>

        </>

    );
};