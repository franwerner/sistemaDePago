import { Col, Container, Row } from "react-bootstrap"
import { ListaDeTarifas } from "./ListaDeTarifas"
import styles from "../styles/PlantillaPagos.module.css"
import { useEventoMostrar } from "../hooks/useEventoMostrar"
import { ContenedorDePagos } from "./ContenedorDePagos"




export const PlantillaPagos = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    return (
        <>
            <Container  fluid className={`${styles.contenedorPlantillaPagos} `}>
                <Row className="">
                    <Col className="px-3">
                        <ListaDeTarifas></ListaDeTarifas>
                    </Col>
                </Row>

                <Row className={`m-1 p-2  ${styles.subContenedor}`}>

                    <Col className={`text-center align-items-center justify-content-center d-flex  border-secondary border-2 ${styles.botonPagos}`}>
                        <div onClick={alternarMostrar} className="my-5">
                            <i className="fa-solid  fa-circle-arrow-right "></i>
                            <p className="fw-bolder ">Pagos</p>
                        </div>
                  
                        <ContenedorDePagos alternarMostrar={alternarMostrar} mostrar={mostrar}></ContenedorDePagos>
                   
                    </Col>

                <Col className={`text-center align-items-center justify-content-center d-flex  border-secondary border-2 ${styles.botonPagos}`}>
                        <div onClick={alternarMostrar} className="my-5">
                            <i className="fa-solid  fa-circle-arrow-right "></i>
                            <p className="fw-bolder ">Pagos</p>
                        </div>
                  
                        <ContenedorDePagos alternarMostrar={alternarMostrar} mostrar={mostrar}></ContenedorDePagos>
                   
                    </Col>
                </Row>




            </Container>
        </>
    )
}