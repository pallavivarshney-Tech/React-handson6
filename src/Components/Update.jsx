import React from 'react'
import {useState,useEffect}from "react";
import uuid from "react-uuid";
import {Link,useNavigate } from "react-router-dom";
import Details from "./Details";

function Update(){
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");
  const [id,setId]=useState("");

let history=useNavigate();

var index=Details.map(function(e){
    return e.id
}).indexOf(id);
console.log(index);
const handleSubmit =(e)=>{
  e.preventDefault();
 
 let a = Details[index];
 a.name=name;
 a.age=age;
 a.course=course;
 a.batch=batch;
 history("/Students");

}
useEffect(()=>{
setName(localStorage.getItem("name"))
setAge(localStorage.getItem("age"))
setCourse(localStorage.getItem("course"))
setBatch(localStorage.getItem("batch"))
setId(localStorage.getItem("Id"))

},[])






  return (
    <>
 
         <div>
         <div class='container'> 
    {/* <label class='name'>Name:</label> */}
    <input type="text" name="name" placeholder='Name' value={name} required onChange={(e)=>setName(e.target.value)} class="input"></input>
    {/* <label class="age">Age:</label> */}
    <input type="number" name="age" placeholder="Age" value={age} required onChange={(e)=>setName(e.target.value)} class="input"></input>
    <br/>
<br/>
    {/* <label class="course">Course:</label> */}
    <input type="text" name="course" placeholder="Course" value={course} required onChange={(e)=>setName(e.target.value)} class="input"></input>
    {/* <label class="batch">Batch:</label> */}
    <input type="text" name="batch" placeholder="Batch" required onChange={(e)=>setName(e.target.value)} value={batch} class="input"></input>
    </div>
<div>
{/* <button onClick={(e)=>handleSubmit} class="btn btn-danger button">Cancel</button>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
<button onClick={(e)=>handleSubmit} type="Submit" class="btn btn-success">Update </button> */}
{/* <button onClick={(e)=>handleSubmit(e)} type="submit">Update</button> */}
<button type="button" class="btn btn-danger">Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<button onClick={(e)=>handleSubmit(e)} type="button" class="btn btn-success">Update</button>
</div>
</div>
   
   </>
  )
  }

export default Update;