import styles from "@/styles/SeccionDeVenta.module.css"
import React from "react";

export const TdTrash = React.memo(({ borrarProducto, nombre }) => {
    return (

        <td>
            <i
                onClick={() => borrarProducto({ nombre })}
                className={`${styles.tdIconTrash}  fa-regular fa-trash-can fs-5`}></i>
        </td>
    );
})