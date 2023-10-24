import React from "react"
import styles from "@/styles/ProductoCard.module.css"
import { CalcularPorcentajeMemoizado } from "../hooks/useCalcularPorcentaje"
import { Card } from "react-bootstrap"
import { useEventoMostrar } from "../hooks/useEventoMostrar"


const CardFavorito = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <div onClick={alternarMostrar} className=" rounded-bottom-3 mx-2 p-1 py-2 d-flex align-items-center ">
            <i className={`fa-star ${mostrar && "animate__animated animate__bounceInDown"} text-white ${mostrar ? "fa-solid" : "fa-regular"}`}></i>
        </div>
    )
}


const ProductoCard = React.memo(({ producto, agregarProducto }) => {

    const { precio, nombre, metodo } = producto

    return (
        <Card onClick={agregarProducto} className={`${styles.cardContainer} m-2 overflow-hidden`}>

            <Card.Title className="d-flex justify-content-between">
                <p className="m-2 mx-3">#1231</p>
                <CardFavorito />
            </Card.Title>
            <Card.Img
                style={{ objectFit: "contain" }}
                width={90}
                loading="lazy"
                decoding="async"
                height={110} src="https://static.vecteezy.com/system/resources/previews/011/033/490/non_2x/potatoes-isolated-no-background-png.png" />

            <Card.Body className=" p-0 m-0 d-flex flex-column  h-100 align-items-center ">

                <p  style={{maxHeight : "40px",whiteSpace : "pre-line"}} className="fw-light m-0 text-center text-dark text-truncate flex-grow-1 w-100">{nombre}</p>
                <p className={`${styles.cardPrecio} fw-semibold  text-truncate m-0`}>$<CalcularPorcentajeMemoizado n1={precio} n2={precio} />/{metodo}</p>

            </Card.Body>

        </Card>
    )
})


export default ProductoCard