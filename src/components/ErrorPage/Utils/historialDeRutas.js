const historialDeRutas = [
    {
        nombre: "raiz", children: [
            {
                nombre: "pos", children:
                    [
                        { nombre: "compras" },
                        {
                            nombre: "inventario", children: [
                                { nombre: "gestion" },
                                { nombre: "agregar" }
                            ]
                        },
                        {
                            nombre: "clientes", children: [
                                { nombre: "gestion" }
                            ]
                        },
                        { nombre: "caja", children: [{ nombre: "pagos" }] },
                        {
                            nombre: "venta", children:
                                [
                                    { nombre: "pagos" },
                                ]
                        },
                        { nombre: "productos" }
                    ]
            },
            { nombre: "empleado" },
            { nombre: "sucursales" },
            { nombre: "configuracion" }
        ]
    }

]


export default historialDeRutas