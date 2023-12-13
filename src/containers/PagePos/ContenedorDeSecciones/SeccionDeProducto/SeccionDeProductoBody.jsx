import { productoReducerContext } from "@/context//Contextos";
import { memo, useContext } from "react";
import { Col } from "react-bootstrap";
import ProductoCard from "@/containers//PagePos/ContenedorDeSecciones/SeccionDeProducto/ProductoCard";
import shortid from "shortid";


const kiosco = [
    {
        "id_producto": shortid(),
        "nombre": "Huevo mapple",
        "precio": 80,
        "metodo": "U"
    },
    {
        "id_producto": shortid(),
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
        "id_producto": shortid()
    },
    {
        "id_producto": shortid(),
        "nombre": "Factura dulce de leche con crema",
        "precio": 80,
        "metodo": "u"
    },
    {
        "nombre": "Galletitas",
        "precio": 500,
        "metodo": "kg",
        "id_producto": shortid(),
    },
    {
        "id_producto": shortid(),
        "nombre": "Galletitas2",
        "precio": 500,
        "metodo": "kg"

    },
    {
        "id_producto": shortid(),
        "nombre": "Galletitas3",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "id_producto": shortid(),
        "nombre": "Galletitas24",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "id_producto": shortid(),
        "nombre": "Galletitas34",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "id_producto": shortid(),
        "nombre": "Galletitas25",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "id_producto": shortid(),
        "nombre": "Galletitas35",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "id_producto": shortid(),
        "nombre": "Galletitas26",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "id_producto": shortid(),
        "nombre": "Galletitas36",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "id_producto": shortid(),
        "nombre": "Galletitas27",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "id_producto": shortid(),
        "nombre": "Galletitas37",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "id_producto": shortid(),
        "nombre": "Galletitas28",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "id_producto": shortid(),
        "nombre": "Galletitas38",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "id_producto": shortid(),
        "nombre": "Galletitas99",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "id_producto": shortid(),
        "nombre": "Galletitas993",
        "precio": 500,
        "metodo": "kg"
    },

    {
        "id_producto": shortid(),
        "nombre": "Galletit9as2",
        "precio": 500,
        "metodo": "kg"
    },
    {
        "id_producto": shortid(),
        "nombre": "Gal9letitas3",
        "precio": 500,
        "metodo": "kg"
    },

];

const helados = [
    {
        "id_producto": shortid(),
        "nombre": "pote 1/4",
        "precio": 2000,
        "metodo": "u"
    }
]

const rotiseria = [
    {
        "id_producto": shortid(),
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

    return (
        <Col
            className="flex-wrap position-relative align-content-start p-0 d-flex justify-content-center justify-content-md-start">
            {secciones["home"].map((producto) =>
                <ProductoMemoizado
                    key={producto.id_producto}
                    producto={producto}
                    productoEnLista={listaProducto.find(item => item.id_producto == producto.id_producto)}
                    agregarProducto={agregarProducto} />
            )}
        </Col>
    );
})

export default SeccionDeProductoBody