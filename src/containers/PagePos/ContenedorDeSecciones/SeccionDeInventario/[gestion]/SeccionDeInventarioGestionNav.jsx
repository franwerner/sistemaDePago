import { AgregarCerosANumeros } from "@/common//helper/AgregarCerosANumeros";
import { BotonSeccionNavText } from "@/components//Botones/BotonSeccionNavText";
import BuscadorInput from "@/components//BuscadorInput";
import DropDownOrdenDefault from "@/components//DropDowns/DropDownOrdenDefault/DropDownOrdenDefault";
import DropDownFilterDefault from "@/components//DropDowns/DropDownOrdenFilterDefault/DropDownFilterDefault";
import { SeccionNavCol } from "@/components//SeccionNavCol";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { ModalDeInformacion } from "./ModalDeInformacion";

const orden = [
    { nombre: "Nombre", prioridad: 4 },
    { nombre: "Vencimiento", prioridad: 3 },
    { nombre: "Fabricacion", prioridad: 2 },
    { nombre: "Cantidad", prioridad: 1 }
]
const filtro = [
    { nombre: "Vencidos" },
    { nombre: "Sin stock" }
]

const NumeroDeLote = () => (
    <h2 className="m-0 border-bottom border-2 text-ligthdark ls-4 fs-3 mx-2">#{AgregarCerosANumeros({ digitos: 3, numero: 45 })}</h2>
)

const InformacionBoton = () => {

    const { alternarMostrar, mostrar } = useEventoMostrar()

    return (
        <>
            <BotonSeccionNavText onClick={alternarMostrar} text="Información">
                <i className="fa-solid fs-5 mx-1 fa-circle-info"></i>
            </BotonSeccionNavText>
            <ModalDeInformacion alternarMostrar={alternarMostrar} mostrar={mostrar} />
        </>
    )
}

const listado = [
    { component: <NumeroDeLote /> },
    { component: <InformacionBoton /> },
    { component: <DropDownOrdenDefault dropwDownList={orden} /> },
    { component: <DropDownFilterDefault dropwDownList={filtro} /> },
    { component: <BuscadorInput texto="producto" />, props: { xs: 12, md: 5 } },
]

export const SeccionDeInventarioGestionNav = () => {
    return (
        <SeccionNavCol list={listado} />
    );
};