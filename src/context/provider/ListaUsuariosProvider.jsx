import { useState } from "react"
import { listaUsuariosContext } from "../Contextos"


const listaDeUsuarios = [

    { "nombre": "Franco", "apellido": "Werner", "rol": "Administrador", "telefono": "343-565-4324", "contraseña": "1234" },
    { "nombre": "Joel", "apellido": "Werner", "rol": "Moderador", "telefono": "343-565-4324", "contraseña": "1234" },
    { "nombre": "Mariana", "apellido": "Werner", "rol": "Usuario", "telefono": "343-565-4324", "contraseña": "1234" },
    { "nombre": "Camila", "apellido": "Werner", "rol": "Usuario", "telefono": " 343-565-4324", "contraseña": "1234" }
]





export const ListaUsuariosProvider = ({ children }) => {

    const [usuarioActual, setUsuarioActual] = useState(listaDeUsuarios[0])
    

    const cambiarUsuario = (usuario) => {
            setUsuarioActual(usuario)
    }

    return (
        <>
            <listaUsuariosContext.Provider value={{
                usuarioActual,
                cambiarUsuario,
                listaDeUsuarios
            }}>
                {children}
            </listaUsuariosContext.Provider>
        </>
    )
}