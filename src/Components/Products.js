import React, { useEffect, useState } from "react";
import { ApiExample } from "../Helper/ApiExample";
import Product from "./Product";
import { Container, Row } from "react-bootstrap";
const Products = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    try {
      const data = await ApiExample();
      console.log(data);
      setProd(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
    <Row>
  
      {prod.map((product, key) => (
          <Product pro={product} key={key} />
        ))}
    </Row>
  </Container>
    // <div class="container-fluid">
    //   <div class="row">
       
    //   </div>
    // </div>
  );
};

export default Products;
