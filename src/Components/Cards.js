import { Button, Carousel, Modal } from "react-bootstrap";
import Tree from "../Img/tree.avif";

import React from "react";
console.log('hi');
const Cards = (props) => {
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <div class="d-flex justify-content-center p-2 bd-highlight h-70 w-90">
    <Modal.Body>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={Tree} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </div>
   
  </Modal>
    
  );
};

export default Cards;
