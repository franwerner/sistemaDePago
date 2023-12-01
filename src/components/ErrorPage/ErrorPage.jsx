import { Link, useRouteError } from "react-router-dom";
import { SvgLupa } from "../Svg/SvgLupa";
import styles from "@/styles/ErrorPage.module.css"
import { RutasInterface } from "../RutasInterface";
import { Col, Container, Row } from "react-bootstrap";
import { algoritmoDeBusquedaPageUtils } from "./Utils/AlgoritmoDeBusquedaPageUtils";
import { LoadingStateLoader } from "../Suspense/LoadingStateLoader";


const ListaDeErrores = [
  { tipo: 301, text: "La página o recurso solicitado ha sido movido permanentemente a una nueva ubicación. Actualiza tus marcadores o sigue el enlace proporcionado." },
  { tipo: 400, text: "La solicitud enviada al servidor es incorrecta o tiene un formato inválido. Verifica los datos enviados e inténtalo nuevamente." },
  { tipo: 401, text: "No tienes las credenciales necesarias para acceder a esta página o recurso. Inicia sesión o verifica tus permisos para continuar." },
  { tipo: 403, text: "No tienes permisos para acceder a esta página" },
  { tipo: 404, text: "La página que buscas no está disponible" },
  { tipo: 408, text: "La solicitud no pudo ser completada en el tiempo esperado. Verifica tu conexión a internet o inténtalo nuevamente más tarde." },
  { tipo: 429, text: "Has excedido el límite de solicitudes permitidas en un período de tiempo. Espera un tiempo y vuelve a intentarlo más tarde." },
  { tipo: 500, text: "Hubo un problema en el servidor" },
  { tipo: 502, text: "Se ha producido un error al intentar comunicarse con otro servidor. Verifica la configuración de red o inténtalo más tarde." },
  { tipo: 503, text: "El servicio no está disponible en este momento" },
  { tipo: 504, text: "Tiempo de espera agotado al esperar respuesta del servidor" },
  { tipo: 505, text: "La versión del protocolo HTTP utilizado no es compatible. Actualiza tu navegador o sistema para continuar." },
  { tipo: 507, text: "No hay suficiente espacio de almacenamiento disponible para completar la solicitud. Libera espacio o contacta al administrador del sistema." },
  { tipo: 511, text: "Se requiere autenticación adicional para acceder a la red. Verifica tus credenciales o contacta al administrador de red." }
];





const ErrorPageRuta = ({ algoritmo }) => {

  const ejecutar = algoritmo && algoritmoDeBusquedaPageUtils()

  return (
    <>
    <LoadingStateLoader texto={"datos de redireccion"}/>
      {
        algoritmo &&
        <div className="d-flex justify-content-center w-100 p-0 align-items-center my-3">
          <p className="m-0 text-wrap">Posible Ruta </p>
          <div className="vr mx-3"></div>

          {
            ejecutar.length == 0 ? <p className="m-0  fw-semibold text-center text-wrap text-truncate text-danger">No se encontro ninguna coincidencia.</p> :
              <Link
                className="text-uppercase text-center  h-100 text-truncate fs-6 text-truncate"
                to={ejecutar}>
                <div className="flex-wrap h-100 d-flex ">
                  {ejecutar.split("/").filter(item => item.length !== 0).map((item, index) =>
                    <p
                      style={{ maxWidth: "300px" }}
                      className="m-0 text-truncate " key={index}>{item}/</p>
                  )}
                </div>
              </Link>
          }

        </div>
      }
    </>

  )
}


export default function ErrorPage() {
  const error = useRouteError();

  const buscarError = ListaDeErrores.find(err => err.tipo == error.message || err.tipo == error.status)

  const algoritmo = buscarError ? buscarError.tipo == 404 : undefined

  return (
    <Container
      fluid
      className="vh-100 d-flex flex-column flex-sm-row  justify-content-center p-0 "
      id={styles.errorPageContenedor}>

      <RutasInterface
        textColor={"555"}
        color={"eb636b"} />

      <Row
        className="m-auto justify-content-center d-flex flex-column ">
        <Col
          id={styles.lupaContenedor}
          className="position-relative m-auto  p-0" >
          <p
            style={{ fontSize: "50px", left: "36%", top: "10%" }}
            className="fw-bold m-0 position-absolute text-danger">{buscarError ? buscarError.tipo : 909}</p>
          <SvgLupa
            heigth={"15rem"}
            width={"15rem"} />
        </Col>

        <Col className="p-0  text-center">
          <h1>Error!</h1>
          <p className="m-0 fs-6 ">
            {buscarError && buscarError.text || "Error desconocido, consulta con la administración"}.
          </p>
          <ErrorPageRuta algoritmo={algoritmo} />
        </Col>
      </Row>

    </Container >
  );
}
