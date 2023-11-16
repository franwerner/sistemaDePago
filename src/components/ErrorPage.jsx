import { useRouteError } from "react-router-dom";
import { SvgLupa } from "./SvgLupa";
import { SvgHouse } from "./SvgHouse";
import styles from "@/styles/ErrorPage.module.css"
import { RutasInterface } from "./RutasInterface";


const ListaDeErrores = {
  404: { text: "La página que buscas no está disponible" },
  403: { text: "No tienes permisos para acceder a esta página" },
  500: { text: "Hubo un problema en el servidor" },
  502: { text: "Error de conexión entre servidores" },
  503: { text: "El servicio no está disponible en este momento" },
  504: { text: "Tiempo de espera agotado al esperar respuesta del servidor" },
  400: { text: "La solicitud enviada al servidor es incorrecta o tiene un formato inválido. Verifica los datos enviados e inténtalo nuevamente." },
  401: { text: "No tienes las credenciales necesarias para acceder a esta página o recurso. Inicia sesión o verifica tus permisos para continuar." },
  429: { text: "Has excedido el límite de solicitudes permitidas en un período de tiempo. Espera un tiempo y vuelve a intentarlo más tarde." },
  408: { text: "La solicitud no pudo ser completada en el tiempo esperado. Verifica tu conexión a internet o inténtalo nuevamente más tarde." },
  301: { text: "La página o recurso solicitado ha sido movido permanentemente a una nueva ubicación. Actualiza tus marcadores o sigue el enlace proporcionado." },
  502: { text: "Se ha producido un error al intentar comunicarse con otro servidor. Verifica la configuración de red o inténtalo más tarde." },
  505: { text: "La versión del protocolo HTTP utilizado no es compatible. Actualiza tu navegador o sistema para continuar." },
  507: { text: "No hay suficiente espacio de almacenamiento disponible para completar la solicitud. Libera espacio o contacta al administrador del sistema." },
  511: { text: "Se requiere autenticación adicional para acceder a la red. Verifica tus credenciales o contacta al administrador de red." },
};


const Rutas = () => {

  return (
    <div
      style={{ top: "4%", left: "5%" }}
      className=" h-25 align-items-start  justify-content-start d-flex ">
      <SvgHouse color={"eb636B"} />
      <RutasInterface textColor={"555"} color={"eb636b"} />
    </div>
  )

}


export default function ErrorPage() {
  const error = useRouteError();

  const buscarError = ListaDeErrores[error.message] || ListaDeErrores[error.status]

  return (
    <section
      className="p-lg-5 p-md-3 p-0 py-3 p-sm-1 py-sm-3 vh-100 fw-medium"
      id={styles.errorPageContenedor}>

      <Rutas />

      <div
        id={styles.lupaContenedor}
        className="m-auto d-flex  position-relative">
        <p
          style={{ fontSize: "50px", left: "36%", top: "10%" }}
          className="fw-bold m-0 position-absolute text-danger">{error.message || error.status}</p>
        <SvgLupa
          heigth={"15rem"}
          width={"15rem"} />
      </div>

      <div className="text-center">
        <h1>Error!</h1>
        <p className="m-0 fs-6 ">
          {buscarError && buscarError.text || "Error desconocido, consulta con el administrado"}.
        </p>

      </div>

    </section >
  );
}
