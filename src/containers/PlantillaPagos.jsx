import { Col, Container, Row } from "react-bootstrap"
import styles from "@/styles/PlantillaPagos.module.css"
import { useEventoMostrar } from "@/hooks/useEventoMostrar"
import React, { useCallback } from "react"
import { useEvitarRenderizados } from "@/hooks/useEvitarRenderizados"
import { ContenedorDePagos } from "./ContenedorDePagos/ContenedorDePagos"
import { BotonTarifas } from "@/components//BotonTarifas"
import { ListadoDeTarifas } from "@/components/ListadoDeTarifas"
import { RestoDelPagoProvider } from "@/context//provider/RestoDelPagoProvider"




const PlantillaPagosHeader = React.memo(() => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const { conteoRenderizados, registrarConteo } = useEvitarRenderizados()

    const onClick = useCallback(() => {
        alternarMostrar()
        registrarConteo()
    }, [])

    return (
        <>
            <Container fluid className="mx-0 " >
                <Row className="border mb-2 " >

                    <BotonTarifas
                        alternarMostrar={onClick}>
                    </BotonTarifas>

                    {
                        conteoRenderizados >= 1 &&

                        <ListadoDeTarifas
                            alternarMostrar={alternarMostrar}
                            mostrar={mostrar}
                        />
                    }

                </Row>
            </Container>

        </>
    );
});

const PlantillaPagosBody = React.memo(({ alternarMostrar }) => {
    return (
        <>
            <Container fluid className={` d-flex flex-column  rounded-1 flex-grow-1  `}>

                <Row style={{ border: "2px solid #555" }}>
                    <Col>
                        <div className="d-flex fs-4  justify-content-center align-items-center">
                            <i className="fa-solid fa-circle-user"></i>
                            <p className="my-1 mx-3 fw-light">
                                Consumidor Final
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row
                    style={{ border: "2px solid #555" }}
                    className={`text-center h-100 align-items-center justify-content-center  ${styles.botonPagos}`}>
                    <Col
                        id="plantilla-pagos"
                        tabIndex={0}
                        onClick={alternarMostrar} >
                        <i className="fa-solid fa-circle-arrow-right "></i>
                        <p className="fw-bolder">Pagos</p>
                    </Col>
                </Row>
            </Container>

        </>
    );
});


export const PlantillaPagos = React.memo(({ alternarMostrar }) => {



    return (
        <section id="seccion-pagos"
            className="h-100 ">
            <Container fluid className="flex-grow-1 h-100 ">
                <Row className="h-100">

                    <Col className={`d-flex h-100 p-2  flex-column  ${styles.contenedorPlantillaPagos} `}>

                        <PlantillaPagosHeader />
                        <PlantillaPagosBody
                            alternarMostrar={alternarMostrar} />

                    </Col>
                </Row>
            </Container>


        </section>
    )
})