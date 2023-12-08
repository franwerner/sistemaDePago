import { memo } from "react";
import { Button } from "react-bootstrap";

export const BotonSeccionNav = memo(({ children,onClick }) => {
    return (
        <Button
        onClick={onClick}
        variant="outline-ligthdark zoom w-100 fs-6 ls-4 fw-medium">
            {children}
        </Button>
    );
})