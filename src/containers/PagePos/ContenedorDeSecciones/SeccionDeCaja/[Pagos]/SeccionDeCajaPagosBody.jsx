import { Accordion, Col } from "react-bootstrap";

const metodosDePagosTest = [
    { id: 1, qr: [{ id: 1, monto: 1000 }, { id: 3, monto: 1000 }, { id: 2, monto: 1000 }], total: 3000 },
    { id: 2, transferencia: [{ id: 1, monto: 1000 }, { id: 3, monto: 1000 }, { id: 2, monto: 1000 }], total: 6900 },
    { id: 3, efectivo: [{ id: 1, monto: 1000 }, { id: 3, monto: 1000 }, { id: 2, monto: 1000 }], total: 2000 },

]

export const SeccionDeCajaPagosBody = () => {


    return (
        <>
            <Col className="">
                <Accordion>
                    
                </Accordion>
            </Col>
        </>
    );
};