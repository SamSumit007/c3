import { Navigate, useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react";

import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

export const EmployeeDetails = () => {
  const {id} = useParams();

    const [User, setUser] = useState({})
    const {isAuth} = useContext(AuthContext)
    useEffect (()=>{
        axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>{
           setUser(data) 
        });
    },[]);
if(!isAuth){
return <Navigate to={"/login"} />
}
  
  
  
  return (
    <div className="user_details">
      <img className="user_image"src={User.image} />
      <h4 className="user_name" >{User.username} </h4>
      <span className="user_salary">${User.salary}</span>
      <span className="tasks">
        {User?.tasks?.map((e,i)=>{

       
        <li className="task" key={i}>
          {e}
        </li>
         })}
      </span>
      Status: <b className="status">{User.status}</b>
      Title: <b className="title">{User.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
