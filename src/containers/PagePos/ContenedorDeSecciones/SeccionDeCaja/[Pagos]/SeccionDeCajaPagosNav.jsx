import BuscadorInput from "@/components//BuscadorInput";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault/DropDownOrdenDefault";
import { SeccionNavCol } from "@/components//SeccionNavCol";

const dropwDownList = [
    { nombre: "Monto", prioridad: 1 },
    { nombre: "Hora", propiedad: "fecha", prioridad: 3 },
    { nombre: "Orden", prioridad: 2 },
]

const listado = [
    { component: <DropDownOrdenDefault dropwDownList={dropwDownList} /> },
    { component: <BuscadorInput texto="por nro de orden" />, props: { md: 6, xs: "9" } }
]

export const SeccionDeCajaPagosNav = () => {

    return (
        <SeccionNavCol list={listado} />
    )

}
