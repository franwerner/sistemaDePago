import { Col, Row } from "react-bootstrap";
import styles from "@/styles/PlantillaProductos.module.css"
import { productoReducerContext } from "@/context//Contextos";
import React, { useContext, } from "react";
import { ProductoCard } from "@/components//ProductoCard";





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
    },
    {
        "nombre": "Galletitas2",
        "precio": 500,
        "metodo": "Kilogramos"
    },
    {
        "nombre": "Galletitas3",
        "precio": 500,
        "metodo": "Kilogramos"
    },

    {
        "nombre": "Galletitas24",
        "precio": 500,
        "metodo": "Kilogramos"
    },
    {
        "nombre": "Galletitas34",
        "precio": 500,
        "metodo": "Kilogramos"
    },

    {
        "nombre": "Galletitas25",
        "precio": 500,
        "metodo": "Kilogramos"
    },
    {
        "nombre": "Galletitas35",
        "precio": 500,
        "metodo": "Kilogramos"
    },

    {
        "nombre": "Galletitas26",
        "precio": 500,
        "metodo": "Kilogramos"
    },
    {
        "nombre": "Galletitas36",
        "precio": 500,
        "metodo": "Kilogramos"
    },

    {
        "nombre": "Galletitas27",
        "precio": 500,
        "metodo": "Kilogramos"
    },
    {
        "nombre": "Galletitas37",
        "precio": 500,
        "metodo": "Kilogramos"
    },

    {
        "nombre": "Galletitas28",
        "precio": 500,
        "metodo": "Kilogramos"
    },
    {
        "nombre": "Galletitas38",
        "precio": 500,
        "metodo": "Kilogramos"
    },

    {
        "nombre": "Galletitas99",
        "precio": 500,
        "metodo": "Kilogramos"
    },
    {
        "nombre": "Galletitas993",
        "precio": 500,
        "metodo": "Kilogramos"
    },

    {
        "nombre": "Galletit9as2",
        "precio": 500,
        "metodo": "Kilogramos"
    },
    {
        "nombre": "Gal9letitas3",
        "precio": 500,
        "metodo": "Kilogramos"
    },

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






const secciones = {
    "Kiosco": kiosco,
    "Panaderia": panaderia,
    "Home": [...panaderia, ...kiosco, ...rotiseria, ...helados],
    "Helados": helados,
    "Rotiseria": rotiseria,
};


export const ContainerDeProductos = React.memo(({ seccion }) => {

    const { agregarProducto } = useContext(productoReducerContext)

    return (

        <Row className="p-0 scrollHidden ">

            <Col className={`flex-wrap d-flex justify-content-center justify-content-md-start`} >

                {secciones[seccion].map((lista, index) =>

                    <div className={`mx-2 flex-column d-flex my-2  position-relative  ${styles.producto}`}
                        key={index}
                        onClick={() => agregarProducto(lista)}
                    >
                        <ProductoCard producto={lista}></ProductoCard>
                    </div>

                )}
            </Col>
        </Row>
    )
})


