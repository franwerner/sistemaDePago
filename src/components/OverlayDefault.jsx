import { OverlayTrigger, Tooltip } from "react-bootstrap";


   export const OverlayDefault = ({ children, overlayCustom,position = "bottom"}) => {

        return (
            <OverlayTrigger
                placement={position}
                delay={{ show: 100, hide: 200 }}
                overlay={<Tooltip>{overlayCustom}</Tooltip>}
    
            >
                {children}
            </OverlayTrigger>
        );
    }
    