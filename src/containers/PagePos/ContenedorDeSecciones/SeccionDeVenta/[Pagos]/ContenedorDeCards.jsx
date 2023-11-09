import MetodosDePagosCard from "@/components//MetodosDePagoCard";
import { TarifaContex, restoDelPagoContext } from "@/context//Contextos";
import { useContext } from "react";
import { Stack } from "react-bootstrap";

const ContenedorDeCards = () => {

    const { pagoActual, agregarResto, modificarResto } = useContext(restoDelPagoContext)

    const { tarifaActual } = useContext(TarifaContex)

    const buscarResto = (id) => {
        const restoActual = pagoActual.metodosDePago.find(item => item.id == id)

        return restoActual ? restoActual.resto : 0
    }

    return (

        <Stack
            gap={3}
            className="flex-wrap justify-content-center"
            direction="horizontal">

            {
                tarifaActual.metodosDePago.map(item =>
                    <MetodosDePagosCard
                        key={item.id}
                        resto={buscarResto(item.id)}
                        id={item.id}
                        modificarResto={modificarResto}
                        agregarResto={agregarResto}
                        nombre={item.nombre}
                        tipo={item.tipo} />
                )
            }
        </Stack>

    );
};


export default ContenedorDeCards