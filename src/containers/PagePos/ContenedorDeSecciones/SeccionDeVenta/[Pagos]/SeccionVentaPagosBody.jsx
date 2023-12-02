import MetodosDePagosCard from "@/containers//PagePos/ContenedorDeSecciones/SeccionDeVenta/[Pagos]/MetodosDePagoCard/MetodosDePagoCard";
import { TarifaContex, restoDelPagoContext } from "@/context//Contextos";
import { useContext } from "react";
import { Col } from "react-bootstrap";

const SeccionVentaPagosBody = () => {

    const { pagoActual, agregarResto, modificarResto, eliminarResto } = useContext(restoDelPagoContext)

    const { tarifaActual } = useContext(TarifaContex)

    const buscarResto = (id) => {
        const restoActual = pagoActual.find(item => item.id == id)

        return restoActual && restoActual.resto 
    }

    return (

        <Col className="flex-wrap d-flex align-items-center justify-content-center">

            {
                tarifaActual.metodosDePago.map(item =>
                    <MetodosDePagosCard
                        key={item.id}
                        eliminarResto={eliminarResto}
                        resto={buscarResto(item.id)}
                        id={item.id}
                        modificarResto={modificarResto}
                        agregarResto={agregarResto}
                        nombre={item.nombre}
                        tipo={item.tipo} />
                )
            }
        </Col>

    );
};


export default SeccionVentaPagosBody