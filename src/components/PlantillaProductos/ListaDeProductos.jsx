

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
import {buscadorProductosContext, productoReducerContext } from "../../context/Contextos"
import styles from "../../styles/PlantillaProductos.module.css"
import { OverlayDefault } from "../OverlayDefault";
import { separarNumerosConDecimales } from "../../helper/separarNumerosConDecimales"
import { useCalculadoraPorcenje } from "../../hooks/useCalcularPorcentaje";

const Precio = React.memo(({ precio }) => {

  const porcentaje = useCalculadoraPorcenje(precio)

  const resultado = porcentaje + precio

  const separacion = separarNumerosConDecimales(resultado)
  return (
    <>
      <OverlayDefault
        overlayCustom={separacion}
        position="top" >
        <div className={`rounded-1 text-white overflow-hidden text-start ${styles.productoPrecio}`}>
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

      <p className={`text-center overflow-hidden ${styles.productoNombre}`} >
        {nombre}
      </p>
    </>
  )
})


const Producto = ({ lista }) => {

  const { agregarProducto } = useContext(productoReducerContext)

  return (

    <div  onClick={() => agregarProducto(lista)}
      className={` mx-2 w-100 flex-column d-flex my-1 border  ${styles.producto}`}>
      <ContendioDelProducto lista={lista}></ContendioDelProducto>

    </div>

  )

}


export const ListaDeProductos = React.memo(({ seccion }) => {

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

})