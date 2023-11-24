const historialDeRutas = [
    [
        {
            nombre: "pos", children:
                [
                    { nombre: "compras" },
                    { nombre: "almacen" },
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
                                nombre: "agregar", children: [{ nombre: "pene" }],
                            },
                            {
                                nombre: "zuc"
                            }
                        ]
                    },

                ]
        }
    ],
    [
        { nombre: "empleados" }
    ]
]

export default historialDeRutas