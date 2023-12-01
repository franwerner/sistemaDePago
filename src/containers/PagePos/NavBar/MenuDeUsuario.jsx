import { SuspenseCompontentsLoading } from "@/components//Suspense/SuspenseCompontentsLoading"
import { useEventoMostrar } from "@/hooks//useEventoMostrar"
import { usuarioInfo } from "@/styles/NavBarPos.module.css"
import { lazy } from "react"

const DropDownUsuario = lazy(() => import("@/components/DropwDownUsuario"))

export const MenuDeUsuario = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    const rotacion = mostrar ? 180 : 0

    return (
        <div className="w-100 d-flex position-relative">
            <SuspenseCompontentsLoading>
                <div
                    id={usuarioInfo}
                    onClick={alternarMostrar}
                    className=" me-md-1 cursor-pointer ">
                    <p className="fw-semibold m-0  text-truncate text-ligthdark">Franco Werner</p>
                    <div className="d-flex">
                        <p className="m-0 text-start me-2 ">Empleado</p>
                        <i
                            style={{ rotate: `${rotacion}deg` }}
                            className="fa-solid fa-sort-down text-ligthdark"></i>
                    </div>
                </div>

                {mostrar && <DropDownUsuario mostrar={mostrar} />}
            </SuspenseCompontentsLoading>

        </div>
    )
}