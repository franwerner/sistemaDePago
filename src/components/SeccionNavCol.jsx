import { memo } from "react";
import { Col } from "react-bootstrap";


export const SeccionNavCol = memo(({ list = [], children }) => {
    return (
        <>
            {
                list.map((item, index) =>
                    <Col
                        className="p-0"
                        key={index}
                        xs="auto"
                        {...item.props}
                    >
                        {item.component}
                    </Col>
                )
            }
            {children}
        </>
    );
});