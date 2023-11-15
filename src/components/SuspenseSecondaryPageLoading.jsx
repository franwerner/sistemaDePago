import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import styles from "@/styles/SuspenseLoading.module.css"
import { primeraLetraMayuscula } from "../helper/primeraLetraMayuscula";
import { useLocation } from "react-router-dom";
import { SvgHouse } from "./SvgHouse";

const Rutas = () => {

  const { pathname } = useLocation()

  const path = pathname.split("/").filter(item => item.length !== 0 && item !== "pos")

  return (
    <div
      id={styles.rutasContenedor}
      className="position-absolute  align-items-center d-flex text-ligthdark">

    <SvgHouse color = {"746AF4"}/>
    
      {

        path.map(item =>
          <p key={item} className="m-0 pt-2  fs-6 ls-3 mx-1">/ {primeraLetraMayuscula(item)}</p>
        )
      }
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