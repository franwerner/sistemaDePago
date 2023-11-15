import { Suspense, memo, useEffect, useState } from "react"
import { Accordion, AccordionContext, Card, Spinner, Stack, useAccordionButton } from "react-bootstrap"
import { Link, useLocation, useNavigation } from "react-router-dom"
import styles from "@/styles/OffCavansNavegacion.module.css"
import { useContext } from "react"
import { SeccionSubRutas } from "./SeccionSubRutas"

const ContextAcordion = memo(({ children, eventKey, callback, rutaActual }) => {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const iconConfig = activeEventKey == eventKey ? "iconActivado" : "iconDesactivado"

    useEffect(() => {

        if (rutaActual && activeEventKey !== eventKey) {
            decoratedOnClick()
        }

    }, [rutaActual, activeEventKey])
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

const BotonRuta = memo(({ nombre, icon }) => {

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

export const AccordionSeccionesOffCavans = memo(({ nombre, icon, subRutas, index }) => {

    const nombreLowerCase = nombre.toLocaleLowerCase()

    const { pathname } = useLocation()

    const rutaActual = pathname.toLocaleLowerCase().match(nombreLowerCase.toLocaleLowerCase())

    return (

        <Card className="my-5 border-0">

            <Card.Header className={`border-0 rounded-3 p-0 ${styles[rutaActual ? "seccionElegida" : "seccionesMenu"]}`}>

                <Link
                    style={{ textDecoration: "none" }}
                    to={nombreLowerCase}>

                    <ContextAcordion rutaActual={rutaActual} eventKey={index} >

                        <BotonRuta
                            nombre={nombre}
                            icon={icon} />
                    </ContextAcordion>

                </Link>

            </Card.Header>

            <Accordion.Collapse
                eventKey={index}>
                <Card.Body>
                    <SeccionSubRutas subRutas={subRutas} ruta={nombreLowerCase} />
                </Card.Body>
            </Accordion.Collapse>

        </Card >


    )

})
