
import Swal from 'sweetalert2'
const listaDeErrores = [

    { codigo: "1B", motivo: "Contraseña incorrecta, por favor vuelve a intentarlo", tipo: "warning" },
    { codigo: "2F", motivo: "Debe tener al menos un producto en la lista y el resto en $ 0,00", tipo: "warning" },
    { codigo: "3B", motivo: "El servidor no responde", tipo: "error" },
    { codigo: "3F", motivo: "Venta realizado exitosamente", tipo: "success" }

]

export const buscarCodigoDeMensajes = (datos = {}) => { //Esto sirve para cualquier mensaje de interaccion con el backEnd

    if (!datos.codigo) return

    const mensaje = listaDeErrores.find((mensaje) => mensaje.codigo === datos.codigo)

    if (mensaje) {

        const { codigo, motivo, tipo } = mensaje

        const verificarSiEsUnError = tipo !== "error" ? "" : `Codigo #${codigo}`

        Swal.fire({
            position: 'top-end',
            icon: `${tipo}`,
            title: `${verificarSiEsUnError}`,
            text: `${motivo}`,
            toast: true,
            timerProgressBar: true,
            currentProgressStep: true,
            showCloseButton: true,
            showConfirmButton: false,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer)
                toast.addEventListener("mouseleave", Swal.resumeTimer)
            },
            timer: 2000
        })

        return true

    } else {
        return false
    }



}