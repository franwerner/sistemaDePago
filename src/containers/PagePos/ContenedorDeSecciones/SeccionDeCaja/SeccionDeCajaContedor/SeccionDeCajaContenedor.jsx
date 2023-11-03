import { Col} from "react-bootstrap";
import styles from "@/styles/SeccionDeCaja.module.css"
import { SeccionDeCajaContenedorHead } from "./SeccionDeCajaContenedorHead";
import { SeccionDeCajaContenedorBody } from "./SeccionDeCajaContenedorBody";
import { SeccionDeCajaContenedorFooter } from "./SeccionDeCajaContenedorFooter";



export const SeccionDeCajaContenedor = () => {
    return (
        <>
            <Col className="h-100 d-flex flex-column  scrollBarPersonalizada  shadow border border-1 ">

                <SeccionDeCajaContenedorHead />

                <SeccionDeCajaContenedorBody />

                <div className="border-bottom p-0 ">
                    <p className={`${styles.borderControlEfectivo} bg-white p-2 m-0 border border-bottom-0 fw-medium `}>Control de efectivo</p>
                </div>

                <SeccionDeCajaContenedorFooter />

            </Col>
        </>
    );
};
