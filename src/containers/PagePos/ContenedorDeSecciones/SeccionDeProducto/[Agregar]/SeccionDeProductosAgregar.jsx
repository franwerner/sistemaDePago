import { Row } from "react-bootstrap";
import { SeccionDeProductosAgregarContenedor } from "./SeccionDeProductosAgregarContenedor";


const SeccionDeProductosAgregar = () => {


  return (
    <>
      <Row
        style={{ minHeight: "90px" }}
        className="shadow">

      </Row>

      <Row className="d-flex justify-content-center align-items-center h-100 my-5">
        <SeccionDeProductosAgregarContenedor />
      </Row>
    </>
  );
};

export default SeccionDeProductosAgregar