import Swal from 'sweetalert2'


const listDeMensajes = [

    { codigo: "1B", motivo: "Contraseña incorrecta, por favor vuelve a intentarlo", tipo: "warning" },
    { codigo: "2F", motivo: "Debe tener al menos un producto en la lista y el resto en $ 0,00", tipo: "warning" },
    { codigo: "3B", motivo: "El servidor no responde", tipo: "error" },
    { codigo: "3F", motivo: "Venta realizado exitosamente", tipo: "success" }

]

const buscarCodigoDeMensajes = (datos = {}) => {

    if (!datos.codigo) return

    const mensaje = listDeMensajes.find((mensaje) => mensaje.codigo === datos.codigo)

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
            timer: 2500
        })

        return true

    } else {
        return false
    }



}
export default buscarCodigoDeMensajes