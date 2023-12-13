import { memo } from "react";
import { Table } from "react-bootstrap";
import styles from "@/styles/TablaDefault.module.css"

export const TablaDefault = memo(({ thead = [], children }) => {

    return (
        <Table striped  className="border " id={styles.tabla}  hover>
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