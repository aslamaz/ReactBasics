import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegistrationPage from "./RegistrationPage";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";

function MyVerticallyCenteredModal(props) {
  return (
    <div style={{ width: "100% " }}>
      <Modal
        style={{
          width: "250px",
          position: "absolute",
          top: "50%" /* position the top edge of the element at the middle of the parent */,
          left: "50%" /* position the left edge of the element at the middle of the parent */,
          transform: "translate(-50%, -50%)",
          borderRadius: "5px",
        }}
        {...props}
        size="ms"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login Successfully
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>you are Successfully Login</Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function MyVerticallyCenteredModalFalse(props) {
  return (
    <div style={{ width: "100% " }}>
      <Modal
        style={{
          width: "250px",
          position: "absolute",
          top: "50%" /* position the top edge of the element at the middle of the parent */,
          left: "50%" /* position the left edge of the element at the middle of the parent */,
          transform: "translate(-50%, -50%)",
          borderRadius: "5px",
        }}
        {...props}
        size="ms"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login Unsuccessfully
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>you are Unsuccessfully login,  Please check your email and password</Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const LoginPage = (props) => {
  const details = props.details;
 
  console.log(details);
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalShowFalse, setModalShowFalse] = useState(false);
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  

  const Check = ()=>{
   const found = details.find((values) => values.Email === Email && values.Password === Password);
console.log(found);
  if (found) {
    
    setModalShow(true)
  } else {
    setModalShowFalse(true)
  }
 
    
}
    
   
  
  
  
  return (
    <div style={{ width: "100% ",zIndex:'99999' }}>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          padding: "10px",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required  onChange={(event) =>{setEmail(event.target.value)}}/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) =>{setPassword(event.target.value)}}/>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicCheckbox"
          style={{ display: "flex", justifyContent: " space-between" }}
        >
          <Form.Check type="checkbox" label="Accept all cookies" />
          <a href="!#">Forgot password?</a>
        </Form.Group>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
          type="submit"
            variant="primary"
            size="sm"
             onClick={Check}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "200px",
            }}
          >
            SUBMIT
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
            padding: "10px",
          }}
        >
          Not a member?<Link to={"./RegistrationPage"}>Register</Link>
        </div>

        <p style={{ display: "flex", justifyContent: "center" }}>
          or sign up with:
        </p>
        <div
          style={{
            padding: "5px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <a href="https://www.facebook.com/">
            <BiLogoFacebookCircle />
          </a>
          <a href="https://www.google.com/">
            <AiFillGoogleCircle />
          </a>
          <a href="https://twitter.com/login?lang=en">
            <AiFillTwitterCircle />
          </a>
          <a href="https://github.com/">
            <AiFillGithub />
          </a>
        </div>
      </Form>
      <MyVerticallyCenteredModal
        show={modalShow}
        
      />
      <MyVerticallyCenteredModalFalse
      show={modalShowFalse}
      onHide={() => setModalShowFalse(false)}
      />
    </div>
  );
};

export default LoginPage;
