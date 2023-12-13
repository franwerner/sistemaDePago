import BuscadorInput from "@/components//BuscadorInput";
import DropDownFilterDefault from "@/components//DropDowns/DropDownOrdenFilterDefault/DropDownFilterDefault";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault/DropDownOrdenDefault";
import { Link } from "react-router-dom";
import { BotonSeccionNavText } from "@/components//Botones/BotonSeccionNavText";
import { SeccionNavCol } from "@/components//SeccionNavCol";

const dropwDownOrden = [
    { nombre: "Vencimiento", prioridad: 0 },
    { nombre: "Fabricacion", prioridad: 1 },
    { nombre: "Numero", prioridad: 2 },
    { nombre: "Ingreso", prioridad: 3 },
    { nombre: "Items", prioridad: 4 },
]

const dropwDownFilter = [
    { nombre: "Vencidos" },
    { nombre: "Sin productos" }
]


const BotonAñadirLote = () => (
    <Link to="agregar">
        <BotonSeccionNavText text="Añadir lote">
            <i className="fa-solid mx-1 fs-4 fa-boxes-packing"></i>
        </BotonSeccionNavText>
    </Link>
)

const listado = [
    { component: <DropDownOrdenDefault dropwDownList={dropwDownOrden} /> },
    { component: <DropDownFilterDefault dropwDownList={dropwDownFilter} /> },
    { component: <BotonAñadirLote /> },
    { component: <BuscadorInput texto="numero de lote" />, props: { xs: 12, xl: 4 } },
]

export const SeccionDeInventarioNav = () => {
    return (
        <SeccionNavCol list={listado} />
    );
};