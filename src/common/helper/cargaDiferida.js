
/*
+Este enfoque solo sirve para funciones que no necesitan retornar un valor
+
+Se debe pasar como argumento un callback.
+
+Las funciones que necesiten usar la cargaDiferia deberan exportarse por default.
+
+**Ejemplo**
+
+
+const nombreDelArchivo = await cargaDiferida(() => import("@/helper//buscarCodigoDeMensajes"))
+
*/


export const cargaDiferida = (importacion = () => { }) => {

    const cargar = async () => {
        const res = await importacion().then(resultado => resultado)
        return res.default
    }

    const ejecutar = async (props) => {

        const CopiaProps = props

        const fx = await cargar()

        return fx(CopiaProps)
    }

    return ejecutar


};