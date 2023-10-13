import { Col } from "react-bootstrap";
import { ColumnaInteractiva } from "./ColumnaInteractiva";
import { PlantillaCobro } from "./PlantillaCobro/PlantillaCobro";
import { PlantillaPagos } from "./PlantillaPagos/PlantillaPagos";
import { PlantillaProductos } from "./PlantillaProductos/PlantillaProductos";
import { useEventoMostrar } from "../hooks/useEventoMostrar";
import { useAltenarModoResponsive } from "../hooks/useAltenarModoResponsive";


export const ContenedorPrincipal = ({ mostrarContenedor, alternarMostrarContenedor }) => {


    const { alternarMostrar, mostrar } = useEventoMostrar()

    useAltenarModoResponsive({ mostrar, alternarMostrar })
    const onHide = mostrar ? "d-flex" : "d-none"

    return (
        <>


            {
                !mostrarContenedor &&

                <section
                    id="interface-cobros"
                    className='h-100  p-0 d-flex' >


                    <ColumnaInteractiva mostrar={mostrar}>
                        <Col className="overflow-hidden  d-flex  flex-column">
                            <PlantillaCobro />
                            <PlantillaPagos
                                alternarMostrar={alternarMostrar}
                                alternarMostrarContenedor={alternarMostrarContenedor} />
                        </Col>
                    </ColumnaInteractiva>

                    <PlantillaProductos
                        alternarMostrarContenedor={alternarMostrarContenedor}
                        alternarMostrar={alternarMostrar} />


                </section>



            }

        </>

    )

};
