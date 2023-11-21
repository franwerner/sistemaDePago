import { Link } from "react-router-dom"
import { primeraLetraMayuscula } from "@/helper/primeraLetraMayuscula"
import styles from "@/styles/Rutasinterface.module.css"
import { splitDeRutas } from "../helper/splitDeRutas"
import { SvgHouse } from "./SvgHouse"
import { Col, Row } from "react-bootstrap"

export const concatenacionDeRutas = (posicion) => {

    const rutas = splitDeRutas()

    let rutaNueva = ""

    for (let i = 0; i < rutas.length; i++) {
        if (i > posicion) break
        rutaNueva += `/${rutas[i]}`
    }

    return rutaNueva
}


export const RutasInterface = ({ color = "fff", textColor = "fff" }) => {

    const rutas = splitDeRutas()

    return (
        <Row className="m-0 p-1 p-md-3 p-lg-4 p-xl-5  d-flex justify-content-start w-100 position-sm-absolute ">
            <Col className="align-items-center  p-1 d-flex">

                <SvgHouse color={color} />

                {
                    rutas.map((item, index) =>

                        <div
                            id={styles.ruta}
                            className="mt-1 position-relative "
                            key={index}>
                            <Link
                                style={{ textDecoration: "none", color: `#${textColor}` }}
                                key={index}
                                className="z-1 fs-6 ls-3 mx-1"
                                to={concatenacionDeRutas(index)}>
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