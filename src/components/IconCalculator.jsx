import { useHotkeys } from "react-hotkeys-hook";

export const IconCalculator = ({ alternarMostrar, mostrar }) => {

    // const KeyPress = () =>{

    // }
    // useHotkeys()

    const color = mostrar ? "#6EC89B" : "#555"

    return (
        <>
            <i
                onClick={alternarMostrar}
                style={{ left: "0.6%", width: "min-content", color,transition : "0.3s all "}}
                className="fa-solid position-absolute my-2  fs-2 d-block d-md-none fa-calculator">

            </i>

        </>

    );

};