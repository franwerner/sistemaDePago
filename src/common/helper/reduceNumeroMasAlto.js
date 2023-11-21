
export const reduceNumeroMasAlto = ({ array = [], prop = "numero" }) => {

    return array.reduce((mayor, actual) => {
        return mayor[prop] < actual[prop] ? actual : mayor
    }, array[0])

};