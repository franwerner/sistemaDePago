import { Button } from "react-bootstrap"
import styles from "@/styles/BotonesTactiles.module.css"
import { useHotkeys } from "react-hotkeys-hook"
import React, { useCallback, useEffect, useState } from "react"
import { useAlternarComas } from "@/hooks/useAlternarComas"
import { VerificarSiEsUnOperador } from "../helper/VerificarSiEsUnOperador"

const listaDeBotonesTactiles = [
    ["1", "2", "3", ["+100", "+100"]],
    ["4", "5", "6", ["+250", "+250"]],
    ["7", "8", "9", ["+500", "+500"]],
    ["+/-", "0", [",", "Comma"], ["X", "Backspace"]]
]


const keysPress = [
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


const ButtonTactil = React.memo(({ nombre, onClick, tipo }) => {

    const click = () => {
        onClick(tipo)
    }
    return (
        <Button onClick={click}
            name={nombre}
            variant="dark"
            className=" fw-bolder rounded-0 ">
            {nombre}
        </Button>
    )
})


export const ContenedorDeBotonesTactiles = React.memo(({ modificadorDefault, arrayButtons = listaDeBotonesTactiles }) => {


    const { alternarComas, comma } = useAlternarComas()

    const [actualButton, setButton] = useState("")

    useEffect(() => {

        if (actualButton.length == 0) return

        modificadorDefault(
            {
                tipoDeButton: actualButton,
                comma: comma,
            }
        )
        setButton("")

    }, [comma, actualButton])

    const onClick = useCallback(tipo => {

        alternarComas(tipo)
        setButton(tipo)

    }, [])

    const handleKey = (e) => {

        const verificacion = VerificarSiEsUnOperador(e.key) ? "+/-" : e.key

        alternarComas(e.key)

        setButton(verificacion)

    }

    useHotkeys(keysPress, handleKey, { keyup: true })

    return (

        <div className={`${styles.botonesTactiles}  `}>
            {
                arrayButtons.map((contenedor, index) =>

                    <div key={index}>

                        {
                            contenedor.map((numero, index) =>

                                <ButtonTactil
                                    nombre={typeof numero == "string" ? numero : numero[0]}
                                    tipo={typeof numero == "string" ? numero : numero[1]}
                                    onClick={onClick}
                                    key={index} />
                            )
                        }
                    </div>
                )
            }

        </div>

    )
})



