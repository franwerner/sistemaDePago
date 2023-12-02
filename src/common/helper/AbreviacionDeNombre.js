export const AbreviacionDeNombre = (input = "") => {


    const split = input.split(" ")

    let concatenacion = ""

    for (let i = 0; i < split.length; i++) {
        if (i == 0) {
            concatenacion += split[i]
        }
        else {
            concatenacion += " " + split[i][0] + "."
        }
    }

    return concatenacion


};