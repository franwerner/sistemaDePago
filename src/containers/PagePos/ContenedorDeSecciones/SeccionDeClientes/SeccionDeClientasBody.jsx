import { AbreviacionDeNombre } from "@/common//helper/AbreviacionDeNombre";
import { obtenerFecha } from "@/common//helper/obtenerFecha";
import { DropDownDetalle } from "@/components//DropDowns/DropDownDetalle";
import { SvgClienteHombre } from "@/components//Svg/SvgClienteHombre";
import { SvgClienteMujer } from "@/components//Svg/SvgClienteMujer";
import { lazy } from "react";
import { Card, Col } from "react-bootstrap";

const ContenedorVacio = lazy(() => import("@/components//ContenedorVacio"))
const SvgClienteVacio = lazy(() => import("@/components//Svg/SvgClienteVacio"))

const clientesTest = [
    { id: 1, nombre: "Franco Carlos", apellido: "Werner", dni: 43292578, ingreso: 1701468639926, compras: 13, devoluciones: 3, sexo: "M" },
    { id: 2, nombre: "Carolina", apellido: "López", dni: 33578124, ingreso: 1701468639926, compras: 8, devoluciones: 2, sexo: "F" },
    { id: 3, nombre: "Javier", apellido: "González", dni: 28765432, ingreso: 1701468639926, compras: 5, devoluciones: 1, sexo: "M" },
    { id: 4, nombre: "María", apellido: "Martínez", dni: 19874563, ingreso: 1701468639926, compras: 20, devoluciones: 6, sexo: "F" },
    { id: 5, nombre: "Lucas", apellido: "Fernández", dni: 54123698, ingreso: 1701468639926, compras: 15, devoluciones: 4, sexo: "M" },
    { id: 6, nombre: "Valentina", apellido: "Díaz", dni: 65987412, ingreso: 1701468639926, compras: 10, devoluciones: 0, sexo: "F" },
    { id: 7, nombre: "Santiago Lucas Fede", apellido: "Rodríguez Werner", dni: 77412589, ingreso: 1701468639926, compras: 3, devoluciones: 1, sexo: "M" },
    { id: 8, nombre: "Camila", apellido: "Pérez", dni: 12369874, ingreso: 1701468639926, compras: 12, devoluciones: 2, sexo: "F" },
    { id: 9, nombre: "Mateo", apellido: "Luna", dni: 98741236, ingreso: 1701468639926, compras: 6, devoluciones: 0, sexo: "M" },
    { id: 10, nombre: "Isabella", apellido: "Sánchez", dni: 45698721, ingreso: 1701468639926, compras: 18, devoluciones: 5, sexo: "F" },
    { id: 11, nombre: "Gabriel", apellido: "Ramírez", dni: 14789632, ingreso: 1701468639926, compras: 9, devoluciones: 3, sexo: "M" }
];



const ClienteCard = ({ nombre, apellido, dni, ingreso, compras, devoluciones, sexo }) => {

    const colorSexo = sexo == "M" ? "#6ab7ff" : "#ffb6d9"

    const { año, mes } = obtenerFecha(ingreso)

    const dropDownList = [
        { tipo: "Ing.", data: `${mes}/${año}` },
        { tipo: "Com.", data: compras },
        { tipo: "Dev.", data: devoluciones },
    ]

    return (
        <Card
            tabIndex={0}
            className="shadow m-3 mb-4 card-move-up cursor-pointer overflow-hidden border-0"
            style={{ height: "15rem", minWidth: "12.5rem",maxWidth : "12.5rem", maxHeight: "15rem" }}>
            <Card.Title className="text-end  m-0 position-absolute w-100">
                <DropDownDetalle itemList={dropDownList} />
            </Card.Title>
            <Card.Body className="d-flex flex-column  justify-content-center align-items-center">

                <div
                    style={{ background: colorSexo, maxWidth: "fit-content" }}
                    className="rounded-circle  p-2 ">
                    {sexo == "M" ? <SvgClienteHombre /> : <SvgClienteMujer />}
                </div>

                <p className="m-0 text-center text-ligthdark fw-medium ls-4 ">{dni.toLocaleString()}</p>
            </Card.Body>
            <Card.Footer className="text-center bg-white border-0">
                <p className="m-0 ls-4 text-wrap">
                    {AbreviacionDeNombre(nombre) + " " + AbreviacionDeNombre(apellido)}
                </p>
            </Card.Footer>
        </Card >
    )
}

export const SeccionDeClientasBody = () => {

    const clientes = [1]
    
    return (
        <Col className="d-flex align-content-start justify-content-center justify-content-sm-start flex-wrap h-100">

            {
                clientes.length > 0 ?
                    clientesTest.map(item =>
                        <ClienteCard key={item.id} {...item} />
                    )

                    :
                    <ContenedorVacio texto="No se encontro ningun cliente">
                        <SvgClienteVacio />
                    </ContenedorVacio>



            }

        </Col>
    );
};
