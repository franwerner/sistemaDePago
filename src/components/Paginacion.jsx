import styles from "@/styles/Paginacion.module.css"
import { useEffect } from "react";
import { Stack } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Paginacion = ({ parametro, largo, url }) => {

    const navigate = useNavigate()

    const { search } = useLocation()

    const parsearParametro = parseInt(parametro)

    useEffect(() => {

        if (isNaN(parsearParametro) || parsearParametro <= 0) navigate(`/${url}/1`)

    }, [parametro])



    const leftNav = parsearParametro == 1 ? parsearParametro : parsearParametro - 1
    return (
        <Stack
            direction="horizontal"
            gap={3}
            className={`${styles.navPaginacion} text-truncate rounded-4`}>

            <Link to={`/${url}/${leftNav}${search}`}>
                <i className="fa-solid zoom text-black fa-chevron-left p-2"></i>
            </Link>

            <p style={{ minWidth: "60px" }} className="m-0 fw-medium text-center">{parametro} / {largo}</p>

            <Link to={`/${url}/${parsearParametro + 1}${search}`}>
                <i className="fa-solid zoom text-black fa-chevron-right p-2"></i>
            </Link>

        </Stack>
    );
};