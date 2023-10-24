import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/PosLogin.module.css"
import { LoginContainer } from "@/containers/pageLogin/LoginContainer"


 const Empleado = () => {



    return (
        <Container fluid className={`${styles.posLoginContainer} d-flex justify-content-center align-items-center vh-100  `}>

            <Row className=" bg-white h-50 rounded-4">

                <Col xs={3} md={4} className="p-0 d-none d-sm-block  h-100 ">
                    <div className={`${styles.lockContainer} p-5 h-100  d-flex justify-content-center align-items-center`}>
                        <i className="fa-solid text-white fa-lock"></i>
                    </div>
                </Col>


                <Col className="h-100 d-flex justify-content-center position-relative  align-items-center p-0">
                    <LoginContainer />
                </Col>

            </Row>

        </Container>
    )

}

export default Empleado