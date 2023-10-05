export const obtenerFecha = () => {

    const fecha = new Date()

    const dia = fecha.getDay() + 1

    const mes = fecha.toLocaleString("es-ES", { month: "long" })

    const hora = fecha.getHours()

    const minutos = fecha.getMinutes()

    const segundos = fecha.getSeconds()


    return {
        dia,
        hora,
        minutos,
        segundos,
        mes
    }

};