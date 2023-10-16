import axios from "axios";


export const Apiexample2 = async () => {
    const api = await axios.get("https://dummy.restapiexample.com/api/v1/employees");
    const Employee = await api.data;
    return Employee
 
 };