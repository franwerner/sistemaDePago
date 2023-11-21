
import { splitDeRutasUtils } from "@/common//utils/splitDeRutasUtils";
import { SuspenseSecondaryPageLoading } from "@/components//SuspenseSecondaryPageLoading";
import { ProductoReducerProvider } from "@/context//provider/ProductosReducerProvider";
import { RestoDelPagoProvider } from "@/context//provider/RestoDelPagoProvider";
import { TarifaProvider } from "@/context//provider/TarifaProvider";
import { memo } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";


const ContenedorDeSecciones = memo(() => {

    const rutas = splitDeRutasUtils()

    return (
        <Container
            fluid
            className="p-0 scrollHidden d-flex flex-column flex-grow-1 h-100  ">
            <TarifaProvider>

                <ProductoReducerProvider>

                    <RestoDelPagoProvider>

                        <SuspenseSecondaryPageLoading>
                            {
                                rutas.length == 1 ? <p>asads</p> : <Outlet />
                            }
                        </SuspenseSecondaryPageLoading>

                    </RestoDelPagoProvider>

                </ProductoReducerProvider>

            </TarifaProvider>
        </Container >
    );
})

export default ContenedorDeSecciones