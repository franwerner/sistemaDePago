import React from "react"



export const BotonEditarProducto = React.memo(({ alternarMostrar }) => {

    const onClick = (e) => {
        alternarMostrar()
        e.stopPropagation()

    }

    return (
        <>

            <span 
                onClick={onClick} >
                <i className="fa-solid fa-pencil"></i>
            </span>

        </>
    )
})