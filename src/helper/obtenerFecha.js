export const obtenerFecha = () => {

    const fecha = new Date()

    const dia = fecha.getDay() + 1

    const mes = fecha.getMonth() + 1

    const año = fecha.getFullYear()

    const hora = fecha.getHours()

    const minutos = fecha.getMinutes()

    const segundos = fecha.getSeconds()

    const opciones = { month: 'long' };
    const nombreMes = new Intl.DateTimeFormat('es-ES', opciones).format(fecha);


    return {
        dia,
        hora,
        minutos,
        segundos,
        mes,
        año,
        nombreMes

    }

};