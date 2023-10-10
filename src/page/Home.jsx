
import { useEffect, useState } from "react";
import { BASE_URL, myAxios } from "../services/helper";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Update from "./Update";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
function Home() {
    const imgurl=`${BASE_URL}/student/image`
   const navigate=useNavigate();
   const dataobj={

    firstname:'',
    lastname:'',
    mobilenumber:'',
    email:'',
    imagename:''
   }
   const [mes,setmes]=useState('');
   const [data,setdata]=useState([]);
useEffect(()=>{
myAxios.get("/student/").then((response)=>
setdata(response.data)
).catch((error)=>console.log(error));
},[])
useEffect(()=>{
    myAxios.get("/admin/").then((response)=>
    setdata(response.data)
    ).catch((error)=>console.log(error));
    },[mes]);
const updateitem=(id)=>{
myAxios.get(`student/${id}`).then((res)=>{

    dataobj.firstname=res.data.firstname;
    dataobj.lasstname=res.data.lastname;
    dataobj.age=res.data.age;
    dataobj.email=res.data.email;
    console.log(dataobj)
    const dataobj1=JSON.stringify(res.data)
    sessionStorage.setItem("data",dataobj1);
navigate("/update")
}).catch((err)=>console.log(err));


}

const deleteitem=(id)=>{
console.log(id);
myAxios.delete(`admin/${id}`).then((res)=>{
console.log(res.data)
setmes(res.data);
}
).catch((err)=>console.log(err));

}
    return ( <>
    <div className="container">
<h1>Student Record</h1>
<table className="table table-boarded">
<thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>email</th>
            <th>Mobile</th>
            <th>Profile</th>
            <th>Delete Record</th>
            <th>Update Record</th>
                    </tr>
        </thead>
        <tbody>
            
            {data.map((item)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
<td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td>{item.mobilenumber}</td>
              <td><img src={`${imgurl}/${item.imagename}`} alt="student image" style={{width:"100px",height:"100px",objectFit:"cover"}}></img></td>
              <td><button onClick={()=>deleteitem(item.stdid)} className="btn btn-danger">Delete</button></td>
              <td><button onClick={()=>updateitem(item.stdid)} className="btn btn-info">Update</button></td>
                </tr>
            ))}
        </tbody>
</table>
    </div>
    
    </> );
}

export default Home;