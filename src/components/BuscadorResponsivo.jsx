import { useState } from "react"
import { Col } from "react-bootstrap"
import BuscadorInput from "./BuscadorInput"
import { useSearchParams } from "react-router-dom"



export const BuscadorResponsivo = ({ children, texto, size = "md" }) => { //Podria pasar un array con las propiedades que quiero tener en cuenta y mostrar, y otro el cual diga que propiedades tendra en cuenta el servidor.

    const [mostrar, alternarMostrar] = useState(false)

    const [search, setSearch] = useSearchParams()

    const verificar = mostrar ? "w-100 position-absolute p-2 px-3" : "p-0"

    const handleAlternate = (boolean) => {
        !boolean && setTimeout(() => {
            setSearch("")
        }, 600);
        alternarMostrar(boolean)
    }

    return (
        <Col
            xs="auto"
            className={`${verificar} d-flex bg-white  align-items-center`}>

            {
                mostrar && <i
                    onClick={() => handleAlternate(false)}
                    className="fa-solid ms-2 rounded-circle bg-hoverdark cursor-pointer bg-white p-2 mx- text-ligthdark fs-5 fa-left-long"></i>
            }

            <div
                className="w-100 position-relative mx-1"
                onClick={() => handleAlternate(true)} >

                {
                    !mostrar && <i
                        style={{ background: "#F0F2F5", padding: "13px" }}
                        className="fa-solid text-ligthdark cursor-pointer d-md-none  fs-6 rounded-circle mx-1 fa-magnifying-glass "></i>
                }

                <span className={`${mostrar ? "d-inline" : "d-none"} d-${size}-inline`}>
                    {
                        <BuscadorInput texto={texto} />
                    }
                </span>

                {
                    children
                }

            </div>

        </Col>
    )
}