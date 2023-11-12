import { Dropdown } from "react-bootstrap";
import styles from "@/styles/DropDownDefault.module.css"


const DropDownOrdenDefault = ({ children }) => {
    return (
        <Dropdown className={`${styles.dropDownOrdenDefault} bg-hover`} autoClose="outside" >
            <Dropdown.Toggle
                variant=""
                className="border"
                id="dropdown-orden">
                <i className="fa-solid mx-1 fa-chart-bar"></i>
                Ordenar por
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {children}
            </Dropdown.Menu>
        </Dropdown>
    );
};


export default DropDownOrdenDefault