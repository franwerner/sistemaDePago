import { Col } from "react-bootstrap";
import { ColumnaInteractiva } from "./ColumnaInteractiva";
import { PlantillaCobro } from "./PlantillaCobro/PlantillaCobro";
import { PlantillaPagos } from "./PlantillaPagos";
import { PlantillaProductos } from "./PlantillaProductos/PlantillaProductos";


export const ContenedorPrincipal = ({ mostrar, alternarMostrar }) => {

    return (
        <>
            {
                !mostrar &&

                <section id="interface-cobros" className='h-100  p-0 d-flex' >

                    <ColumnaInteractiva>
                        <Col className="overflow-hidden  h-100  d-flex  flex-column">
                            <PlantillaCobro />
                            <PlantillaPagos
                                alternarMostrar={alternarMostrar} />
                        </Col>
                    </ColumnaInteractiva>

                    <PlantillaProductos />

                </section>
            }

        </>

    )

};
