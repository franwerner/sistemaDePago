import { Dropdown } from "react-bootstrap"

const DropwDownItems = ({ nombre, component }) => {

    return (
        <>
        {component ? (
            component
        ) : (
            <Dropdown.Item
                className="fw-medium"
                data-name={nombre}
            >
                {nombre}
            </Dropdown.Item>
        )}
    </>
    )
}

const DropDownParent = ({ children }) => {
    return (
        <Dropdown
            className="position-relative"
            autoClose="outside" >
            <Dropdown.Toggle
                variant="none"
                id="dropdown-filter" >
                <i className="fa-solid fs-4 fa-filter"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu >
                {children}
            </Dropdown.Menu>
        </Dropdown>
    )
}

const DropDownFilterDefault = ({ dropwDownList = [], componentes }) => {


    return (
        <DropDownParent>
            {
                dropwDownList.map(({ nombre, component }) =>
                    <DropwDownItems key={nombre} component={component} nombre={nombre} />
                )
            }
            {componentes}
        </DropDownParent>
    )

}

export default DropDownFilterDefault

