import { Link, useLocation } from "react-router-dom"
import { primeraLetraMayuscula } from "@/helper/primeraLetraMayuscula"
import styles from "@/styles/Rutasinterface.module.css"
import { concatenacionDeRutas } from "../helper/concatenacionDeRutas"

export const RutasInterface = ({ color = "fff", textColor = "fff" }) => {

    const { pathname } = useLocation()

    const arrayRutas = pathname.split("/").filter(item => item.length !== 0)

    return (
        <>
            {
                arrayRutas.map((item, index) =>
                    <div
                        id={styles.ruta}
                        className="mt-1 position-relative "
                        key={index}>
                        <Link
                            style={{ textDecoration: "none", color: `#${textColor}` }}
                            key={index}
                            className="z-1 fs-6 ls-3 mx-1"
                            to={concatenacionDeRutas(index, arrayRutas)}>
                            /{primeraLetraMayuscula(item)}
                        </Link>
                        <span
                            style={{ borderBottom: `2px solid #${color}` }}
                            className="position-absolute z-1"
                            id={styles.linea}>
                        </span>
                    </div>

                )
            }
        </>
    )

}