import React, { Suspense } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { RutasInterface } from "../RutasInterface";

export const SuspenseSecondaryPageLoading = ({ children }) => {

  return (
    <Suspense fallback={
      <Container
        fluid
        className="vh-100  d-flex flex-column flex-sm-row  justify-content-center p-0 position-relative">

        <RutasInterface
          textColor={"555"}
          color={"746AF4"} />

        <Row className="m-auto">
          <Col className="p-0 d-flex flex-column justify-content-center align-items-center">
            <Spinner
              animation="border"
              className="fs-4 align-items-center"
              style={{ height: "100px", width: "100px" }}
              variant="secondary" />
            <p className="m-3 ls-1 fs-5 text-ligthdark">Cargando...</p>
          </Col>
        </Row>
      </Container>
    }>
      {children}
    </Suspense>
  );
}