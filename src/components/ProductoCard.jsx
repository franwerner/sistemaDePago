import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales"
import { useCalculadoraPorcenje } from "@/hooks/useCalcularPorcentaje"
import React from "react"
import { OverlayDefault } from "./OverlayDefault"
import styles from "@/styles/ProductoCard.module.css"

const CalculaPorcentaje = React.memo(({ precio }) => {

    const porcentaje = useCalculadoraPorcenje(precio)

    const resultado = porcentaje + precio

    const separacion = separarNumerosConDecimales(resultado)

    return separacion
})

const Precio = React.memo(({ precio }) => {

    return (
        <div className={` text-white d-flex justify-content-end z-1 ${styles.productoPrecio}`}>
            <OverlayDefault
                overlayCustom={<CalculaPorcentaje precio={precio} />}
                position="top" >

                <p className="rounded-1 text-truncate  m-1 px-1">
                    $ <CalculaPorcentaje precio={precio} />
                </p>

            </OverlayDefault>
        </div>
    )

})


export const ProductoCard = React.memo(({ producto }) => {

    const { precio, nombre } = producto

    return (
        <>

            <Precio precio={precio}></Precio>

            <div className={` d-flex  w-100 justify-content-center position-absolute  h-100  align-items-center flex-grow-1 ${styles.ImgPhoto}`}>
                <i className="fa-solid fa-camera"></i>
            </div>

            <p className={`text-center overflow-hidden position-absolute text-break w-100 ${styles.productoNombre}`} >
                {nombre}
            </p>

        </>
    )
})