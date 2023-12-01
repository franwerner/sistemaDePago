import { memo } from "react"
import { Dropdown, Stack } from "react-bootstrap"

const ItemDropwDown = ({ tipo, fecha }) => {
    return (
        <Stack
            direction="horizontal"
            className="my-2  bg-hoverdark">
            <Dropdown.ItemText
                style={{ minWidth: "80px" }}
                className="ls-4  text-ligthdark fw-bold" >
                {tipo}
            </Dropdown.ItemText>
            <div className="vr"></div>
            <Dropdown.ItemText
                className="ls-4">
                {fecha}
            </Dropdown.ItemText>
        </Stack>
    )
}

export const DropDownDetalleDeLote = memo(() => {

    return (
        <Dropdown
            id="dropdown"
            drop="down-centered"
            style={{ right: "0%" }}
            className="position-absolute  ">

            <Dropdown.Toggle
                variant="none"
                className="position-relative border-0"
                id="dropdown-basic">

                <i className="fa-solid bg-white text-ligthdark position-absolute py-1 px-2 fs-3 fa-ellipsis-vertical"></i>

            </Dropdown.Toggle>

            <Dropdown.Menu className="shadow border-1  p-0 ">
                <ItemDropwDown
                    tipo={"Ing."}
                    fecha={"17/10/2023"} />
                <ItemDropwDown
                    tipo={"Vto."}
                    fecha={"17/10/2023"} />
                <ItemDropwDown
                    tipo={"Fab."}
                    fecha={"17/10/2023"} />

            </Dropdown.Menu>

        </Dropdown>
    )
})
