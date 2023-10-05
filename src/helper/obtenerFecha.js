export const obtenerFecha = () => {

    const fecha = new Date()

    const dia = fecha.getDay() + 1

    const mes = fecha.getMonth()

    const año = fecha.getFullYear()

    const hora = fecha.getHours()

    const minutos = fecha.getMinutes()

    const segundos = fecha.getSeconds()


    return {
        dia,
        hora,
        minutos,
        segundos,
        mes,
        año

    }

};