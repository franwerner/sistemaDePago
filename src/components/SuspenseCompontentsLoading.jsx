import { Suspense, memo } from "react";
import { Spinner } from "react-bootstrap";


export const SuspenseCompontentsLoading = memo(({ children, texto = "" }) => {


    return (
        <Suspense
            children={children}
            fallback={

                <div className=" p-0 justify-content-center  d-flex flex-column align-items-center">
                    <Spinner
                        animation="border"
                        style={{ height: "30px", width: "30px" }}
                        variant="secondary" />

                    <p className="m-0 fw-medium text-ligthdark ls-3 ">{texto}</p>

                </div>
            }>
        </Suspense>
    );
})