import { Button, Modal } from "react-bootstrap";



const InterfaceDeRetiroYIngresoEfectivo = ({ tipo, alternarMostrar, mostrar }) => {

    return (
        <Modal 
        show={mostrar}
         onHide={alternarMostrar}>
            <Modal.Header closeButton>
                <Modal.Title>{tipo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={alternarMostrar}>
                    Close
                </Button>
                <Button variant="primary" onClick={alternarMostrar}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};


export default InterfaceDeRetiroYIngresoEfectivo