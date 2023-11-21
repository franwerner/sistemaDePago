import { Dropdown } from "react-bootstrap"


const DropDownFilterDefault = ({ children }) => {

    return (

        <Dropdown.Menu show className="position-relative z-1  " >
            <Dropdown.Toggle
                variant="none"
                id="dropdown-filter">
                <i className="fa-solid fs-4 fa-filter"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {children}
            </Dropdown.Menu>
        </Dropdown.Menu>
    )

}

export default DropDownFilterDefault