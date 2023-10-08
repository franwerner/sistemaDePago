

export const IconCalculator = ({ alternarMostrar, mostrar }) => {


    const color = mostrar ? "#ccc" : "#555"

    return (
            <i
                onClick={alternarMostrar}
                style={{ width: "min-content", color, transition: "0.2s all ", cursor: "pointer" }}
                className="fa-solid fs-2 fa-calculator">

            </i>
    );

};