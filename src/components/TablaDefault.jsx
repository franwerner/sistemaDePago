import { memo } from "react";
import { Table } from "react-bootstrap";
import styles from "@/styles/TablaDefault.module.css"

export const TablaDefault = memo(({ thead = [], children }) => {

    return (
        <Table striped id={styles.tabla} className="m-0 "  hover>
            <thead className="shadow align-middle text-center position-relative">
                <tr className="border-white ">
                    {
                        thead.map(item =>
                            <th key={item}>{item}</th>
                        )
                    }
                </tr>
            </thead>
            <tbody className="align-middle text-center">
                {children}
            </tbody>
        </Table>
    );

})