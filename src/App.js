
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './page/Navbar';
import Signin from './page/Signin';
import Home from './page/Home';
import Student from './page/Student';
import StudentRecord from './page/StudentRecord';
import Update from './page/Update';
import Studentlogin from './page/Studentlogin'
import Details from './page/Details';
import Logout from './page/Logout';
import Newpage from './page/NewPage';
import Course from './page/Course';


function App() {
  return (

    <Routes>
      <Route path='/' element={<Signin/>}></Route>
      <Route path='/logout' element={<Logout></Logout>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/signin' element={<Student></Student>}></Route>
      <Route path="/student" element={<StudentRecord></StudentRecord>}></Route>
      <Route path="/update" element={<Update></Update>}></Route>
      <Route path="/studentlogin" element={<Studentlogin></Studentlogin>}></Route>
      <Route path="/details/:id" element={<Details></Details>}></Route>
      <Route path="/course/:name" element={<Course></Course>}></Route>
      <Route path="/new" element={<Newpage></Newpage>}/>
    </Routes>
    





    
    
  );
}

export default App;
