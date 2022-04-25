import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

export const EmployeeList = () => {
  const [Users, setUsers] = useState([])

useEffect (()=>{
        axios.get("http://localhost:8080/employee").then(({data})=>{
           setUsers(data) 
        });
    },[]);
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      <div className="employee_card">
      {Users.map((user)=>(
           <Link to={`/employeelist/${user.id}`} >
    
        <img className="employee_image" src={user.image} alt="" />
        <span className="employee_name">{user.employee_name}</span>
        <span className="employee_title">{user.title}</span>
        </Link>
        ) )}
      </div>
      
    </div>
    
  );
};
