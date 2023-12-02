import { Row } from "react-bootstrap";
import { SeccionDeInventarioBody } from "./SeccionDeInventarioBody";
import styles from "@/styles/SeccionDeInventario.module.css"
import { SeccionDeInventarioNav } from "./SeccionDeInventarioNav";

const SeccionDeInventario = () => {
    return (
        <>
            <Row 
            id={styles.inventarioNav}
                className="m-0 shadow d-flex p-2 p-md-3  align-items-center  justify-content-between">
                <SeccionDeInventarioNav />
            </Row>
            <Row  className="m-0 h-100 scrollBarPersonalizada">
                <SeccionDeInventarioBody />
            </Row>
        </>
    );
};


export default SeccionDeInventario