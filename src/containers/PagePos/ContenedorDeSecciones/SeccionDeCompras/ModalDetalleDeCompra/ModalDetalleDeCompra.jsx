import { AgregarCerosANumeros } from "@/common/helper/AgregarCerosANumeros";
import { Button, Modal } from "react-bootstrap";
import { lazy, useEffect } from "react";
import { useEventoMostrar } from "@/hooks//useEventoMostrar";
import { ModalBody } from "./ModalBody";
import { cargaDiferida } from "@/common//helper/cargaDiferida";

const TicketDeVenta = lazy(() => import("@/components//TicketDeVenta"))

const BuscarCodigoDeMensaje = cargaDiferida(() => import("@/common//helper/buscarCodigoMensajePersonalizado"))

const productosTest =
{
    venta: { tarifa: "mercadopago", porcentaje: 10, metodosDePago: [{ qr: 1000, trasferencia: 1000 }], total: 2000, fecha: 1701233016968, descuento: 500, cambio: 220 },
    productos: [
        { id: 1, nombre: "Pan", metodo: "kg", cantidad: 12, descuento: 0, precio: 210, precioModificado: 100, editado: true },
        { id: 2, nombre: "Factura de dulcefffffffffffffffffffffffffffff ", metodo: "u", cantidad: 1, descuento: 19, precio: 210, precioModificado: 210, editado: false },
        { id: 3, nombre: "Leche", metodo: "u", cantidad: 12, descuento: 100, precio: 210, precioModificado: 210, editado: false },
    ],
}

const ReImpresion = () => {

    const { mostrar, alternarMostrar } = useEventoMostrar()

    useEffect(() => {
        if (mostrar) {
            print()
            BuscarCodigoDeMensaje({ codigo: "6F" })
            alternarMostrar()
        }
    }, [mostrar])

    return (
        <>
            <i onClick={alternarMostrar} className="fa-solid fa-print fs-2 bg-primary cursor-pointer zoom text-white mx-2 p-2 rounded-circle"></i>

            {mostrar &&
                <TicketDeVenta
                    sumaTotal={productosTest.venta.total}
                    cambio={productosTest.venta.cambio}
                    adeudoTotal={productosTest.venta.total - productosTest.venta.descuento}
                    descuento={productosTest.venta.descuento}
                    listaDeProductos={productosTest.productos}
                    topAbsolute={13}
                    fecha={productosTest.venta.fecha}
                />
            }

        </>
    )
}


const ModalDetalleDeCompra = ({ alternarMostrar, mostrar, orden, estado }) => {

    return (
        <Modal
            show={mostrar}
            size="lg"
            className="h-100 p-0 "
            onHide={alternarMostrar}>

            <Modal.Header
                closeButton>
                <Modal.Title className="d-flex align-items-center p-0 w-100 justify-content-between">

                    <div className="d-flex fw-normal justify-content-center align-items-center">
                        <p className="m-0 me-1">N°</p>
                        <p className="m-0">{AgregarCerosANumeros({ numero: 1, digitos: 4 })}</p>
                        -
                        <p className="m-0">{AgregarCerosANumeros({ numero: orden, digitos: 5 })}</p>

                        {estado == "pagado" &&
                            <ReImpresion />
                        }
                    </div>

                </Modal.Title>
            </Modal.Header>

            <ModalBody />

            <Modal.Footer >
                {estado == "pagado" &&
                    <Button
                        variant="outline-ligthdark"
                        className="fw-bold text-uppercase ls-3 w-100 p-2">
                        Devolver Producto
                    </Button>}
            </Modal.Footer>

        </Modal>
    );
};


export default ModalDetalleDeCompra