import { Button, Col } from "react-bootstrap";
import { ColumnaInteractiva } from "./ColumnaInteractiva";
import { PlantillaCobro } from "./PlantillaCobro/PlantillaCobro";
import { PlantillaPagos } from "./PlantillaPagos";
import { PlantillaProductos } from "./PlantillaProductos/PlantillaProductos";
import { useEventoMostrar } from "../hooks/useEventoMostrar";
import { useEffect } from "react";


export const ContenedorPrincipal = ({ mostrarContenedor, alternarMostrarContenedor }) => {


    const { alternarMostrar, mostrar } = useEventoMostrar()

    useEffect(() => {

        const desactivarMostrar = (e) => {

            if (e.target.innerWidth >= 768 && mostrar) {

                alternarMostrar()
            }
        }

        window.addEventListener("resize", desactivarMostrar)

        return () => removeEventListener("resize", desactivarMostrar)

    }, [mostrar])

    return (
        <>


            {
                !mostrarContenedor &&

                <section
                    id="interface-cobros"
                    className='h-100  p-0 d-flex' >


                    <ColumnaInteractiva mostrar={mostrar}>
                        <Col className="overflow-hidden h-100  d-flex  flex-column">
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
