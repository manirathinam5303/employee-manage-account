import React from 'react';
import { Routes, Route ,} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeDetials from './components/EmployeDetials';
function App() {
  
  
  return (
    <>
      <div>
        {/* <Login></Login> */}

         <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/register' element={<Registration />} />
          <Route path="/employetetails" element={<EmployeDetials />} />
        </Routes> 
       
      </div>
    </>
  );
}

export default App;
