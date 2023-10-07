import { Button, Col } from "react-bootstrap";
import { ColumnaInteractiva } from "./ColumnaInteractiva";
import { PlantillaCobro } from "./PlantillaCobro/PlantillaCobro";
import { PlantillaPagos } from "./PlantillaPagos";
import { PlantillaProductos } from "./PlantillaProductos/PlantillaProductos";
import { useEventoMostrar } from "../hooks/useEventoMostrar";


export const ContenedorPrincipal = ({ mostrarContenedor, alternarMostrarContenedor }) => {


    const { alternarMostrar, mostrar } = useEventoMostrar()


    const buttonText = mostrar ? "Ver Productos Seleccionados" : "Ver Productos"

    return (
        <>


            {
                !mostrarContenedor &&
                <>

                    <section
                        id="interface-cobros"
                        className='h-100  p-0 d-flex' >


                        <ColumnaInteractiva mostrar={mostrar}>
                            <Col className="overflow-hidden h-100  d-flex  flex-column">
                                <PlantillaCobro />
                                <PlantillaPagos
                                    mostrar={mostrar}
                                    alternarMostrar={alternarMostrar}
                                    alternarMostrarContenedor={alternarMostrarContenedor} />
                            </Col>
                        </ColumnaInteractiva>

                        <PlantillaProductos mostrar={mostrar} />

                    </section>
                </>


            }

        </>

    )

};
