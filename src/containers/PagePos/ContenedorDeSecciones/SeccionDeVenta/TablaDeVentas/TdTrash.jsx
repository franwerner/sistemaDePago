import styles from "@/styles/SeccionDeVenta.module.css"
import React from "react";

export const TdTrash = React.memo(({ borrarProducto, nombre }) => {
    return (

        <td className="p-0 text-center"  >
            <i
                onClick={() => borrarProducto({ nombre })}
                className={`${styles.tdIconTrash} zoom  fa-regular fa-trash-can fs-5`}></i>
        </td>
    );
})