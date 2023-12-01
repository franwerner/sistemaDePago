import styles from "@/styles/CarritoProductoVacio.module.css"

const CarritoDeProductoVacio = () => {
    return (

        <div className="d-flex  flex-column aling-items-center justify-content-center h-100 overflow-hidden">
            <i className={`fa-solid text-center animate__animated animate__bounceInLeft fa-cart-shopping ${styles.carrito}`}></i>
            <p className={` text-center fs-5 fw-bolder  ${styles.textoCarrito} `}>No hay productos selecionados</p>
        </div>

    )
}

export default CarritoDeProductoVacio