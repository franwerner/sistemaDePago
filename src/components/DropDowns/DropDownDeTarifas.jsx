import { Dropdown, Stack } from "react-bootstrap";
import { verificarSiEsNegativo } from "../../common/helper/verificarSiEsNegativo";
import { memo, useContext } from "react";
import { TarifaContex } from "../../context/Contextos";

const DropwDownItems = memo(({ tarifa, cambiarTarifa, isSelect }) => {

    const { porcentaje, tipoDeTarifa } = tarifa

    const onClick = () => {
        cambiarTarifa(tarifa)
    }

    const verificacion = verificarSiEsNegativo(porcentaje) ? "text-danger" : "text-success"
    const backGroundItem = isSelect ? "bg-ligthdark " : "bg-white"
    const colorText = isSelect ? "text-white fw-semibold" : "text-ligthdark"
    const colorText2 = isSelect ? `${verificacion} fw-semibold` : verificacion

    return (
        <Dropdown.Item className={`${backGroundItem} ${!isSelect && "bg-hoverdark"} `} onClick={onClick}>
            <Stack
                direction="horizontal"
                className=" justify-content-between">
                <p
                    className={`${colorText} m-0 ls-4 text-truncate`}>
                    {tipoDeTarifa}
                </p>
                <p className={`${colorText2} m-0`}>
                    {porcentaje}%
                </p>
            </Stack>
        </Dropdown.Item>
    )
})

export const DropDownDeTarifas = memo(({ responsive,size = "sm"}) => {

    const { tarifaActual, listadoDeTarifas, cambiarTarifa } = useContext(TarifaContex)

    const display = responsive && `d-none d-${size}-inline`
    return (
        <Dropdown
        autoClose = {"outside"}
            className="d-flex  w-100 justify-content-center">
            <Dropdown.Toggle
                className="w-100 fw-bolder border-1 text-truncate text-uppercase"
                variant="outline-ligthdark">
                <i className="fa-solid mx-1 fs-6 fa-percent"></i>
                <span className={display}>Tarifa</span>
            </Dropdown.Toggle>

            <Dropdown.Menu
                style={{ minWidth: "280px" }}
                className="w-100">
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
                            isSelect={item.tipoDeTarifa == tarifaActual.tipoDeTarifa}
                            cambiarTarifa={cambiarTarifa}
                            key={item.id}
                            tarifa={item} />
                    )
                }


            </Dropdown.Menu>
        </Dropdown>
    );
})