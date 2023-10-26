
import { SuspenseLoading } from "@/components//SuspenseLoading";
import { ProductoReducerProvider } from "@/context//provider/ProductosReducerProvider";
import { TarifaProvider } from "@/context//provider/TarifaProvider";
import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";


const ContenedorDeSecciones = React.memo(() => {


    return (
        <Container fluid className="p-0 overflow-auto d-flex flex-column flex-grow-1 h-100  ">
            <ProductoReducerProvider>
                <TarifaProvider>
                    <SuspenseLoading>
                        <Outlet />
                    </SuspenseLoading>

                </TarifaProvider>

            </ProductoReducerProvider>
            </Container>
    );
})

export default ContenedorDeSecciones