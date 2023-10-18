import React, { useState } from "react";
import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";
import LoginPage from "./LoginPage";

const RegistrationPage = () => {
  const [FirstName, SetFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Gender, setGender] = useState("");
  const [Marital, setMarital] = useState("");
  const [Data, setData] = useState([]);

  const [modalShow, setModalShow] = useState(false);
console.log(Data);
  const insertData = () => {
    var id = null;
    if (Data.length === 0) {
      id = 1;
    } else {
      id = Data.id+1;
    }

    const data = {
      id,
      FirstName,
      LastName,
      Email,
      Password,
      Gender,
      Marital,
    };
 
    setData([...Data, data]);
    
      setModalShow(true)
    
  };

  return (
    <div style={{ width: "100% " }}>
      <Form
        style={{
          width: "500px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        <Form.Group style={{ display: "flex", justifyContent: "center" }}>
          <h4>RegistrationPage</h4>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupFirstName">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" placeholder="Enter firstName" onChange={(event) => {SetFirstName(event.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupLastname">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" placeholder="Enter lastName" onChange={(event) => {setLastName(event.target.value)}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" onChange={(event) => {setEmail(event.target.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={(event) => {setPassword(event.target.value)}}/>
        </Form.Group>

        <Form.Label>Gender:</Form.Label>
        <Form.Group
          style={{
            display: "flex",
            padding: "5px",
            justifyContent: "space-evenly",
          }}
        >
          <Form.Check type="radio" name="groupG" label="Male" value={"male"} onClick={(event)=>{setGender(event.target.value)}}/>
          <Form.Check type="radio" name="groupG" label="Female" value={"female"}  onClick={(event)=>{setGender(event.target.value)}}/>
        </Form.Group>

        <Form.Label>Marital:</Form.Label>
        <Form.Group style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Form.Check type="radio" name="groupM" label="Single"  value={"single"} onClick={(event)=>{setMarital(event.target.value)}}/>
          <Form.Check type="radio" name="groupM" label="Married" value={"married"}  onClick={(event)=>{setMarital(event.target.value)}}/>
        </Form.Group>

        <Form.Label>Departments:</Form.Label>
        <DropdownButton id="dropdown-item-button" title="Departments">
          <Dropdown.ItemText>Departments</Dropdown.ItemText>
          <Dropdown.Item as="button">Computer Science</Dropdown.Item>
          <Dropdown.Item as="button">Mechanical</Dropdown.Item>
          <Dropdown.Item as="button">Electrical</Dropdown.Item>
          <Dropdown.Item as="button">civil</Dropdown.Item>
          <Dropdown.Item as="button">automobile</Dropdown.Item>
          <Dropdown.Item as="button">CyberSecurity</Dropdown.Item>
        </DropdownButton>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: "15px",
          }}
        >
          <Button
            type="button"
            variant="primary"
            size="sm"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
            }}
            onClick={insertData}
        
          >
            SUBMIT
          </Button>
          <Button
            type="reset"
            variant="primary"
            size="sm"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
            }}
          >
            CANCEL
          </Button>
        </div>
      </Form>

<div style={{width:"500px",height:"500px"}}>
      <Modal
        show={modalShow}
        style={{
          width: "100%",
          height:"100%",
          position: "absolute",
          top: "50%" /* position the top edge of the element at the middle of the parent */,
          left: "50%" /* position the left edge of the element at the middle of the parent */,
          transform: "translate(-50%, -50%)",
          borderRadius: "5px",
        }}
       
        size="ms"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body style={{width:"400",height:"600px"}}>
          {
            
              <LoginPage details={Data}/> 
            
          }
        </Modal.Body>
       
      </Modal>
      </div>
    </div>
    
  );
};

export default RegistrationPage;
