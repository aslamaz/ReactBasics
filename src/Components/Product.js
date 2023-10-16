import React, { useState } from "react";
import {  Button, Card } from "react-bootstrap";
import { BsCurrencyRupee } from "react-icons/bs";
import Cards from "./Cards";

const Product = ({ pro }) => {
  const [check, setCheck]=useState(false)

  return (
    <>
    {
      check && <Cards/>
    }
    <Card style={{ width: "18rem",margin:'5px', }} className="shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Img
        variant="top"
        src={pro.images[0]}
        alt=""
        thumbnail
        height={"171"}
        width={"180"}
        className="object-fit-contain p-4"
      />
      <Card.Body>
        <Card.Title style={{ minHeight: "70px" }}>{pro.title}</Card.Title>
        <Card.Text style={{minHeight:"150px"}}>{pro.description}</Card.Text>
        <div style={{ minHeight: "150px" }}>
        <Card.Text >
          <h5>
            Just <BsCurrencyRupee />
            {pro.price}
          </h5>
        </Card.Text>
        <Button variant="primary" onClick={() => setCheck(true)}>
        Launch vertically centered modal
      </Button>
        <Cards
        show={check}
        onHide={() => setCheck(false)}
      />
        
        </div>
      </Card.Body>
      
    </Card>
    
    </>
  );
};

export default Product;
