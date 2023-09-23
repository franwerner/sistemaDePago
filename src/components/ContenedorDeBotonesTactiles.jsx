import { Button } from "react-bootstrap"
import styles from "@/styles/BotonesTactiles.module.css"
import { useHotkeys } from "react-hotkeys-hook"
import React, { useCallback, useContext, useState } from "react"
import { restoDelPagoContext } from "../context/Contextos"



const listaDeBotonesTactiles = [
    [1, 2, 3, "+100"],
    [4, 5, 6, "+250"],
    [7, 8, 9, "+500"],
    [["+/-", []], 0, [",", "Comma"], ["X", "Backspace"]]
]



export const TipoDeBotton = React.memo(({ tipo, clickeoBotones, accion }) => {

    const [alternarSigno, setAlternarSigno] = useState("-")


    const onClick = () => {

        if (tipo == "+/-" && alternarSigno == "+") {
            setAlternarSigno("-")
        } else {
            setAlternarSigno("+")
        }
        const t = Array.isArray(accion) ? alternarSigno : accion
        clickeoBotones(t)
    }

    return (
        <Button onClick={onClick} variant="dark" className=" fw-bolder rounded-0 ">
            {tipo}
        </Button>
    )
})

export const ContenedorDeBotonesTactiles = () => {

    const { modificarResto } = useContext(restoDelPagoContext)

    const [comma, setComma] = useState(false)

    const keys = [
        "backSpace",
        "BracketRight",
        "Comma",
        "Slash",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
    ]


    const clickeoBotones = useCallback((button) => {
    
        if (button == "Comma") setComma(prevComma => !prevComma)

        modificarResto({ tipoDeButton: button, comma })

    }, [comma, modificarResto])


    const handleKey = (e) => {

        if (e.key == ",") setComma(!comma)

        modificarResto({ tipoDeButton: e.key, comma })
    }

    useHotkeys(keys, handleKey, { keyup: true })

    return (
        <>

            <div className={`${styles.botonesTactiles}  my-3`}>
                {
                    listaDeBotonesTactiles.map((contenedor, index) =>

                        <div key={index}>

                            {
                                contenedor.map((numero, index) =>
                                    <TipoDeBotton
                                        tipo={numero[0] == undefined ? numero : numero[0]}
                                        accion={numero[1] == undefined ? numero : numero[1]}
                                        clickeoBotones={clickeoBotones}
                                        key={index} />
                                )
                            }
                        </div>
                    )
                }

            </div>

        </>
    )
}