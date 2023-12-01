import { useRef } from "react";
import { useEventoMostrar } from "../../hooks/useEventoMostrar";
import { useTouchMove } from "../../hooks/useTouchMove";
import { useAltenarModoResponsive } from "../../hooks/useAltenarModoResponsive";


export const hocTouchYReponsive = (WrappedComponent) => {

    return (props) => {

        const containerRef = useRef(null);

        const { alternarMostrar, mostrar } = useEventoMostrar();

        useAltenarModoResponsive({ alternarMostrar, mostrar });

        useTouchMove({ alternarMostrar, containerRef });

        return <WrappedComponent {...props}
            alternarMostrar={alternarMostrar}
            mostrar={mostrar}
            containerRef={containerRef} />;
    };

};