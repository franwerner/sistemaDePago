import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/PosLogin.module.css"
import { LoginContainer } from "@/containers/pageLogin/LoginContainer"
import { RutasInterface } from "@/components/RutasInterface"


const Empleado = () => {

    return (
        <Container
            fluid
            className={`${styles.posLoginContainer}  bg-white d-flex flex-column  p-0 vh-100  `}>

            <RutasInterface
                color={"746af4"}
                textColor={"555"} />

            <Row className="h-75 m-auto rounded-4 mx-auto animate__animated animate__bounceInLeft  ">

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