import { separarNumerosConDecimales } from "@/helper//separarNumerosConDecimales";
import { Accordion, Col, Stack } from "react-bootstrap";
import styles from "@/styles/SeccionDeCaja.module.css"
import { AgregarCerosANumeros } from "@/helper//AgregarCerosANumeros";
import { useFocusMouseElements } from "@/hooks//useFocusMouseElements";

const nroDeCaja = 1

const metodosDePagosTest = [
    { id: 1, nombre: "qr rebanking", tipo: "qr", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 3000 },
    { id: 2, nombre: "tarjeta naranja", tipo: "tarjeta", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 6900 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },
    { id: 3, nombre: "efectivo", tipo: "efectivo", pagos: [{ id: 1, monto: 1000, orden: 1 }, { id: 3, monto: 1000, orden: 1 }, { id: 2, monto: 1000, orden: 1 }], total: 2000 },

]

const AccordionPagos = ({ monto, orden }) => {

    return (
        <Stack
            direction="horizontal"
            className="justify-content-between">
            <div className="d-flex align-items-center">
                <i className="fa-solid me-3  fa-minus"></i>
                <p className="m-0">
                    {AgregarCerosANumeros({ numero: orden, digitos: 5 })}
                    -
                    {AgregarCerosANumeros({ numero: nroDeCaja, digitos: 4 })}
                </p>
            </div>
            <p className="m-0 p-1 fw-medium">$ {separarNumerosConDecimales(monto)}</p>
        </Stack>
    )

}

const AccordionItem = ({ children, eventKey }) => {

    const { refFocusElement } = useFocusMouseElements()

    const onClick = () => {

        refFocusElement.current.focus()
    }

    return (
        <Accordion.Item
            tabIndex={eventKey}
            eventKey={eventKey}
            onClick={onClick}
            ref={refFocusElement}
            className={styles.test}
        >
            {children}
        </Accordion.Item>
    )
}

export const SeccionDeCajaPagosBody = () => {




    return (
        <Col className="p-0">
            <Accordion
                className=""
                flush>
                {
                    metodosDePagosTest.map((item, index) =>

                        <AccordionItem key={index} eventKey={index}>

                            <Accordion.Header className={styles.test}>
                                <Stack
                                    direction="horizontal"
                                    className="justify-content-between w-100">
                                    <div className="d-flex">
                                        <p className="fw-medium text-uppercase m-0">{item.nombre}</p>
                                        <p className="m-0 px-3">({item.pagos.length})</p>
                                    </div>
                                    <p className="m-0">$ {separarNumerosConDecimales(item.total)}</p>

                                </Stack>
                            </Accordion.Header>

                            <Accordion.Body>
                                {
                                    item.pagos.map(item =>
                                        <AccordionPagos
                                            key={item.id}
                                            orden={item.orden}
                                            monto={item.monto} />
                                    )
                                }
                            </Accordion.Body>

                        </AccordionItem>
                    )
                }
            </Accordion>

        </Col>
    );
};