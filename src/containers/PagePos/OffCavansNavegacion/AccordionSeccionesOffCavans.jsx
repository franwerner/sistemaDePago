import { memo, useEffect } from "react"
import { Accordion, AccordionContext, Card, Stack, useAccordionButton } from "react-bootstrap"
import { Link } from "react-router-dom"
import styles from "@/styles/OffCavansNavegacion.module.css"
import { useContext } from "react"
import { SeccionSubRutas } from "./SeccionSubRutas"
import { splitDeRutasUtils } from "@/common//utils/splitDeRutasUtils"

const ContextAcordion = memo(({ children, eventKey, callback, rutaActual }) => {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const iconConfig = activeEventKey == eventKey ? "iconActivado" : "iconDesactivado"

    const rutas = splitDeRutasUtils()

    useEffect(() => {//Ese useEffect lo que hace, es cuando una ruta secundaria esta activa, automaticamente el decortedOnClick se activa

        if (rutaActual && activeEventKey !== eventKey) {
            decoratedOnClick()
        }
        else if (rutas.length == 1 && activeEventKey !== null) {//Esto sirve para cuando la ruta solo es POS

            decoratedOnClick()
        }

    }, [rutaActual, activeEventKey])

    return (
        <div
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

    const rutas = splitDeRutasUtils()

    const rutaActual = rutas.includes(nombreLowerCase)

    return (

        <Card className="my-5 border-0">

            <Card.Header className={`border-0 rounded-3 p-0 ${styles[rutaActual ? "seccionElegida" : "seccionesMenu"]}`}>

                <Link
                    className="text-decoration-none"
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
