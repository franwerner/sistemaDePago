import { Button } from "react-bootstrap"
import styles from "@/styles/BotonesTactiles.module.css"
import { useHotkeys } from "react-hotkeys-hook"
import React, { useCallback } from "react"
import { useAlternarComas } from "@/hooks/useAlternarComas"
import { alternarSignos } from "../helper/alternarSignos"
import { verificarSiEsNegativo } from "../helper/verificarSiEsNegativo"

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


const ButtonTactil = React.memo(({ tipo, nombre, onClick }) => {

    const onClickeo = (e) => {

        onClick(e, tipo)
    }

    return (
        <Button onClick={onClickeo} name={nombre} variant="dark" className=" fw-bolder rounded-0 ">
            {nombre}
        </Button>
    )
})

export const ContenedorDeBotonesTactiles = React.memo(({ modificadorDefault, numeroDefault, arrayButtons = listaDeBotonesTactiles }) => {

    const esNegativo = verificarSiEsNegativo(numeroDefault)

    const { alternarComas, comma } = useAlternarComas()

    const onClick = useCallback(({ target }, tipo) => {

        alternarComas(target.name)

        const signos = target.name == "+/-" ? true : false

        const resultado = signos ? alternarSignos(esNegativo) : tipo

        modificadorDefault(
            {
                tipoDeButton: resultado,
                comma: comma,
            }
        )
    }, [esNegativo, comma, modificadorDefault])

    const handleKey = (e) => {

        alternarComas(e.key)

        modificadorDefault({ tipoDeButton: e.key, comma: comma })
    }

    useHotkeys(keysPress, handleKey, { keyup: true })

    return (

        <div className={`${styles.botonesTactiles} `}>
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



