import { useEffect } from "react";

export const useAltenarModoResponsive = ({ mostrar, alternarMostrar }) => {

    useEffect(() => {

        const desactivarMostrar = (e) => {

            if (e.target.innerWidth >= 768 && mostrar) {

                alternarMostrar()
            }
        }

        window.addEventListener("resize", desactivarMostrar)

        return () => removeEventListener("resize", desactivarMostrar)

    }, [mostrar])

};