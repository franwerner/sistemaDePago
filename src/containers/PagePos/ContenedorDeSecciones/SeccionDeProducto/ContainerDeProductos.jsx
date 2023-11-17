import CarritoDeComprasIndicador from "@/components//CarritoDeComprasIndicador";
import { productoReducerContext } from "@/context//Contextos";
import { memo, useCallback, useContext } from "react";
import { Stack } from "react-bootstrap";
import styles from "@/styles/seccionDeProductos.module.css"
import ProductoCard from "@/components//ProductoCard";


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
];

const panaderia = [
    {
        "nombre": "Pan",
        "precio": 457,
        "metodo": "kg"
    },
    {
        "nombre": "Factura dulce de leche con crema",
        "precio": 80,
        "metodo": "u"
    },
    {
        "nombre": "Galletitas",
        "precio": 500,
        "metodo": "kg"
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

const ProductoMemoizado = memo(({ agregarProducto, producto }) => {


    const onClick = useCallback((e) => {
        e.target.tagName !== "I" && agregarProducto(producto)
    }, [producto])

    return (
        <ProductoCard
            agregarProducto={onClick}
            producto={producto} />
    )
})



const ContainerDeProductos = memo(({ containerRef }) => {

    const { agregarProducto } = useContext(productoReducerContext)

    const onClick = () => {
        containerRef.current.scrollTop = 0
    }

    return (
        <Stack
            direction="horizontal"
            className="flex-wrap position-relative  justify-content-center justify-content-md-start">
            <div
                onClick={onClick}
                className={`${styles.contenedorDeCarritoIndicador} position-fixed border bg-white zoom border-2 border-dark  p-1 rounded-circle `}>
                <CarritoDeComprasIndicador />
            </div>

            {secciones["home"].map((producto, index) =>
                <ProductoMemoizado
                    key={index}
                    producto={producto}
                    agregarProducto={agregarProducto} />
            )}
        </Stack>
    );
})

export default ContainerDeProductos