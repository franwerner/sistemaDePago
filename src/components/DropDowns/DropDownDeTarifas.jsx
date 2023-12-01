import { Dropdown, Stack } from "react-bootstrap";
import { verificarSiEsNegativo } from "../../common/helper/verificarSiEsNegativo";
import React, { useContext } from "react";
import { TarifaContex } from "../../context/Contextos";

const DropwDownItems = React.memo(({ tarifa, cambiarTarifa }) => {

    const { porcentaje, tipoDeTarifa } = tarifa

    const onClick = () => {
        cambiarTarifa(tarifa)
    }

    const verificacion = verificarSiEsNegativo(porcentaje) ? "danger" : "success"

    return (
        <Dropdown.Item className="bg-white bg-hoverdark" onClick={onClick}>
            <Stack
                direction="horizontal"
                className=" justify-content-between">
                <p
                    style={{ color: "#555" }}
                    className="m-0">
                    {tipoDeTarifa}
                </p>
                <p className={`text-${verificacion} m-0`}>
                    {porcentaje}%
                </p>
            </Stack>
        </Dropdown.Item>
    )
})

export const DropDownDeTarifas = () => {

    const { tarifaActual, listadoDeTarifas, cambiarTarifa } = useContext(TarifaContex)

    return (
        <Dropdown
            className="d-flex  w-100 justify-content-center">
            <Dropdown.Toggle
                className="w-100 fw-bolder border-2 text-truncate text-uppercase"
                variant="outline-ligthdark">
                Tar.{tarifaActual.tipoDeTarifa}
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
                <Dropdown.ItemText>
                    <Stack
                        className="justify-content-between fw-semibold"
                        direction="horizontal">
                        <p className="m-0">Tarifa</p>
                        <p className="m-0">
                            Porcentaje
                        </p>
                    </Stack>
                </Dropdown.ItemText>
                <Dropdown.Divider />
                {
                    listadoDeTarifas.map(item =>
                        <DropwDownItems
                            cambiarTarifa={cambiarTarifa}
                            key={item.id}
                            tarifa={item} />
                    )
                }


            </Dropdown.Menu>
        </Dropdown>
    );
};