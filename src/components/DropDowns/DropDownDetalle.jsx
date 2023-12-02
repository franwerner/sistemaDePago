import { memo } from "react"
import { Dropdown, Stack } from "react-bootstrap"

const ItemDropwDown = ({ tipo, data }) => {
    return (
        <Stack
            direction="horizontal"
            className="my-2  bg-hoverdark">
            <Dropdown.ItemText
                style={{ minWidth: "80px", maxWidth: "80px" }}
                className="  text-ligthdark fw-bold" >
                {tipo}
            </Dropdown.ItemText>
            <div className="vr"></div>
            <Dropdown.ItemText>
                {data}
            </Dropdown.ItemText>
        </Stack>
    )
}

export const DropDownDetalle = memo(({ itemList = [] }) => {

    return (
        <Dropdown
            id="dropdown"
            drop="down-centered"
            style={{ right: "0%" }}
            className="position-absolute ">

            <Dropdown.Toggle
                variant="none"
                className="position-relative border-0"
                id="dropdown-basic">

                <i className="fa-solid bg-white text-ligthdark position-absolute py-1 px-2 fs-3 fa-ellipsis-vertical"></i>

            </Dropdown.Toggle>

            <Dropdown.Menu className="shadow border-1  p-0 ">
                {
                    itemList.map(item => <ItemDropwDown key={item.tipo} {...item} />)
                }
            </Dropdown.Menu>

        </Dropdown>
    )
})
