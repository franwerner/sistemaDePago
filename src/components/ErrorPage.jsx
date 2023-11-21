import { Link, useRouteError } from "react-router-dom";
import { SvgLupa } from "./SvgLupa";
import styles from "@/styles/ErrorPage.module.css"
import { RutasInterface } from "./RutasInterface";
import { Col, Container, Row } from "react-bootstrap";
import { splitDeRutasUtils } from "../common/utils/splitDeRutasUtils";
import { concatenacionDeRutas } from "../common/helper/concatenacionDeRutas";

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

const rutasAnidadas = [
  {
    raiz: "pos", subrutas: [
      ["compras", "ventas"],
      ["caja", "pagos"],
    ],
  },
  {
    raiz: "sucursales", subrutas: [
      [""]
    ],
  },
  {
    raiz: "empleado", subrutas: [
      [""]
    ],
  }
]


const buscarRutasRaiz = (rutaRaiz) => {

  const ruta = rutaRaiz.toLowerCase()

  let coincidenciaTotal = 0

  let coincidenciaTipo = ""

  rutasAnidadas.forEach(({ raiz }, index) => {

    let coincidencias = 0
    let coincidenciasSet = new Set();
    let coincidenciasStart = 0

    for (let i = 0; i < ruta.length; i++) {

      if (raiz.startsWith(ruta[i])) {
        coincidenciasStart++
      }

      const buscador = ruta.match(raiz[i])

      if (
        buscador && buscador[0].length &&
        !coincidenciasSet.has(ruta[i])
      ) {

        coincidencias++;
        coincidenciasSet.add(ruta[i]);
      }

    }

    if (coincidencias + coincidenciasStart > coincidenciaTotal && coincidenciasStart !== 0) {

      coincidenciaTotal = coincidencias
      coincidenciaTipo = rutasAnidadas[index]
    }


  })


  return coincidenciaTipo

}

const AlgoritmoDeBusquedaPagina = () => {

  const rutas = splitDeRutasUtils()

  const rts = buscarRutasRaiz(rutas[0])

  if (!rts) return ""

  const subRutas = rts.subrutas

  /*
  Variables globales
  */

  let coincidenciasTotales = 0
  let rutasAnidadas = []

  /*
  Bucle
  */

  for (let i = 0; i < subRutas.length; i++) { //Esto tiene que ser recorrido completo hasta el break condicional.

    const matrizSubRuta = subRutas[i]

    let coincidencias = 0
    let coincidenciasSet = new Set()
    let coincidenciasStart = 0
    let letrasConcatenadas = ""

    if (rutasAnidadas.length > 0) break

    for (let j = 1; j < rutas.length; j++) { //Reccore en base al largo de las rutas split, se inicializa en 1 para evitar la ruta raiz

      const subRutaActual = matrizSubRuta[j - 1]

      if (subRutaActual == undefined) break

      for (let k = 0; k < subRutaActual.length; k++) {

        const letra = subRutaActual[k]

        const buscador = rutas[j].match(letra)

        if (subRutaActual.startsWith(letrasConcatenadas + letra)) {
          letrasConcatenadas += letra;
          coincidenciasStart++;
        }

        if (
          buscador && buscador[0].length &&
          !coincidenciasSet.has(subRutaActual[k])
        ) {

          coincidencias++;
          coincidenciasSet.add(subRutaActual[k]);
        }
      }


      if (coincidencias + coincidenciasStart > coincidenciasTotales && coincidenciasStart !== 0) {
        rutasAnidadas.push(subRutaActual)
      }

    }
  }


  return rts.raiz + concatenacionDeRutas(rutasAnidadas)

}



const ErrorPageRuta = ({ algoritmo }) => {

  const ejecutar = algoritmo && AlgoritmoDeBusquedaPagina()

  return (
    <>

      {
        algoritmo &&
        <div className="d-flex justify-content-center align-items-center my-3">
          Posible Ruta
          <div className="vr mx-3"></div>
          {
            ejecutar.length == 0 ? <p className="m-0 fw-semibold text-danger">No se encontro ninguna coincidencia.</p> :
              <Link
                className="text-uppercase"
                to={ejecutar}>
                {ejecutar}
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

  const algoritmo = buscarError.tipo == 404

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
