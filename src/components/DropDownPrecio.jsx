import React from "react";
import { Button, Dropdown, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "../hooks/useForm";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useFocusMouseElements } from "../hooks/useFocusMouseElements";



const FormDropwDown = ({ changeForm, precio }) => {


  const { refFocusElement, onMouseEnter, onMouseLeave } = useFocusMouseElements()


  return (
    <>
      <FloatingLabel
        controlId="porcentajeControl"
        label="Nuevo Precio">
        <Form.Control
          ref={refFocusElement}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          autoComplete="off"
          placeholder=""
          tabIndex={1}
          onChange={changeForm}
          aria-describedby="precioTable"
          type="number"
          name="precio"
          value={Math.abs(precio) == 0 ? "" : Math.abs(precio)}
          className="px-1 text-center"

        />
      </FloatingLabel>
    </>
  )
}


const DropwDownPrecio = React.memo(({ children, modificarPrecio, nombre }) => {

  const { changeForm, form } = useForm({ precio: 0 })

  const onClick = () => {

    const verificacion = form.precio.length == 0 || isNaN(form.precio) ? 0 : Math.abs(form.precio)

    modificarPrecio({ nombre, precioModificado: verificacion })
  }

  return (
    <Dropdown
      drop="down"
      autoClose={"outside"}
      align="end"
      className="d-flex justify-content-center"
      id="dropdown-menu-align-end"
    >
      <Dropdown.Toggle variant="none" className="d-flex  align-items-center" >
        <p className="m-0 text-truncate">{children}</p>
      </Dropdown.Toggle>

      <DropdownMenu>
        <Dropdown.ItemText>
          <FormDropwDown
            changeForm={changeForm}
            precio={form.precio}
          />
        </Dropdown.ItemText>

        <Dropdown.Divider />

        <Dropdown.ItemText>
          <Button
            style={{ background: "#746AF4" }}
            className="text-white fw-semibold w-100"
            variant="none"
            type="button"
            onClick={onClick}>
            Cambiar
          </Button>
        </Dropdown.ItemText>
      </DropdownMenu>
    </Dropdown>
  );

})

export default DropwDownPrecio