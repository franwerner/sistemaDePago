import { Link } from "react-router-dom"
import styles from "@/styles/Rutasinterface.module.css"
import { SvgHouse } from "./SvgHouse"
import { Col, Row } from "react-bootstrap"
import { primeraLetraMayuscula } from "@/common/helper/primeraLetraMayuscula"
import { splitDeRutasUtils } from "@/common/utils/splitDeRutasUtils"
import { concatenacionDeRutasUtils } from "@/common/utils/concatenacionDeRutasUtils"


export const RutasInterface = ({ color = "fff", textColor = "fff" }) => {

    const rutas = splitDeRutasUtils()

    return (
        <Row className="m-0 p-1 p-md-3 p-lg-4 p-xl-5  d-flex justify-content-start w-100 position-sm-absolute ">
            <Col className="align-items-center flex-wrap  p-1 d-flex">

                <SvgHouse color={color} />

                {
                    rutas.map((item, index) =>

                        <div
                            id={styles.ruta}
                            className="mt-1  text-truncate position-relative "
                            key={index}>
                            <Link
                                style={{ textDecoration: "none", color: `#${textColor}` }}
                                key={index}
                                className="z-1 fs-6 ls-3 mx-1"
                                to={concatenacionDeRutasUtils(index)}>
                                /{primeraLetraMayuscula(item)}
                            </Link>
                            <span
                                style={{ borderBottom: `1px solid #${color}` }}
                                className="position-absolute z-1"
                                id={styles.linea}>
                            </span>
                        </div>

                    )
                }
            </Col>
        </Row>
    )

}