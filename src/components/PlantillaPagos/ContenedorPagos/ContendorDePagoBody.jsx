import { Row } from "react-bootstrap"
import { RestoDelPagoProvider } from "../../../context/provider/RestoDelPagoProvider"
import { SeccionMetodosDePago } from "../SeccionMetodosDePago"
import { SeccionRestante } from "../SeccionRestante"
import styles from "../../../styles/PlantillaPagos.module.css";

export const ContenedorDePagoBody = ({ mostrar }) => {
    return (

        <Row className={`${styles.lineaPunteada}  h-100`}>

            <RestoDelPagoProvider>

                {
                    mostrar &&
                    <>
                        <SeccionMetodosDePago />
                        <SeccionRestante />
                    </>
                }

            </RestoDelPagoProvider>

        </Row>
    )
}