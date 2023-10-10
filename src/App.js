
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './page/Navbar';
import Signin from './page/Signin';
import Home from './page/Home';
import Student from './page/Student';
import StudentRecord from './page/StudentRecord';
import Update from './page/Update';



function App() {
  return (

    <Routes>
      <Route path='/' element={<Signin/>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/signin' element={<Student></Student>}></Route>
      <Route path="/student" element={<StudentRecord></StudentRecord>}></Route>
      <Route path="/update" element={<Update></Update>}></Route>
    </Routes>





    
    
  );
}

export default App;
