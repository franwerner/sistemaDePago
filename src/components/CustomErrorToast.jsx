import { Toast, ToastContainer } from "react-bootstrap"


export const CustomErrorToast = ({ error, alternarMostrar, mostrar }) => {

    const { codigo, motivo } = error



    return (
        <ToastContainer   className="bg-light rounded"   position="top-center" style={{ zIndex: 5000 }}>
            <Toast   show={mostrar} onClose={alternarMostrar}  >
                <Toast.Header className="d-flex  fs-5 justify-content-between">
                    <div>
                        <small className="text-muted me-2 fw-bolder">Codigo : </small>
                        <strong className="text-danger">{codigo}</strong>
                    </div>
                </Toast.Header>
                <Toast.Body>
                <small>{motivo}</small>
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )

}