import { Route,Routes } from "react-router-dom";
import LocalStorageExample from './LocalStorageExample'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Products from "./Components/Products";
import Cards from "./Components/Cards";
import Employee from "./Components/Employee"
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="RegistrationPage" element={<RegistrationPage/>}/>

        <Route path="LocalStorageExample" element={<LocalStorageExample/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="Cards" element={<Cards/>}/>
        <Route path="Employee" element={<Employee/>}/>

      </Routes>
      <div></div>
    </div>
  )
}

export default App