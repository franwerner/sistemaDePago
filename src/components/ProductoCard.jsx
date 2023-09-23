import { separarNumerosConDecimales } from "@/helper/separarNumerosConDecimales"
import { useCalculadoraPorcenje } from "@/hooks/useCalcularPorcentaje"
import React from "react"
import { OverlayDefault } from "./OverlayDefault"
import styles from "@/styles/ProductoCard.module.css"


const Precio = React.memo(({ precio }) => {

    const porcentaje = useCalculadoraPorcenje(precio)

    const resultado = porcentaje + precio

    const separacion = separarNumerosConDecimales(resultado)
    return (
        <><div className={` text-white d-flex justify-content-end ${styles.productoPrecio}`}>
            <OverlayDefault
                overlayCustom={separacion}
                position="top" >

                <p className="rounded-1 m-1 px-1">
                    $ {separacion}
                </p>

            </OverlayDefault>
        </div>
        </>
    )

})


export const ProductoCard = React.memo(({ producto }) => {


    const { precio, nombre } = producto

    return (
        <>

            <Precio precio={precio}></Precio>

            <div className={`border d-flex w-100 justify-content-center position-absolute  h-100  align-items-center flex-grow-1 ${styles.ImgPhoto}`}>
                <i className="fa-solid fa-camera"></i>
            </div>

            <p className={`text-center overflow-hidden position-absolute w-100 ${styles.productoNombre}`} >
                {nombre}
            </p>

        </>
    )
})