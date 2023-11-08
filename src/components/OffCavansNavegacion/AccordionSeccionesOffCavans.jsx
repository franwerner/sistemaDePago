import React from "react"
import { Accordion, AccordionContext, Card, Stack, useAccordionButton } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import styles from "@/styles/OffCavansNavegacion.module.css"
import { useContext } from "react"


const SeccionSubRutas = React.memo(({ subruta, ruta }) => {

    const { pathname } = useLocation()

    const rutasArray = pathname.split("/").filter(item => item.length !== 0)

    const rutaLowerCase = ruta.toLocaleLowerCase()

    const verificarRuta = rutasArray.length == 2 && subruta == rutaLowerCase

    const verificarSubRuta = rutasArray[2] == subruta

    const colorRuta = verificarRuta || verificarSubRuta ? "#746AF4" : "#555"

    const link = rutaLowerCase == subruta ? "" : subruta

    return (
        <Link
            style={{ textDecoration: "none" }}
            to={`${rutaLowerCase}/${link}`}>
            <Stack
                style={{ color: colorRuta }}
                gap={2}
                direction="horizontal"
                className={`${styles.subRutas}`}
            >
                <i className="fa-solid  fa-minus"></i>
                <p className="m-0 text-uppercase">{subruta}</p>
            </Stack>
        </Link>
    )
})

const ContextAcordion = React.memo(({ children, eventKey, callback }) => {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const iconConfig = activeEventKey == eventKey ? "iconActivado" : "iconDesactivado"


    return (
        <div
            onClick={decoratedOnClick}
            className={`${styles[iconConfig]}  p-2 text-start border-0 align-items-center d-flex justify-content-between`}
        >
            {children}
            <i className={` fa-solid fa-angle-up  p-0`}></i>
        </div>
    )
})

const BotonRuta = React.memo(({ nombre, icon }) => {

    return (
        <Stack
            className={` ${styles.nombreDeRuta}`}
            direction="horizontal">
            <i
                style={{ minWidth: "30px" }}
                className={`text-center ${icon} fs-5 mx-2`}></i>
            <p className="m-0">{nombre}</p>
        </Stack>
    )
})

export const AccordionSeccionesOffCavans = React.memo(({ nombre, icon, subRutas, index }) => {

    const nombreLowerCase = nombre.toLocaleLowerCase()

    const { pathname } = useLocation()

    return (

        <Card className="my-5 border-0">

            <Card.Header className={`border-0 rounded-3 p-0 ${styles[pathname.match(nombreLowerCase) ? "seccionElegida" : "seccionesMenu"]}`}>

                <Link
                    style={{ textDecoration: "none" }}
                    to={nombreLowerCase}>

                    <ContextAcordion eventKey={index} >

                        <BotonRuta
                            nombre={nombre}
                            icon={icon} />

                    </ContextAcordion>

                </Link>

            </Card.Header>

            <Accordion.Collapse
                eventKey={index}>
                <Card.Body>
                    {
                        subRutas.map(item =>

                            <SeccionSubRutas
                                ruta={nombre}
                                subruta={item}
                                key={item} />
                        )
                    }
                </Card.Body>
            </Accordion.Collapse>

        </Card >


    )

})
