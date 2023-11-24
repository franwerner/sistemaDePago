import { Button, Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

const DropDownUsuario = ({ mostrar }) => {
    return (
        <Dropdown.Menu
            style={{ minWidth: "180px" }}
            variant="none"
            className=" w-100 shadow mt-2 me-1 animate__animated animate__bounceIn"
            align="end"
            show={mostrar}>
            <Dropdown.ItemText className="justify-content-between d-flex">
                <p className="m-0 text-ligthdark fw-semibold text-center">Ventas</p>
                <div className="vr" />
                <p className="m-0 fw-bold  text-success"> 15/30</p>
            </Dropdown.ItemText>
            <Dropdown.Divider />
            <Link to={"/"}>
                <Button variant="none" className="w-100 p-1  fw-semibold">
                    <i className="fa-solid me-1 fa-arrow-right-to-bracket fa-rotate-180"></i>
                    Cerrar Session
                </Button>
            </Link>
        </Dropdown.Menu>
    )
}


export default DropDownUsuario