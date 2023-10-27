import BuscadorInput from "@/components//BuscadorInput";
import { Button, Col } from "react-bootstrap";
import styles from "@/styles/SeccionDeVenta.module.css"
import { BotonTarifas } from "@/components//BotonTarifas";

const ContenedorDeNav = () => {

    
    return (
        <>
            <Col className="d-flex align-items-center">
    
            </Col>

            {/* 
            <Col xs={4} className="p-0 d-flex justify-content-center align-items-center">
                <Button type="button" variant="none" className={`${styles.botonCarrito}  border-0 px-4 py-2 shadow-sm`}>
                    <i className="fa-solid mx-2 fa-cart-shopping"></i>
                    <span>Agregar</span>
                </Button>
            </Col> */}
         
            {/* <Col  className="d-flex  align-items-center ">
                <BotonTarifas />
            </Col> */}
           
            <Col xs={4} className="p-0 d-flex mx-3 bg-dangerd-flex justify-content-center align-items-center">
                <BuscadorInput />
            </Col>
        </>
    )
}

export default ContenedorDeNav