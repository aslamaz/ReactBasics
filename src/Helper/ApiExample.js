import axios from "axios";

export const ApiExample = async () => {
   const api = await axios.get("https://dummyjson.com/products");
   const Products = await api.data.products;
   return Products

};


export const EmployeeApi = async () => {

   try {
       const api = await axios.get("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
      
       const Employee = await api.data;
       return Employee
   } catch (error) {
       console.error(error);
   }
  
 

};

