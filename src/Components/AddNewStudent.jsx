import React,{useState}from "react";
// import { Link } from "react-router-dom";
import uuid from "react-uuid";
import {useNavigate } from "react-router-dom";
import Details from "./Details";

const AddNewStudent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");

  let history = useNavigate();






  const handleSubmit = (e) => {
    e.preventDefault();
    const ids = uuid();
    let uniqueid = ids.slice(0, 8);
    let a = name;
    let b = age;
    let c = course;
    let d = batch;

    Details.push({ id: uniqueid, name: a, age: b, course: c, batch: d });
    history("/Students");
  };
  return (
    <>
    <div>

    {/* <h1>heading</h1> */}
     <div class="container">
     {/* <label class="name">Name:</label> */}
     <input name="name" label="Name" placeholder="Name" class="input" onChange={(e)=>setName(e.target.value)}></input>
     {/* <label class="age">Age:</label> */}
     <input name="age" label="Age" placeholder="Age" class="input" onChange={(e)=>setAge(e.target.value)}/>
     {/* <label class="course">Course:</label> */}
     <input name="course" label="course" placeholder="Course" class="input" onChange={(e)=>setCourse(e.target.value)}/>
     

     {/* <label class="batch">Batch:</label> */}

     <input name="batch" label="Batch" placeholder="Batch " class="input" onChange={(e)=>setBatch(e.target.value)}/>




     </div>


     <div>
     {/* <button class="btn btn-danger button" >Cancel</button>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
    
     {/* <button class="btn btn-success button"></button> */}
    {/* <button onClick={(e)=>handleSubmit(e)} type="submit"       >Submit</button> */}
    <button onClick={(e)=>handleSubmit(e)} type="button" class="btn btn-warning">Cancel</button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

    <button onClick={(e)=>handleSubmit(e)} type="button" class="btn btn-success">Submit</button>

    
     </div>
    </div>
    </>
  );
};

export default AddNewStudent;
