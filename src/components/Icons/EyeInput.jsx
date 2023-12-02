import  { memo } from "react";
import styles from "@/styles/EyeInput.module.css"


export const EyeInput = memo(({alternarMostrar,mostrar}) => {
    return (
        <div onClick={alternarMostrar} className={`${styles.iconEyeContainer} bg-white`}>
            <i className={`fa-regular fa-${mostrar ? "eye-slash" : "eye"} fs-4`}></i>
        </div>
    );
})