import { productoReducerContext } from "@/context//Contextos";
import { lazy, memo, useContext } from "react";
import { Col } from "react-bootstrap";
import ProductoCard from "@/containers//PagePos/ContenedorDeSecciones/SeccionDeProducto/ProductoCard";
import shortid from "shortid";
const ContenedorVacio = lazy(() => import("@/components//ContenedorVacio"))
const SvgBarCode = lazy(() => import("@/components//Svg/SvgBarCode"))

const kiosco = [
    {
        "nombre": "Huevo mapple",
        "precio": 80,
        "metodo": "U"
    },
    {
        "nombre": "Semillas ",
        "precio": 500,
        "metodo": "kg"
    }
]

const panaderia = [
    {
        "nombre": "Pan",
        "precio": 457,
        "metodo": "kg",
    },
    {
        "nombre": "Factura dulce de leche con crema",
        "precio": 80,
        "metodo": "u"
    },
    {
        "nombre": "Galletitas",
        "precio": 500,
        "metodo": "kg",
    },
    {
        "nombre": "Galletitas2",
        "precio": 500,
        "metodo": "kg"

    },
    {
        "nombre": "Galletitas3",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "nombre": "Galletitas24",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "nombre": "Galletitas34",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "nombre": "Galletitas25",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "nombre": "Galletitas35",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "nombre": "Galletitas26",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "nombre": "Galletitas36",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "nombre": "Galletitas27",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "nombre": "Galletitas37",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "nombre": "Galletitas28",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "nombre": "Galletitas38",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "nombre": "Galletitas99",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "nombre": "Galletitas993",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "nombre": "Galletit9as2",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "nombre": "Gal9letitas3",
        "precio": 500,
        "metodo": "kg"
    },

];

const helados = [
    {
        "nombre": "pote 1/4",
        "precio": 2000,
        "metodo": "u"
    }
]

const rotiseria = [
    {
        "nombre": "papas 1/4",
        "precio": 2000,
        "metodo": "u"
    }
]

const secciones = {
    "kiosco": kiosco,
    "panaderia": panaderia,
    "home": [...panaderia, ...kiosco, ...rotiseria, ...helados],
    "helados": helados,
    "rotiseria": rotiseria,
};

const ProductoMemoizado = memo(({ agregarProducto, producto, productoEnLista }) => {

    return (
        <ProductoCard
            productoEnLista={productoEnLista}
            agregarProducto={agregarProducto}
            producto={producto} />
    )
})



const SeccionDeProductoBody = memo(() => {

    const { agregarProducto, listaProducto } = useContext(productoReducerContext)

    const productos = [1]

    return (
        <Col
            className="flex-wrap position-relative align-content-start p-0 d-flex justify-content-center justify-content-md-start">
            {
                productos.length > 0 ? secciones["home"].map((producto) =>
                    <ProductoMemoizado
                        key={producto.nombre}
                        producto={producto}
                        productoEnLista={listaProducto.find(item => item.nombre == producto.nombre)}
                        agregarProducto={agregarProducto} />
                )
                    :

                    <ContenedorVacio texto={"No se encontro ningun producto"}>
                        <SvgBarCode />
                    </ContenedorVacio>
            }
        </Col>
    );
})

export default SeccionDeProductoBody