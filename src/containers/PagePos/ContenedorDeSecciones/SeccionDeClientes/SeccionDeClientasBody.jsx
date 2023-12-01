import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales";
import { SvgClienteHombre } from "@/components//Svg/SvgClienteHombre";
import { SvgClienteMujer } from "@/components//Svg/SvgClienteMujer";
import { Card, Col } from "react-bootstrap";

const clientesTest = [
    { id: 1, nombre: "Franco", apellido: "Werner", dni: 43292578, ingreso: 1701468639926, compras: 13, devoluciones: 3, sexo: "M" },
    { id: 2, nombre: "Carolina", apellido: "López", dni: 33578124, ingreso: 1701468639926, compras: 8, devoluciones: 2, sexo: "F" },
    { id: 3, nombre: "Javier", apellido: "González", dni: 28765432, ingreso: 1701468639926, compras: 5, devoluciones: 1, sexo: "M" },
    { id: 4, nombre: "María", apellido: "Martínez", dni: 19874563, ingreso: 1701468639926, compras: 20, devoluciones: 6, sexo: "F" },
    { id: 5, nombre: "Lucas", apellido: "Fernández", dni: 54123698, ingreso: 1701468639926, compras: 15, devoluciones: 4, sexo: "M" },
    { id: 6, nombre: "Valentina", apellido: "Díaz", dni: 65987412, ingreso: 1701468639926, compras: 10, devoluciones: 0, sexo: "F" },
    { id: 7, nombre: "Santiago", apellido: "Rodríguez", dni: 77412589, ingreso: 1701468639926, compras: 3, devoluciones: 1, sexo: "M" },
    { id: 8, nombre: "Camila", apellido: "Pérez", dni: 12369874, ingreso: 1701468639926, compras: 12, devoluciones: 2, sexo: "F" },
    { id: 9, nombre: "Mateo", apellido: "Luna", dni: 98741236, ingreso: 1701468639926, compras: 6, devoluciones: 0, sexo: "M" },
    { id: 10, nombre: "Isabella", apellido: "Sánchez", dni: 45698721, ingreso: 1701468639926, compras: 18, devoluciones: 5, sexo: "F" },
    { id: 11, nombre: "Gabriel", apellido: "Ramírez", dni: 14789632, ingreso: 1701468639926, compras: 9, devoluciones: 3, sexo: "M" }
];

const ClienteCard = ({ nombre, apellido, dni, ingreso, compras, devoluciones, sexo }) => {

    return (
        <Card
            className="shadow m-3 mb-4 card-move-up cursor-pointer border-0"
            style={{ height: "14rem", width: "14rem" }}>
            <Card.Title className="text-end  m-0 position-absolute w-100">
                <i className="fa-solid text-ligthdark position-aboslute p-2 fs-3 fa-ellipsis-vertical"></i>
            </Card.Title>
            <Card.Body className="d-flex flex-column justify-content-center">
                <div className=" d-flex justify-content-center">
                    {
                        sexo == "M" ?
                            <div style={{ background: "#6ab7ff" }} className="rounded-circle p-2 ">
                                <SvgClienteHombre />
                            </div> :
                            <div style={{ background: "#ffb6d9" }} className="rounded-circle p-2">
                                <SvgClienteMujer />
                            </div>

                    }
                </div>
                
                <p className="m-0 text-center">{dni.toLocaleString()}</p>
            </Card.Body>
            <Card.Footer className="text-center bg-white border-0">
                <p className="m-0 ls-4 text-truncate">
                    {nombre + " " + apellido}
                </p>
            </Card.Footer>
        </Card >
    )
}

export const SeccionDeClientasBody = () => {
    return (
        <Col className="d-flex align-content-start flex-wrap scrollBarPersonalizada">

            {
                clientesTest.map(item =>
                    <ClienteCard key={item.id} {...item} />
                )
            }

        </Col>
    );
};
