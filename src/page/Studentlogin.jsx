import React, { useState } from 'react';
    //import '../page/Login.css'; // Import your CSS file for styling
    import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
    import "../page/Newcss.css"
import { myAxios } from '../services/helper';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Studentlogin() {
  const navigate =useNavigate();
    const [userdata,setdata]=useState({
      email:'',
      password:''
    })
  const handelchange=(e)=>{
    const {name,value}=e.target;
    setdata({...userdata,[name]:value})
  }
    const handleLogin = (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      // Handle the login logic here
      // You can make an API call to authenticate the user
      // For this example, we'll just display a message
      
      myAxios.post("/student/",userdata,{
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res)=>{
       console.log(res.data)
       sessionStorage.setItem("studlog",true)
       Swal.fire(
        {
            title:'Success!',
            text:'Successfully Logged in',
            timer:10000,
            icon:'success'
            
        }
    );
    //sessionStorage.setItem("sid",res.data.id);
    
    navigate(`/details/${res.data.id}`)
    }).catch((e)=>{console.log(e)
      console.log(userdata)
      Swal.fire(
        {
            title:'Error!',
            text:'Enter valid credentials',
            timer:5000,
            icon:'error'
            
        }
    );
    })
     
    };
  
    return (<>
      <section className="vh-100">
<div className="container-fluid h-custom">
  <div className="row d-flex justify-content-center align-items-center h-100">
    <div className="col-md-9 col-lg-6 col-xl-5">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
        className="img-fluid" alt="Sample image"/>
    </div>
    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <form onSubmit={handleLogin}>
        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
          <p className="lead fw-normal mb-0 me-3"><strong>Stuent Login</strong></p>
          <br></br>
          <br></br><br></br>
          <br></br>
          
        </div>

        
        <div className="form-outline mb-4">
          <input type="email"  id="email" placeholder="name@example.com" name='email' value={userdata.email} onChange={handelchange} className="form-control form-control-lg"
             />
          <label className="form-label" for="form3Example3">Email address</label>
        </div>

       
        <div className="form-outline mb-3">
          <input type="password" name="password" id="password" placeholder="Password" value={userdata.password} onChange={handelchange} className="form-control form-control-lg"
             />
          <label className="form-label" for="form3Example4">Password</label>
        </div>

        <div className="d-flex justify-content-between align-items-center">
         
          <div className="form-check mb-0">
            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
            <label className="form-check-label" for="form2Example3">
              Remember me
            </label>
          </div>
          <a href="#!" className="text-body">Forgot password?</a>
        </div>

        <div className="text-center text-lg-start mt-4 pt-2">
          <button type="submit" className="btn btn-primary btn-lg"
            style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
          <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={"/signin"}
              className="link-danger">Register</Link></p>
        </div>

      </form>
    </div>
  </div>
</div>
<div
  className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
 
  <div className="text-white mb-3 mb-md-0">
    
  </div>
 
  <div>
    <a href="#!" className="text-white me-4">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="#!" className="text-white me-4">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="#!" className="text-white me-4">
      <i className="fab fa-google"></i>
    </a>
    <a href="#!" className="text-white">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
  
</div>
</section></>
        
    //  <form onSubmit={handleLogin}>
    //     <div className="container">
    //   <div className="row justify-content-center align-items-center vh-100">
    //     <div className="col-md-4">
          
    //         <h2 className="mb-4">Login</h2>
    //         <div className="mb-3">
    //           <label htmlFor="email" className="form-label">Email address</label>
    //           <input type="email" className="form-control" id="email" placeholder="name@example.com" name='email' value={userdata.email} onChange={handelchange}/>
    //         </div>
    //         <div className="mb-3">
    //           <label htmlFor="password" className="form-label">Password</label>
    //           <input type="password" name='password' className="form-control" id="password" placeholder="Password" value={userdata.password} onChange={handelchange}/>
    //         </div>
    //         <div className="mb-3 form-check">
    //           <input type="checkbox" className="form-check-input" id="rememberMe" />
    //           <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
    //         </div>
    //         <button type="submit" className="btn btn-primary w-100">Login</button>
          
    //     </div>
    //   </div>
    // </div>
    //     </form>
      
    );
  }

export default Studentlogin;