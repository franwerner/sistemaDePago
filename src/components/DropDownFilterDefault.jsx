import { Dropdown } from "react-bootstrap"


const DropDownFilterDefault = ({ children }) => {

    return (

        <Dropdown>
            <Dropdown.Toggle
                variant="none"
                id="dropdown-filter">
                <i className="fa-solid fs-4 fa-filter"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu >
                {children}
            </Dropdown.Menu>
        </Dropdown>
    )

}

export default DropDownFilterDefault