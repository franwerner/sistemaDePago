import { Dropdown } from "react-bootstrap"

const DropwDownItems = ({ nombre, component }) => {


    return (
        <>
        {component ? (
            component
        ) : (
            <Dropdown.Item
                className="fw-medium  bg-white"
                data-name={nombre}
            >
                {nombre}<span className="text-primary mx-2 fs-6"><i className="fa-solid fa-check"></i></span>
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
                variant="outline-ligthdark"
                id="dropdown-filter" >
                <i className="fa-solid cursor-pointer zoom fs-4 fa-filter"></i>
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

