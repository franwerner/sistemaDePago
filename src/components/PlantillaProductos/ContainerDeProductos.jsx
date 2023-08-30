import { Col, Container } from "react-bootstrap";
import { ListaDeProductos } from "./ListaDeProductos";
import styles from "../../styles/PlantillaProductos.module.css"
import { useEffect, useState } from "react";

export const ContainerDeProductos = ({ seccion }) => {

    // const [maxHeight, setMaxHeight] = useState(850);

    // const [click, setClick] = useState(false)

    // useEffect(() => {

    //     const navbarHeight = document.querySelector('.navbar-toggler')

    //     const onClick = (e) => {

    //         if (!click) {
    //             setMaxHeight(maxHeight - 94);
    //         }
    //         else {
    //             setMaxHeight(850)
    //         }

    //         setClick(prevClick => !prevClick);
    //     }
    //     navbarHeight.addEventListener("click", onClick)

    //     return () => navbarHeight.removeEventListener("click", onClick)

    // }, [click]);
    
   
    return (
        <>
            <Container  className={` ${styles.contenedorProductos}  `}>
                <Col className="flex-wrap my-2 flex-grow-1 border border-danger flex d-flex justify-content-center justify-content-md-start" >
                    <ListaDeProductos seccion={seccion} />
                </Col>
            </Container>
        </>
    )
}
