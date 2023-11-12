
const notaTest = "Edite un producto por que estaba mal cargado"

const notaTest2 = ""

const NotaVacia = () => {
    return (
        <p className="m-0">No hay ninguna nota escrita...</p>
    )
}

const NotaEscrita = ({ texto }) => {

    return (
        <p className="m-0">{texto}</p>
    )

}

const NotaDeLaCompra = () => {

    return (
        <div className="d-flex justify-content-center align-items-center p-5 ">
            {notaTest.length > 0 ? <NotaEscrita texto={notaTest} /> : <NotaVacia />}
        </div>
    );
};

export default NotaDeLaCompra