import React, { lazy, useCallback, useContext, useState } from "react"
import { listaUsuariosContext } from "@/context/Contextos"
import { useEventoMostrar } from "@/hooks/useEventoMostrar"
import { Table } from "react-bootstrap"
import { compararDatoSeleccionado } from "@/helper/compararDatoSeleccionado"
import { SuspenseLoading } from "@/components//SuspenseLoading"

const ContenedorUsuarioSeleccionado = lazy(() => import("./ContenedorUsuarioSeleccionado"))

const Usuarios = React.memo(({ seleccionarUsuario, usuario, usuarioActual }) => {

    const { nombre, apellido, telefono, rol, id } = usuario

    const { background, color } = compararDatoSeleccionado(id, usuarioActual.id)

    const onClick = () => {
        seleccionarUsuario(usuario)
    }

    return (
        <>
            <tr onClick={onClick}>
                <td style={{ background, color }}>{nombre}</td>
                <td style={{ background, color }}>{apellido}</td>
                <td style={{ background, color }}>{telefono}</td>
                <td style={{ background, color }}>{rol}</td>
            </tr>

        </>
    )

})

export const ListaDeUsuarios = ({ cerrarTodo }) => {

    const { listaDeUsuarios, usuarioActual } = useContext(listaUsuariosContext)

    const { mostrar, alternarMostrar } = useEventoMostrar()

    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState("")

    const onClick = useCallback((usuario) => {
        alternarMostrar()
        setUsuarioSeleccionado(usuario)
    }, [])

    return (
        <>
            <Table hover responsive >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>

                    {listaDeUsuarios.map(usuario =>

                        <Usuarios
                            key={usuario.id}
                            usuario={usuario}
                            seleccionarUsuario={onClick}
                            usuarioActual={usuarioActual}

                        />
                    )}



                </tbody>
            </Table>


            {
                mostrar &&
                <SuspenseLoading>
                    <ContenedorUsuarioSeleccionado
                        cerrarTodo={cerrarTodo}
                        mostrar={mostrar}
                        usuarioSeleccionado={usuarioSeleccionado}
                        alternarMostrar={alternarMostrar}
                    />
                </SuspenseLoading>
            }

        </>
    )
}