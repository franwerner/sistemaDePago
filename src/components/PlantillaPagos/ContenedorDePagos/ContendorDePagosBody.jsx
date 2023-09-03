import { Row } from "react-bootstrap"
import { RestoDelPagoProvider } from "@/context/provider/RestoDelPagoProvider"
import {  SeccionMetodoDePago } from "./SeccionMetodoDePago"
import { SeccionResto } from "./SeccionResto"
import styles from "@/styles/PlantillaPagos.module.css"

export const ContenedorDePagoBody = ({ mostrar }) => {
    return (

        <Row className={`${styles.lineaPunteada}  h-100`}>

            <RestoDelPagoProvider>

                {
                    mostrar &&
                    <>
                        <SeccionMetodoDePago />
                        <SeccionResto />
                    </>
                }

            </RestoDelPagoProvider>

        </Row>
    )
}