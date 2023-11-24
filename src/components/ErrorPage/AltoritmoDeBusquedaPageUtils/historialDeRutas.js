const historialDeRutas = [
    [
        {
            nombre: "pos", children:
                [
                    { nombre: "compras" },
                    { nombre: "almacen" },
                    { nombre: "clientes" },
                    { nombre: "caja", children: [{ nombre: "pagos" }] },
                    {
                        nombre: "venta", children:
                            [
                                { nombre: "pagos" },
                            ]
                    },
                    {
                        nombre: "productos", children: [
                            {
                                nombre: "agregar",
                            },
                        ]
                    },

                ]
        }
    ],
    [
        { nombre: "empleado" }
    ]
]

export default historialDeRutas