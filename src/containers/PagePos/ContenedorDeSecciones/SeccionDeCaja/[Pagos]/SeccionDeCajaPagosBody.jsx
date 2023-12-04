import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales";
import { Accordion, AccordionContext, Card, Col, Form, Stack, useAccordionButton } from "react-bootstrap";
import styles from "@/styles/SeccionDeCaja.module.css"
import { AgregarCerosANumeros } from "@/common/helper/AgregarCerosANumeros";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { lazy, memo, useContext } from "react";
import { useAlgoritmoDeOrden } from "@/hooks//useAlgoritmoDeOrden";
import { QueryParamsContext } from "@/context//Contextos";
import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading";
import { obtenerFecha } from "@/common//helper/obtenerFecha";

const ModalDetalleDePagos = lazy(() => import("./ModalDetalleDePagos"))

const nroDeCaja = 1

const metodosDePagosTest = [
    {
        id: 1, nombre: "qr rebanking", tipo: "qr", pagos: [
            { id: 1, monto: 4000, orden: 15, fecha: 1638405600000 },
            { id: 3, monto: 4000, orden: 3, fecha: 1638412800000 },
            { id: 2, monto: 1000, orden: 4, fecha: 1638416400000 }
        ], total: 3000
    },
    {
        id: 2, nombre: "tarjeta naranja", tipo: "tarjeta", pagos: [
            { id: 1, monto: 1000, orden: 1, fecha: 1638387600000 },
            { id: 3, monto: 1000, orden: 1, fecha: 1638391200000 },
            { id: 2, monto: 1000, orden: 1, fecha: 1638394800000 }
        ], total: 6900
    },
    {
        id: 3, nombre: "efectivo", tipo: "efectivo",
        pagos: [{ id: 1, monto: 5000, orden: 3, fecha: 1638373200000 },
        { id: 3, monto: 1000, orden: 1, fecha: 1638376800000 },
        { id: 2, monto: 1000, orden: 2, fecha: 1638380400000 },
        { id: 4, monto: 3000, orden: 8, fecha: 1638387600000 }], total: 2000
    },
]

const ListaDePagos = memo(({ alternarMostrar, monto, orden, fecha }) => {

    const { año, dia, hora, mes, minutos } = obtenerFecha(fecha)

    return (
        <Stack
            onClick={alternarMostrar}
            direction="horizontal"
            className={`${styles.accordioBodyPagos} bg-hover border-bottom mt-1 align-items-center justify-content-between`}>

            <div className="d-flex align-items-center">

                <Form.Check type="checkbox" className="mx-1" />

                <p className="m-0 me-1">{año}/{mes}/{dia} {hora}:{minutos} </p>

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

const AccordionBody = ({ monto, orden, fecha }) => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    const onClick = (e) => {

        if (e.target.tagName !== "INPUT") alternarMostrar()

    }



    return (
        <SuspenseCompontentsLoading texto={`${AgregarCerosANumeros({ numero: nroDeCaja, digitos: 4 })} - ${AgregarCerosANumeros({ numero: orden, digitos: 5 })}`}>
            <ListaDePagos
                monto={monto}
                fecha={fecha}
                orden={orden}
                alternarMostrar={onClick} />

            {
                mostrar &&

                <ModalDetalleDePagos
                    alternarMostrar={alternarMostrar}
                    mostrar={mostrar} />

            }
        </SuspenseCompontentsLoading>
    )

}


const ContextAcordion = memo(({ eventKey, callback, nombre, total }) => {

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

    const { queryParams } = useContext(QueryParamsContext)

    const { iniciarSort } = useAlgoritmoDeOrden(queryParams)

    return (
        <Col className={`${styles.accordionContenedor} border p-0`}>
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
                                        iniciarSort(item.pagos).map(item =>
                                            <AccordionBody
                                                key={item.id}
                                                {...item}
                                            />
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