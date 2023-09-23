

export const separarNumerosConDecimales = (numero) => {

    const opciones = { style: 'decimal', useGrouping: true, minimumFractionDigits: 2, maximumFractionDigits: 3 };
    
    const nuevoNumero = numero.toLocaleString('es-ES', opciones)

    return nuevoNumero

}