import { Container, Nav, Navbar } from "react-bootstrap"

const NavBarPos = () => {
    return (
        <Navbar
            style={{ minHeight: "60px", maxHeight: "120px" }}
            className="shadow-sm border ">
            <Container
                fluid
                className="p-0 h-100 ">

                <Nav className=" justify-content-end w-100  flex-row align-items-center ">
                    <i className="fa-regular  fs-3 mx-3 fa-bell"></i>
                    <i className="fa-regular fs-4 mx-3 fa-message"></i>

                    <div className="border overflow-hidden rounded-circle">

                        <img
                            style={{ objectFit: "cover" }}
                            height={80}
                            width={80}
                            loading="lazy"
                            src="https://img.freepik.com/foto-gratis/primer-plano-hombre-negocios-serio-camisa-blanca-mirando-camara-pie-confiado_1258-26762.jpg" />
                    </div>
                    <div className="d-flex  flex-column mx-1">
                        <p
                            style={{ color: "#555", fontSize: "16px" }}
                            className="fw-semibold m-0 text-center">Franco Werner</p>
                        <p
                            className="m-0 text-start"
                            style={{ fontSize: "14px" }}>Empleado</p>
                    </div>

                </Nav>

            </Container>
        </Navbar>
    )
}

export default NavBarPos