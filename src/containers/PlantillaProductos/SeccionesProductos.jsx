import styles from "@/styles/PlantillaProductos.module.css"
import { Col, Row } from "react-bootstrap"
import React from "react"


const SeccionesRestantes = ({ seccionActual, secciones, elegirSeccion }) => {

    const onClick = () => {
        elegirSeccion(secciones)
    }

    const analizarSiEsLaSeccionActual = secciones == seccionActual || seccionActual == "Home" && true

    return (

        analizarSiEsLaSeccionActual && <span
            onClick={onClick}
            className={`my-1 ${styles.botonesSeccion}   `}>
            {secciones}
        </span>
    )


}

const SeccionHome = ({ seccion, elegirSeccion }) => {

    const onClick = () => {
        elegirSeccion("Home")
    }

    const analizarSiEsHome = seccion !== "Home" && true

    return (
        <div
            onClick={onClick}
            className={`px-3 position-relative d-flex ${styles.botonesSeccion}`}>

            {
                analizarSiEsHome &&
                <img  className={`${styles.arrowHome}`} src="https://i.ibb.co/hDp2P6v/bc-arrow-big.png" />
            }

            <span
                className={`fs-4 text-center d-flex align-items-center justify-content-center`}>
                <i className="fa-solid  fa-house "></i>
            </span>
        </div>

    )
}

export const SeccionesProductos = React.memo(({ seccion, elegirSeccion, seccionesProductos }) => {

    return (

        <Row className={`d-flex m-0  ${styles.seccionesContainer} p-0`}>
            <Col style={{ overflowY: "hidden" }} className="d-flex scrollBarPersonalizada p-0 w-100 ">

                <SeccionHome
                    seccion={seccion}
                    elegirSeccion={elegirSeccion} />

                {seccionesProductos.map((secProductos, index) =>

                    <SeccionesRestantes
                        key={index}
                        elegirSeccion={elegirSeccion}
                        secciones={secProductos.nombre}
                        seccionActual={seccion}
                    />
                )}
            </Col>
        </Row>

    )
})

