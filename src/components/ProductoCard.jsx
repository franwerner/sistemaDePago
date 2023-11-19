import { memo } from "react"
import styles from "@/styles/ProductoCard.module.css"
import { CalcularPorcentajeMemoizado } from "../hooks/useCalcularPorcentaje"
import { Card } from "react-bootstrap"
import { useEventoMostrar } from "../hooks/useEventoMostrar"
import { useFocusMouseElements } from "../hooks/useFocusMouseElements"


const CardFavorito = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <div
            id="contenedor-favorito"
            onClick={alternarMostrar}
            className=" bg-primary-2 rounded-bottom-3 mx-2 p-1 py-2 d-flex align-items-center ">
            <i className={`fa-star ${mostrar && "animate__animated animate__bounceInDown"} text-white ${mostrar ? "fa-solid" : "fa-regular"}`}></i>
        </div>
    )
}


const ProductoCard = memo(({ producto, agregarProducto }) => {

    const { precio, nombre, metodo } = producto

    const { onMouseEnter, refFocusElement } = useFocusMouseElements()

    const onClick = (e) => {

        if (e.target.id !== "contenedor-favorito" && e.target.tagName !== "I" ) {
            agregarProducto(producto)
        }

    }

    return (
        <Card
            tabIndex={0}
            ref={refFocusElement}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            className={`${styles.cardContainer} m-2 overflow-hidden`}>

            <Card.Title className="d-flex justify-content-between">
                <p className="m-2 text-primary-2 fs-6 mx-3">#1231</p>
                <CardFavorito />
            </Card.Title>

            <Card.Img
                sizes="(max-width: 500px) 100vw, (max-width: 1000px) 50vw, 33.3vw"
                alt={`${nombre}-$${precio}`}
                style={{ objectFit: "contain", minHeight: "90px" }}
                width={90}
                loading="lazy"
                decoding="async"
                height={110}
                src="https://static.vecteezy.com/system/resources/previews/011/033/490/non_2x/potatoes-isolated-no-background-png.png" />

            <Card.Body className=" p-0 m-0 d-flex flex-column  h-100 align-items-center ">


                <p style={{ maxHeight: "69px", whiteSpace: "pre-line" }}
                    className="fw-light m-0 text-center text-dark w-100 text-truncate">{nombre}</p>

                <p className="fw-semibold  text-truncate m-0 text-ligthdark">
                    $<CalcularPorcentajeMemoizado n1={precio} n2={precio} />/{metodo}
                </p>

            </Card.Body>

        </Card>
    )
})


export default ProductoCard