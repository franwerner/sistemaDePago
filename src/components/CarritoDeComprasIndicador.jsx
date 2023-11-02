import React, { useContext, useEffect, useRef, useState } from "react";
import { productoReducerContext } from "../context/Contextos";
import styles from "@/styles/CarritoDeCompras.module.css"

const CarritoDeComprasIndicador = React.memo(() => {

    const { listaProducto } = useContext(productoReducerContext)

    const ref = useRef(null)

    useEffect(() => {

        if (!ref.current || listaProducto.length == 0) return

        ref.current.classList.add(styles.animationBg)

        const removeAnimation = () => {
            ref.current.classList.remove(styles.animationBg)
        }

        ref.current.addEventListener("animationend", removeAnimation)

        return () => {
            if (!ref.current) return
            ref.current.removeEventListener("animationend", removeAnimation)

        }
    }, [listaProducto.length])

    return (
        <>
            <span
                ref={ref}
                className={`${styles.carritoBg} position-absolute fw-bolder d-flex justify-content-center aling-items-center  text-white  rounded-circle`}>
                {listaProducto.length}
            </span>
            <i className="fa-solid fs-3 text-dark fa-cart-shopping"></i>
        </>
    );
})

export default React.memo(CarritoDeComprasIndicador)