import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import styles from "@/styles/SuspenseLoading.module.css"
import { useLocation } from "react-router-dom";
import { SvgHouse } from "./SvgHouse";
import { RutasInterface } from "./RutasInterface";

const Rutas = () => {

  const { pathname } = useLocation()

  const color = "746AF4"

  return (
    <div
      id={styles.rutasContenedor}
      className="position-absolute  align-items-center d-flex text-ligthdark">

      <SvgHouse color={color} />

      <RutasInterface textColor={"555"} color={color} />
    </div>
  )

}

export const SuspenseSecondaryPageLoading = ({ children }) => {

  return (
    <Suspense fallback={
      <div className="vh-100  position-relative justify-content-center align-items-center flex-column d-flex ">
        <Rutas />
        <div className="position-relative">
          <Spinner
            animation="border"
            className="fs-4"
            style={{ height: "100px", width: "100px" }}
            variant="secondary" />
        </div>

        <p className="m-3 ls-1 fs-5 text-ligthdark">Cargando...</p>
      </div>
    }>
      {children}
    </Suspense>
  );
}