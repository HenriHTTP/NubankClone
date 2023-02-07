import React from "react";
import {BrowserRouter as Router,Route,Routes}from "react-router-dom";
import FormLogin from "./components/login/form.login";
import CreateAccount from './components/CreateAccount/createAccount.form'
import RegisterPage from "./components/register/rigister.page";

function App() {
  return (
   <>

  <Router> 
    <Routes> 
      <Route exact path='/' element={<FormLogin/>}/> 
      <Route  path='/login' element={<FormLogin/>}/> 
      <Route  path='/createAccount' element={<CreateAccount/>}/> 
      <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
   </Router>
   </>
  );
}

export default App;
