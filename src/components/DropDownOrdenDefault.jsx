import { Dropdown } from "react-bootstrap";


const DropDownOrdenDefault = ({ children }) => {
    return (
        <Dropdown >
            <Dropdown.Toggle
                variant="none"
                className="border"
                id="dropdown-orden">
                <i className="fa-solid mx-1 fa-chart-bar"></i>
                Ordenar por
            </Dropdown.Toggle>

            <Dropdown.Menu >
                {children}
            </Dropdown.Menu>
        </Dropdown>
    );
};


export default DropDownOrdenDefault