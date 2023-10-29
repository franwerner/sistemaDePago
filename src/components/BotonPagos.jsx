import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TotalAVender from "./TotalAVenderMemoizado";



export const BotonPagos = () => {
    return (
        <Link 
        style={{textDecoration : "none"}}
        to={"pagos"}>
            <Button
                style={{ background: "#746AF4" }}
                className="d-flex text-white w-100  border-0 fw-semibold rounded-3 justify-content-between rounded-1 p-2  align-items-center ">
                <p className="m-0 mx-2  text-uppercase mx-2">
                    pagos
                </p>
                <p className="m-0 mx-2 text-truncate">
                    $/ {<TotalAVender />}
                </p>
            </Button>
        </Link>

    );
};