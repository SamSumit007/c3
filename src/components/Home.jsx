import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
const [Db, setDb] = useState([]);
useEffect (()=>{
axios.get("http://localhost:8080/employee").then(({data})=>{
  setDb(data)
})
},[])

var empnum = Db.length;
console.log(Db);
  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp"></span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{empnum}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted"></span>
        </div>
        <div>
          Total New: <span className="total_new"></span>
        </div>
      </div>
    </>
  );
};
