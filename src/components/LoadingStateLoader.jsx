import styles from "@/styles/LoadingStateLoader.module.css"
import { Spinner } from "react-bootstrap";
import { useNavigation } from "react-router-dom";

export const LoadingStateLoader = ({ texto, condicional  = true}) => {
    const { state } = useNavigation();

    return (
        <>
            {
                (state == "loading" && condicional) &&
                <div
                style={{top : "0%",left : "0%"}}
                 id={styles.spinnerCargador}
                    className=" h-100 position-absolute z-1 d-flex flex-column justify-content-center align-items-center w-100">

                    <Spinner
                        animation="border"
                        variant="white" />
                    <span className="text-white  fw-bolder ls-3">Cargando {texto}...</span>
                </div>

            }
        </>

    )

};