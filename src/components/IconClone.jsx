import styles from "@/styles/iconClone.module.css"
import { useHotkeys } from "react-hotkeys-hook";

export const IconClone = ({ alternarMostrar, mostrar }) => {

    const rotacion = mostrar ? 0 : 180

    const config = {
        preventDefault: true
    }
    const pressKey = () => {
        alternarMostrar()
    }

    useHotkeys("tab", pressKey, config)

    return (
        <>

            <i style={{ rotate: `${rotacion}deg` }}
                onClick={alternarMostrar}
                className={`${styles.clone} fa-solid   fa-clone `}>
            </i>


        </>
    );
};