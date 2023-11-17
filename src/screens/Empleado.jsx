import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/PosLogin.module.css"
import { LoginContainer } from "@/containers/pageLogin/LoginContainer"
import { SvgHouse } from "@/components/SvgHouse"
import { RutasInterface } from "@/components/RutasInterface"



const Rutas = () => {

    return (
        <Row
            style={{ top: "4%", left: "5%" }}
            className=" p-4 m-0 align-items-center d-flex text-white">
            <Col className="d-flex">
                <SvgHouse color = {"746af4"}/>
                <RutasInterface color = {"746af4"} textColor = {"555"} />
            </Col>
        </Row>
    )

}

const Empleado = () => {

    return (
        <Container
            fluid
            className={`${styles.posLoginContainer} bg-white w-100 d-flex flex-column vh-100  `}>

            <Rutas />

            <Row className="h-50 rounded-4 m-auto align-items-center d-flex flex-row justify-content-center animate__animated animate__bounceInLeft  ">

                <Col
                    xs={3}
                    md={4}
                    className="p-0 d-none d-sm-block  h-100 ">
                    <div className={`bg-primary ${styles.lockContainer} p-5 h-100  d-flex justify-content-center align-items-center`}>
                        <i className="fa-solid text-white fa-lock"></i>
                    </div>
                </Col>


                <Col
                    id={styles.loginContainer}
                    className="h-100 d-flex justify-content-center  position-relative  align-items-center p-0">
                    <LoginContainer />
                </Col>

            </Row>

        </Container>
    )

}

export default Empleado