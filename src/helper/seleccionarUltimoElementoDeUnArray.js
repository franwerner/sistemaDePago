
export const seleccionarUltimoElementoDeUnArray = (array) => {

    const largo = array.length

    if (array == 0) return ""

    return array[largo - 1]

}