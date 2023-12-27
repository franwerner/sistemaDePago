import { Link, useLocation } from "react-router-dom"

const ContenedorVacio = ({ texto, children, ruta }) => {

    const { pathname } = useLocation()
    
    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
            <Link className="text-decoration-none d-flex  justify-content-center flex-column align-items-center" to={ruta || pathname}>
                <span className="zoom">
                    {children}
                </span>
                <p className="m-0 fs-6 text-wrap text-center text-ligthdark ls-3">{texto}.</p>
            </Link>
        </div>
    );
};

export default ContenedorVacio