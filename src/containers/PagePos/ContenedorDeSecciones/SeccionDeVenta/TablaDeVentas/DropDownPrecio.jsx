import { memo } from "react";
import { Button, Dropdown, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "@/hooks/useForm";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useFocusMouseElements } from "@/hooks/useFocusMouseElements";



const FormDropwDown = ({ modificarPrecio, nombre }) => {
  const { refFocusElement, onMouseEnter, onMouseLeave } = useFocusMouseElements()

  const { changeForm, form } = useForm({ precio: 0 })

  const onClick = () => {

    modificarPrecio({ nombre, precioModificado: form.precio })
  }

  return (
    <Form>
      <FloatingLabel
        controlId="porcentajeControl"
        label="Nuevo Precio">
        <Form.Control
          ref={refFocusElement}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          autoComplete="off"
          placeholder=""
          tabIndex={0}
          onChange={changeForm}
          aria-describedby="precioTable"
          type="number"
          name="precio"
          value={form.precio == 0 ? "" : Math.abs(form.precio)}
          className="px-1 text-center"

        />
        <Button
          type="button"
          onClick={onClick}
          className="text-white mt-2  fw-semibold w-100"
          variant="primary">
          Cambiar
        </Button>
      </FloatingLabel>
    </Form>
  )
}


const DropwDownPrecio = memo(({ children, modificarPrecio, nombre }) => {


  return (
    <Dropdown
      drop="down"
      autoClose={"outside"}
      align="end"
      className="d-flex justify-content-center"
      id="dropdown-menu-align-end"
    >
      <Dropdown.Toggle
        variant="none"
        className="d-flex  align-items-center" >
        <p className="m-0 text-truncate">{children}</p>
      </Dropdown.Toggle>

      <DropdownMenu>
        <Dropdown.ItemText>
          <FormDropwDown
            modificarPrecio={modificarPrecio}
            nombre={nombre} />
        </Dropdown.ItemText>
      </DropdownMenu>
    </Dropdown>
  );

})

export default DropwDownPrecio