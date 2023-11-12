import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales";
import { Accordion, AccordionContext, Card, Col, Form, Stack, useAccordionButton } from "react-bootstrap";
import styles from "@/styles/SeccionDeCaja.module.css"
import { AgregarCerosANumeros } from "@/helper//AgregarCerosANumeros";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import React, { lazy, useContext } from "react";
import { SuspenseLoading } from "@/components//SuspenseLoading";

const ModalDetalleDePagos = lazy(() => import("./ModalDetalleDePagos"))

const nroDeCaja = 1

const metodosDePagosTest = [
    { id: 1, nombre: "qr rebanking", tipo: "qr", pagos: [{ id: 1, monto: 4000, orden: 1 }, { id: 3, monto: 4000, orden: 3 }, { id: 2, monto: 1000, orden: 4 }], total: 3000 },
    { id: 2, nombre: "tarjeta naranja", tipo: "tarjeta", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 6900 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
]

const ListaDePagos = React.memo(({ alternarMostrar, monto, orden }) => {

    return (
        <Stack
            onClick={alternarMostrar}
            direction="horizontal"
            className={`${styles.accordioBodyPagos} bg-hover border-bottom mt-1 align-items-center justify-content-between`}>

            <div className="d-flex align-items-center">

                <Form.Check type="checkbox" className={`${styles.test} mx-1`} />

                <p className="m-0 me-1">07/11/2023 21:54</p>

            </div>

            <p className="m-0 fw-medium">
                {AgregarCerosANumeros({ numero: nroDeCaja, digitos: 4 })}
                -
                {AgregarCerosANumeros({ numero: orden, digitos: 5 })}
            </p>

            <p className="m-0 p-1 fw-medium text-dark text-truncate">$ {separarNumerosConDecimales(monto)}</p>
        </Stack>
    )
})

const AccordionBody = ({ monto, orden }) => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    const onClick = (e) => {

        if (e.target.tagName !== "INPUT") alternarMostrar()


    }

    return (
        <>
            <ListaDePagos
                monto={monto}
                orden={orden}
                alternarMostrar={onClick} />

            {
                mostrar &&
                <SuspenseLoading>
                    <ModalDetalleDePagos
                        alternarMostrar={alternarMostrar}
                        mostrar={mostrar} />
                </SuspenseLoading>
            }
        </>
    )

}


const ContextAcordion = React.memo(({ eventKey, callback, nombre, total }) => {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const iconConfig = activeEventKey == eventKey ? "iconActivado" : "iconDesactivado"

    return (
        <div
            onClick={decoratedOnClick}
            className={`${styles[iconConfig]} bg-hover w-100 text-uppercase  p-3 text-start border-0 align-items-center d-flex justify-content-between`}
        >
            <p className="m-0">{nombre}</p>

            <div className="d-flex align-items-center">
                <p className="m-0 me-2 fw-medium">$ {separarNumerosConDecimales(total)}</p>
                <i className={` fa-solid fa-angle-up  p-0`}></i>
            </div>

        </div>
    )
})


export const SeccionDeCajaPagosBody = () => {

    console.log(3000 - 1000)
    return (
        <Col className={`${styles.accordionContenedor} p-0`}>
            <Accordion
                className="mx-md-5 m-0   my-md-4"
                flush>
                {
                    metodosDePagosTest.map((item, index) =>

                        <Card className="p-0 mt-2 shadow " key={item.id}>
                            <Card.Header className="p-0 d-flex">
                                <ContextAcordion
                                    nombre={item.nombre}
                                    total={item.total}
                                    eventKey={index} />
                            </Card.Header>

                            <Accordion.Collapse eventKey={index}>
                                <Card.Body >
                                    {
                                        [...item.pagos].sort((a, b) => {
                            
                                            if (a.monto - b.monto !== 0) {
                                                return a.monto - b.monto;
                                              }
                                              return a.orden - b.orden;
                                        }).map(item =>
                                            <AccordionBody
                                                key={item.id}
                                                orden={item.orden}
                                                monto={item.monto} />
                                        )
                                    }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                }
            </Accordion>

        </Col>
    );
};