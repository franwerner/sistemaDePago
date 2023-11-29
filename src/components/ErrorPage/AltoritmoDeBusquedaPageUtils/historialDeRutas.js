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
                                { nombre: "añadir" }
                            ]
                        },
                        { nombre: "clientes" },
                        { nombre: "caja", children: [{ nombre: "pagos" }] },
                        {
                            nombre: "venta", children:
                                [
                                    { nombre: "pagos" },
                                ]
                        },
                        { nombre: "productos", children: [{ nombre: "f" }, { nombre: "fr" }] }
                    ]
            },
            { nombre: "empleado" },
            { nombre: "sucursales" }
        ]
    }

]


export default historialDeRutas