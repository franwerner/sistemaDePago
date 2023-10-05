import styles from "@/styles/TicketDeVenta.module.css"
import { useContext } from "react";
import { productoReducerContext } from "@/context/Contextos";
import { obtenerFecha } from "../helper/obtenerFecha";
import { useCalcularTotalAValidar } from "../hooks/useCalcularTotalAValidar";
import { usePrecioFinalDeLosProductos } from "../hooks/usePrecioFinalDeLosProductos";
import { Container, Table } from "react-bootstrap";
import { useCalculadoraPorcenje } from "../hooks/useCalcularPorcentaje";
import { separarNumerosConDecimales } from "../helper/separarNumerosConDecimales";

const Productos = ({ nombre, precio, cantidad }) => {

    const porcentaje = useCalculadoraPorcenje(precio) + precio

    return (
        <tr>
            <td className="text-start">{nombre}</td>
            <td className="text-end ">{separarNumerosConDecimales(cantidad)}</td>
            <td className="text-end">$ {separarNumerosConDecimales(porcentaje)}</td>
            <td className="text-end">$ {separarNumerosConDecimales(porcentaje * cantidad)}</td>
        </tr>
    )
}



export const TicketDeVenta = () => {

    const { listaProducto } = useContext(productoReducerContext)

    const { totalAValidar } = useCalcularTotalAValidar()

    const { precioFinal } = usePrecioFinalDeLosProductos()

    // console.log(
    //     ((totalAValidar - precioFinal.calculoConTarifa) / precioFinal.calculoConTarifa) * 100
    // )

    obtenerFecha()

    return (
        <>
            <div className={`p-1  ${styles.ticket}`}>

                <Table className={styles.tabla}>
                    <thead>
                        <tr>
                            <th className="text-start px-0" >Producto</th>
                            <th className="text-end px-0">Cant.</th>
                            <th className="text-end ">Precio</th>
                            <th className="text-end">Importe</th>
                        </tr>
                    </thead>
                    {
                        listaProducto.map((p, index) =>

                            <Productos
                                key={index} //Cambiar por ID
                                nombre={p.nombre}
                                cantidad={p.cantidadSeleccionada}
                                precio={p.precioModificado}

                            />

                        )
                    }
                </Table>

               <Container>
                
               </Container>

            </div>

        </>
    )

};