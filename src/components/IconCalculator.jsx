import { useHotkeys } from "react-hotkeys-hook";

export const IconCalculator = ({ alternarMostrar, mostrar }) => {

    const KeyPress = () => {
        alternarMostrar()
    }

    const config = {
        keyup: true,
        preventDefault: true
    }

    useHotkeys("shift + f", KeyPress, config)

    const color = mostrar ? "#ccc" : "#555"

    return (
        <>
            <i
                onClick={alternarMostrar}
                style={{ width: "min-content", color, transition: "0.2s all ", cursor: "pointer" }}
                className="fa-solid fs-2 fa-calculator">

            </i>

        </>

    );

};