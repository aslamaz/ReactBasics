import React from "react";
import { Button, Card, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <div style={{width:'100% '}}>
      <Modal
      style={{width:'250px',
    position: 'absolute',
    top: '50%',  /* position the top edge of the element at the middle of the parent */
    left: '50%', /* position the left edge of the element at the middle of the parent */
    transform: 'translate(-50%, -50%)'
    }}
        {...props}
        size="ms"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Employee Image
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.img} alt="..." />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const Employees = ({ pro }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card style={{ width: "450px", height: "250px" }}>
      <Card.Body>
        <div style={{ display: "flex", border: "1px solid" }}>
          <div style={{ width: "50%" }}>
            <button>
              <img
                src={pro.imageUrl}
                alt="..."
                onClick={() => setModalShow(true)}
              />
            </button>
          </div>
          <div style={{ width: "50%" }}>hello</div>
        </div>
      </Card.Body>
      <MyVerticallyCenteredModal
        show={modalShow}
        img={pro.imageUrl}
        onHide={() => setModalShow(false)}
      />
    </Card>
  );
};

export default Employees;
