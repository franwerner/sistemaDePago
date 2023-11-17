import { useLocation } from "react-router-dom";

export const splitDeRutas = () => {
    const { pathname } = useLocation()

    return pathname.split("/").filter(item => item.length !== 0)

};