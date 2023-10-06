
import Swal from 'sweetalert2'
const listaDeErrores = [

    { codigo: "1B", motivo: "Contraseña incorrecta, por favor vuelve a intentarlo", tipo: "error" },
    { codigo: "2F", motivo: "Debe tener al menos un producto en la lista y el resto en $ 0,00", tipo: "warning" },
    { codigo: "3B", motivo: "El servidor no responde", tipo: "error" }

]

export const buscarCodigoDeMensajes = (datos = {}) => { //Esto sirve para cualquier mensaje de interaccion con el backEnd


    if (!datos.codigo) return

    const mensaje = listaDeErrores.find((mensaje) => mensaje.codigo === datos.codigo)

    if (mensaje) {

        const { codigo, motivo, tipo } = mensaje

        Swal.fire({
            position: 'top-end',
            icon: `${tipo}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            title: `Codigo #${codigo}`,
            backdrop: false,
            heightAuto: "100px",
            width: "300px",
            text: `${motivo}`,
            toast: true,
            timerProgressBar: true,
            currentProgressStep: true,
            showConfirmButton: false,
            timer: 2500
        })

        throw new Error(`Codigo  #${codigo}`)

    }



}