import Swal from 'sweetalert2'


const listDeMensajes = [

    { codigo: "1B", motivo: "Contraseña incorrecta, por favor vuelve a intentarlo", tipo: "warning" },
    { codigo: "2F", motivo: "Debe tener al menos un producto en la lista y el resto en $ 0,00", tipo: "warning" },
    { codigo: "3B", motivo: "El servidor no responde", tipo: "error" },
    { codigo: "3F", motivo: "Venta realizada exitosamente", tipo: "success" },
    { codigo: "4F", motivo: "Algunos productos seleccionados no tienen un lote asignado actualmente. Si procedes, se registrarán como pendientes. ", tipo: "warning" },
    { codigo: "6F", motivo: "Re-impresion exitosa.", tipo: "success" },

]

const buscarCodigoMensajePersonalizado = (datos) => {


    if (!datos.codigo) return

    const mensaje = listDeMensajes.find((mensaje) => mensaje.codigo === datos.codigo)


    if (mensaje) {

        const { codigo, motivo, tipo } = mensaje

        const verificarSiEsUnError = tipo !== "error" ? "" : `Codigo #${codigo}`

        Swal.fire({
            position: 'top-end',
            icon: `${tipo}`,
            title: `${verificarSiEsUnError}`,
            html: `<p class="text-justify ">${motivo}</p>`,
            toast: true,
            timerProgressBar: true,
            currentProgressStep: true,
            showCloseButton: true,
            showConfirmButton: false,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
            timer: 3500,
        })

    }

}
export default buscarCodigoMensajePersonalizado