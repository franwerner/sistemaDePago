
export const BotonVolver = ({ alternarMostrar }) => {

    return (
        <div
            style={{ background: "#D3D3D3", cursor: "pointer" }}
            className="fs-5 text-white fw-bolder py-4 py-md-0 my-md-2 px-3  mx-md-5 d-flex align-items-center justify-content-center flex-grow-1 flex-md-grow-0  "

            onClick={alternarMostrar}>
            <i className="fa-solid me-1 fa-angles-left"></i>
            <span>
                Volver
            </span>
        </div>

    );
};