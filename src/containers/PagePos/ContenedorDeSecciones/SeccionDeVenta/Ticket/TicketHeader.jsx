import styles from "@/styles/SeccionDeVenta.module.css"

export const TicketHeader = () => {

    const mapeo = new Array(15).fill("")

    return (
        <>
            <div className={`${styles.pinchoTicket} d-flex position-absolute  justify-content-between`}>
                {
                    mapeo.map((i, index) => <p key={index}></p>)
                }
            </div>

            <p className="text-uppercase text-white p-1 p-md-2 p-xl-3 p-xxl-4  mt-4 fw-semibold m-0   text-center">
                n° de ticket 0001-000001
            </p>


        </>

    )
}
