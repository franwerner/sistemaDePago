
import { Col } from "react-bootstrap";
import styles from "../../styles/PlantillaProductos.module.css"
import { ContainerDeProductos } from "./ContainerDeProductos";
import { useSeccion } from "../../hooks/useSeccion";
import { SeccionesProductos } from "./SeccionesProductos";

export const PlantillaProductos = () => {

    const { seccion, elegirSeccion, seccionesProductos } = useSeccion()

    return (
        <>
            <Col className={`p-0  ${styles.PlantillaProductos}`}>
                <SeccionesProductos seccion={seccion} elegirSeccion={elegirSeccion} seccionesProductos = {seccionesProductos}></SeccionesProductos>
                <ContainerDeProductos seccion={seccion}></ContainerDeProductos>
              
            </Col>

        </>
    );

};