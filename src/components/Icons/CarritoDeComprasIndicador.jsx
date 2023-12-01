import React, { useContext, useEffect, useRef } from "react";
import { productoReducerContext } from "../../context/Contextos";
import styles from "@/styles/CarritoDeCompras.module.css"
import { Link } from "react-router-dom";

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
       <Link to={"/pos/venta"}>
        <div className="position-relative cursor-pointer  zoom">
            <span
                ref={ref}
                className={`${styles.carritoBg} position-absolute fw-bolder d-flex justify-content-center aling-items-center  text-white  rounded-circle`}>
                {listaProducto.length}
            </span>
            <i style={{fontSize : "30px"}} className="fa-solid text-ligthdark fa-cart-shopping"></i>
        </div>
       </Link>
    );
})

export default React.memo(CarritoDeComprasIndicador)