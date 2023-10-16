import { useEffect, useState } from 'react';
import { Apiexample2 } from '../Helper/Apiexample2';
import { Container, Row } from 'react-bootstrap';
import Employees from './Employees';

const Employee = () => {
    const [Employee, setEmployee] = useState('');

    useEffect(()=>{
        FetchData();
    },[])

      const FetchData = async () => {
        try {
          const data = await Apiexample2();
          console.log(data);
          setEmployee(data)
        } catch (error) {
          console.error(error);
        }
      };
  return (


    <Container>
    <Row>
  
      {Employee.map((emply, key) => (
          <Employees pro={emply} key={key} />
        ))}
    </Row>
  </Container>
   
  )
}

export default Employee