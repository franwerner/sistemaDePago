
const validarUsuarioFetch = async (usuario) => {

    try {
        const body = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(usuario)
        }

        const apiResponse = await fetch("https://jsonplaceholder.typisscode.com/todos/1")

        if (!apiResponse.ok) throw new Error

        const responsee = await apiResponse.json()

        return responsee

    } catch (error) {

        return { codigo: "1B" }
    }

}

export default validarUsuarioFetch