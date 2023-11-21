import { separarNumerosConDecimales } from "@/common//helper/separarNumerosConDecimales";
import { Stack } from "react-bootstrap";

const SeccionExtra = () => {
    return (
        <div className="w-100">
            <Stack direction="horizontal" gap={4} className="m-0  p-3">
                <p style={{ minWidth: "70px" }} className="m-0">
                    Cambio
                </p>
                <div className="vr" />
                <p className="m-0 fw-semibold">
                    $/ {separarNumerosConDecimales(123)}
                </p>
            </Stack>

            <Stack direction="horizontal" gap={4} className="m-0  p-3">
                <p style={{ minWidth: "70px" }} className="m-0">
                    Tarifa
                </p>
                <div className="vr" />
                <p className="m-0 ">
                    Local
                </p>
                <div className="vr" />
                <p className="m-0 fw-semibold">(10%)</p>
            </Stack>
            <Stack direction="horizontal" gap={4} className="m-0  p-3">
                <p  className="m-0">
                    Productos modificados
                </p>
                <div className="vr" />
                <p className="m-0 fw-semibold">
                    (9)
                </p>
            </Stack>
        </div>
    );
};


export default SeccionExtra