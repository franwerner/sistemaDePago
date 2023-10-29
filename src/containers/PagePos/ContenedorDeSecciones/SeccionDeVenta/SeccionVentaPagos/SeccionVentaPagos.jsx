import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import styles from "@/styles/SeccionDeVenta.module.css"
import { IconClone } from "@/components//IconClone";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { CambioTotalMemoizado } from "@/hooks//useCalcularCambioTotal";
import { RestanteTotalMemoizando } from "@/hooks//useRestanteTotal";
import { ListaDeMetodosDePagos } from "@/components//ListaDeMetodosDePagos";
import TotalAVender from "@/components//TotalAVenderMemoizado";
import { MetodosDePagosAgregados } from "@/components//MetodosDePagosAgregados";
import { Link } from "react-router-dom";

const MetodosDePagosCard = () => {

    return (
        <Card className={`${styles.cardContainer} m-2 overflow-hidden`}>

            <Card.Title className="d-flex justify-content-between">
                <p className="m-2 mx-3"></p>
            </Card.Title>
            <Card.Img
                style={{ objectFit: "contain", minHeight: "90px" }}
                width={90}
                loading="lazy"
                decoding="async"
                height={110} src="https://static.vecteezy.com/system/resources/previews/011/033/490/non_2x/potatoes-isolated-no-background-png.png" />

            <Card.Body className=" p-0 m-0 d-flex flex-column  h-100 align-items-center ">

            </Card.Body>

        </Card>
    )

}

const SeccionVentaPagos = () => {
    return (
        <>
            <MetodosDePagosCard />
        </>
    );
};

export default SeccionVentaPagos
