

const kiosco = [
  {
    "nombre": "Huevo mapple",
    "precio": 80,
    "metodo": "Unidades"
  },
  {
    "nombre": "Semillas ",
    "precio": 500,
    "metodo": "Kilogramos"
  }
];

const panaderia = [
  {
    "nombre": "Pan",
    "precio": 457,
    "metodo": "Kilogramos"
  },
  {
    "nombre": "Factura dulce de leche con crema",
    "precio": 80,
    "metodo": "Unidades"
  },
  {
    "nombre": "Galletitas",
    "precio": 500,
    "metodo": "Kilogramos"
  }
];

const helados = [
  {
    "nombre": "pote 1/4",
    "precio": 2000,
    "metodo": "Unidad"
  }
]


const rotiseria = [
  {
    "nombre": "papas 1/4",
    "precio": 2000,
    "metodo": "Unidad"
  }
]


const peteracos = [
  {
    "nombre": "Pete tizo 2x1",
    "precio": 454444444444444444444444444444444444444444447,
    "metodo": "Kilogramos"
  },
]




const secciones = {
  "Kiosco": kiosco,
  "Panaderia": panaderia,
  "Home": [...panaderia, ...kiosco, ...peteracos, ...rotiseria, ...helados],
  "Helados": helados,
  "Rotiseria": rotiseria,
  "Peteracos": peteracos
};


import React, { useContext } from "react"
import { TarifaContex, buscadorProductosContext, productoReducerContext } from "../context/Contextos"
import styles from "../styles/PlantillaProductos.module.css"
import { OverlayDefault } from "./OverlayDefault";
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales"
import { calculadoraPorcentaje } from "../helper/calcularPorcentaje";
import { Col, Container, Row } from "react-bootstrap";

const Precio = React.memo(({ precio }) => {


  const { tarifa } = useContext(TarifaContex)

  const porcentaje = calculadoraPorcentaje(precio, tarifa.tarifa)

  const resultado = porcentaje + precio

  const separacion = separarNumerosConDecimales(resultado)
  return (
    <>
      <OverlayDefault
        overlayCustom={separacion}
        position="top" >
        <div className={`rounded-1 text-white text-start ${styles.productoPrecio}`}>
          <p className="mx-1">
            $ {separacion}
          </p>
        </div>

      </OverlayDefault>
    </>
  )

})


const ContendioDelProducto = React.memo(({ lista }) => {


  const { precio, nombre } = lista

  return (
    <>
      <Precio precio={precio}></Precio>

      <div className={`d-flex w-100 justify-content-center  align-items-center ${styles.contenedorNofoto}`}>
        <i className="fa-solid fa-camera"></i>
      </div>

      <p className={`text-center ${styles.productoNombre}`} >
        {nombre}
      </p>
    </>
  )
})


const Producto = ({ lista }) => {

  const { agregarProducto } = useContext(productoReducerContext)

  return (

    <Col xs="auto" onClick={() => agregarProducto(lista)}
      className={` mx-2 w-100 flex-column d-flex my-1 border ${styles.contenedorProducto}`}>
      <ContendioDelProducto lista={lista}></ContendioDelProducto>

    </Col>

  )

}


export const PlantillaProductos = ({ seccion }) => {



  const { productoARenderizar } = useContext(buscadorProductosContext)

  const c = secciones[seccion].filter(s =>{
    if(!productoARenderizar) return s.nombre
    else if(s.nombre.toLowerCase().indexOf(productoARenderizar.toLowerCase()) == 0 ) return s.nombre
   
  })


  return (
    <>
      {c.map(lista =>

        <Producto key={lista.nombre} lista={lista}></Producto>

      )}
    </>


  )

}