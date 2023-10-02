import { useEffect, useState } from "react";

const calcularIntervalo = (numero = 0, onIntervalUpdate) => {
    let INITIAL_INTERVAL = 0;

    const intervalo = setInterval(() => {

        INITIAL_INTERVAL += 5;

        if (INITIAL_INTERVAL >= numero) {
            clearInterval(intervalo);
        }

        onIntervalUpdate(INITIAL_INTERVAL)

    }, 200)
};

export const useCalcularIntervalo = (numero) => {

    const [intervaloCalculado, setIntervaloCalculado] = useState(0);

    useEffect(() => {

        if (typeof numero !== "number") return

        calcularIntervalo(numero, setIntervaloCalculado)

    }, [numero]);


    return {
        intervaloCalculado
    }

}