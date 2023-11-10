import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales";
import { Accordion, AccordionContext, Card, Col, Form, Stack, useAccordionButton } from "react-bootstrap";
import styles from "@/styles/SeccionDeCaja.module.css"
import { AgregarCerosANumeros } from "@/helper//AgregarCerosANumeros";
import { useFocusMouseElements } from "@/hooks//useFocusMouseElements";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import React, { useContext } from "react";

const nroDeCaja = 1

const metodosDePagosTest = [
    { id: 1, nombre: "qr rebanking", tipo: "qr", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 3000 },
    { id: 2, nombre: "tarjeta naranja", tipo: "tarjeta", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 6900 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
]


const ContextAcordion = React.memo(({ children, eventKey, callback }) => {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    const iconConfig = activeEventKey == eventKey ? "iconActivado" : "iconDesactivado"

    return (
        <div
            onClick={decoratedOnClick}
            className={`${styles[iconConfig]}  p-3 text-start border-0 align-items-center d-flex justify-content-between`}
        >
            {children}
            <i className={` fa-solid fa-angle-up  p-0`}></i>
        </div>
    )
})


const AccordionBody = ({ monto, orden }) => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <Stack
            direction="horizontal"
            className={`${styles.accordioBodyPagos} border-bottom mt-1 justify-content-between`}>
            <div className="d-flex align-items-center">

                <Form.Check type="checkbox" className={`${styles.test} mx-1`} />

                <p className="m-0 fw-medium">
                    {AgregarCerosANumeros({ numero: orden, digitos: 5 })}
                    -
                    {AgregarCerosANumeros({ numero: nroDeCaja, digitos: 4 })}
                </p>
            </div>
            <p className="m-0 p-1 fw-medium text-dark text-truncate">$ {separarNumerosConDecimales(monto)}</p>
        </Stack>
    )

}

export const SeccionDeCajaPagosBody = () => {

    return (
        <Col className={`${styles.accordionContenedor} p-0`}>
            <Accordion
                className="mx-md-5 m-0  my-md-4"
                flush>
                {
                    metodosDePagosTest.map((item, index) =>

                        <Card className="p-0 mt-2 shadow" key={item.id}>
                            <Card.Header className="p-0">
                                <ContextAcordion eventKey={index} />
                            </Card.Header>

                            <Accordion.Collapse eventKey={index}>
                                <Card.Body>
                                    {
                                        item.pagos.map(item =>
                                            <AccordionBody key={item.id} orden={item.orden} monto={item.monto} />
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