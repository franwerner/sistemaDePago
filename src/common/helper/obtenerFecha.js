import { AgregarCerosANumeros } from "./AgregarCerosANumeros";

export const obtenerFecha = (fechaMiliseconds) => {

    const obtenerFecha = fechaMiliseconds ? new Date(fechaMiliseconds) : new Date()

    const concatenar = (input) => AgregarCerosANumeros({ numero: input, digitos: 2 })

    const dia = concatenar(obtenerFecha.getDay() + 1)

    const mes = concatenar(obtenerFecha.getMonth() + 1)

    const año = obtenerFecha.getFullYear()

    const hora = concatenar(obtenerFecha.getHours())

    const minutos = concatenar(obtenerFecha.getMinutes())

    const segundos = concatenar(obtenerFecha.getSeconds())

    const opciones = { month: 'long' };
    const nombreMes = new Intl.DateTimeFormat('es-ES', opciones).format(obtenerFecha);


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