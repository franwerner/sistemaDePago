import { Button } from "react-bootstrap"
import styles from "@/styles/BotonesTactiles.module.css"
import { useHotkeys } from "react-hotkeys-hook"
import React, { useCallback,useState } from "react"

const listaDeBotonesTactiles = [
    ["1", "2", "3", ["+100", 100]],
    ["4", "5", "6", ["+250", 250]],
    ["7", "8", "9", ["+500", 500]],
    [["+/-", ["signos"]], "0", [",", "Comma"], ["X", "Backspace"]]
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


const ButtonTactil = React.memo(({ tipo, clickeoBotones, nombre }) => {

    const [alternarSigno, setAlternarSigno] = useState("-")



    const onClick = () => {

        const signos = tipo[0] == "signos"

        if (signos && alternarSigno == "+") {

            setAlternarSigno("-")
        } else {
            setAlternarSigno("+")
        }

        const resultado = signos ? alternarSigno : tipo

        clickeoBotones(resultado)
    }

    return (
        <Button onClick={onClick} variant="dark" className=" fw-bolder rounded-0 ">
            {nombre}
        </Button>
    )
})

export const ContenedorDeBotonesTactiles = ({ funcionDefault }) => {

    const [comma, setComma] = useState(false)

    const clickeoBotones = useCallback((button) => {

        if (button == "Comma") setComma(prevComma => !prevComma)

        funcionDefault({ tipoDeButton: button, comma })

    }, [comma, funcionDefault])


    const handleKey = (e) => {

        if (e.key == ",") setComma(!comma)

        funcionDefault({ tipoDeButton: e.key, comma })
    }

    useHotkeys(keysPress, handleKey, { keyup: true })

    return (
        <>

            <div className={`${styles.botonesTactiles}  my-3`}>
                {
                    listaDeBotonesTactiles.map((contenedor, index) =>

                        <div key={index}>

                            {
                                contenedor.map((numero, index) =>
                                    <ButtonTactil
                                        nombre={numero[0] == undefined ? numero : numero[0]}
                                        tipo={numero[1] == undefined ? numero : numero[1]}
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