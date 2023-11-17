import { Stack } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import styles from "@/styles/OffCavansNavegacion.module.css"
import { memo } from "react"

export const ListadoDeSubRutas = memo(({ subruta, ruta, rutasArray }) => {

    const rutaLowerCase = ruta.toLocaleLowerCase()

    const verificaRuta = rutasArray.length == 1 && rutaLowerCase == subruta

    const verificarSubRuta = rutasArray.includes(subruta !== rutaLowerCase && subruta)

    const colorRuta = verificaRuta || verificarSubRuta ? "primary" : "ligthdark"

    const link = rutaLowerCase == subruta ? "" : subruta


    return (
        <Link
            style={{ textDecoration: "none" }}
            className={`text-${colorRuta}`}
            to={`${rutaLowerCase}/${link}`}>
            <Stack
                gap={2}
                direction="horizontal"
                className={`${styles.subRutas}`}
            >
                <i className="fa-solid  fa-minus"></i>
                <p className="m-0 text-uppercase">{subruta}</p>
            </Stack>
        </Link>
    )
})

export const SeccionSubRutas = memo(({ subRutas = [], ruta }) => {

    const { pathname } = useLocation()

    const filtradoDeRutas = pathname.split("/").filter(item => subRutas.includes(item))


    return (
        <>
            {
                subRutas.map(item =>

                    <ListadoDeSubRutas
                        rutasArray={filtradoDeRutas}
                        ruta={ruta}
                        subruta={item}
                        key={item} />
                )
            }
        </>
    )
})
