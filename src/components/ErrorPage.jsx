import { Link, useRouteError } from "react-router-dom";
import { SvgLupa } from "./SvgLupa";
import styles from "@/styles/ErrorPage.module.css"
import { RutasInterface } from "./RutasInterface";
import { Col, Container, Row } from "react-bootstrap";
import { splitDeRutasUtils } from "@/common/utils/splitDeRutasUtils";
import { concatenacionDeRutas } from "@/common/helper/concatenacionDeRutas";

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


const rutasbidimensionales2 = [//En cada raiz incrementar el indice + 1 por cada capa
  {
    raiz: "pos", indice: 0, subrutas: [
      [ //Esto es un capa  + 1
        "compras",
        "clientes",
        "almacen",

        {
          raiz: "ventas", indice: 1, subrutas: [
            ["pagos"] //Esto es otra capa + 2
          ]
        },

        {
          raiz: "productos", indice: 1, subrutas: [
            ["agregar",]
          ]
        },

        {
          raiz: "caja", indice: 1, subrutas: [
            ["pagos"]
          ]
        },
      ]
    ]
  },
  {
    raiz : "empleados", indice : 0, subrutas : []
  },
  {
    raiz : "sucursales", indice : 0, subrutas : []
  }

]

const bucleForLetra = (string = "", ruta = "") => {

  let puntajeEnLetras = 0

  let puntajeSet = new Set()

  let letrasConcatenadas = ""

  for (let i = 0; i < string.length; i++) {

    const letra = string[i];

    const buscador = ruta.match(letra)

    if (ruta.startsWith(letrasConcatenadas + letra) && letrasConcatenadas.length == i) {

      letrasConcatenadas += letra

    }

    if (buscador && !puntajeSet.has(letra)) {
      puntajeEnLetras++;
      puntajeSet.add(letra)
    }

  }

  const porcentaje = Math.floor(((puntajeEnLetras / string.length) * 100))

  if (letrasConcatenadas.length == 0 && porcentaje < 50) return

  return { string, puntaje: puntajeEnLetras + letrasConcatenadas.length }
}

const verificarMapeo = (mapeo, objecto, key) => {

  const mapInfo = mapeo.get(key)

  if (mapInfo && objecto) {
    mapInfo.puntaje < objecto.puntaje && mapeo.set(key, objecto)
  } else if (!mapInfo && objecto) {

    mapeo.set(key, objecto)
  }

}


const bucleTest = (indiceActual, mapeoTest = new Map()) => {

  const { raiz, subrutas, indice } = indiceActual

  const indiceAdelantado = indice + 1

  const rutas = splitDeRutasUtils();


  for (let i = 0; i < subrutas.length; i++) {

    const indiceSubruta = subrutas[i]

    if (indiceSubruta == undefined || indiceAdelantado >= rutas.length) break

    for (let j = 0; j < indiceSubruta.length; j++) {

      const subrutaJ = indiceSubruta[j]

      if (typeof subrutaJ == "object") {

        const bucle = bucleTest(subrutaJ, mapeoTest)

        bucle.forEach((valor, clave) => {
          mapeoTest.set(clave, valor)
        });

      } else {

        const bucle = bucleForLetra(subrutaJ, rutas[indiceAdelantado])

        verificarMapeo(mapeoTest, bucle, indiceAdelantado)


      }

    }

  }


  const raizActual = bucleForLetra(raiz, rutas[indice])

  verificarMapeo(mapeoTest, raizActual, indice)


  return mapeoTest

};

const AlgoritmoDeBusquedaPagina = () => {


  let sistemaDePuntaje = [];

  for (let i = 0; i < rutasbidimensionales2.length; i++) {

    const indiceActual = rutasbidimensionales2[i]

    const mapeo = bucleTest(indiceActual)
    sistemaDePuntaje.push(mapeo)
  }


  const verificarMayorPuntaje = sistemaDePuntaje.reduce((mayor, actual) => {

    let valorMayor = 0
    let valorActual = 0

    mayor.forEach((valor) => {
      valorMayor += valor.puntaje
    })

    actual.forEach((valor) => {
      valorActual += valor.puntaje
    })

    return valorActual > valorMayor ? actual : mayor

  }, sistemaDePuntaje[0])

  const newMap = [...verificarMayorPuntaje.values()].map(objeto => objeto.string);

  return concatenacionDeRutas(newMap.reverse())
};



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
