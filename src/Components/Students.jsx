import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import Details from './Details';
const Students = () => {

  const handleEdit=(id,name,age,course,batch)=>{
    localStorage.setItem('name',name)
    // console.log(name);
    localStorage.setItem('age',age)
    localStorage.setItem('course',course)
    localStorage.setItem('batch',batch)
    localStorage.setItem('Id',id)
  }
  return (
    <div>
    <div className='secpage'>
    <h1>Students Detail</h1>
    <button class="but1"><NavLink to='/AddNewStudent' style={{textDecoration: 'none'}}>Add New Student</NavLink></button>
    </div>
        <table class="table">
        <thead>
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Batch</th>
        <th>&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;Change</th>
       
        </tr>

        </thead>
        <tbody>
        {
          Details && Details.length>0
          ?
          Details.map((item)=>{
            return(
            <tr>
              <td>
                  {item.name}
              </td>
              <td>
                {item.age}
              </td>
              <td>
                {item.course}
              </td>
              <td>
                {item.batch}
              </td>
              <td>
                  
              <NavLink to='/Update'>
           
              <button onClick={()=>handleEdit(item.id,item.name,item.age,item.course,item.batch)} class="btn btn-link">Edit</button></NavLink>
               
                &nbsp;
             
              </td>
            </tr>
            )
          }):
          "Data Not Available"
        }

        </tbody>
        

    {/* <tr>
    <td>RAKESH</td>
    <td>24</td>
    <td>MERN</td>
    <td>ELEVATION</td>
   <button class="editBut"><NavLink activeClassName="active_class" to='/AddNewStudent'>Edit</NavLink></button>
   </tr>

   
    


    <tr>
    <td>AKSHIT</td>
    <td>23</td>
    <td>MERN</td>
    <td>ELEVATION</td>
    <button class="editBut"><NavLink activeClassName="active_class" to='/Update'>Edit</NavLink></button>
    </tr>


    <tr>
    <td>YAMINI</td>
    <td>22</td>
    <td>MERN</td>
    <td>ELEVATION</td>
    <button class="editBut"><NavLink activeClassName="active_class" to='/Update'>Edit</NavLink></button>
    </tr>


    <tr>
    <td>GAURAV</td>
    <td>25</td>
    <td>MERN</td>
    <td>ELEVATION</td>
    <button class="editBut"><NavLink activeClassName="active_class" to='/Update'>Edit</NavLink></button>
    </tr>


    <tr>
    <td>ABHAY</td>
    <td>25</td>
    <td>MERN</td>
    <td>ELEVATION</td>
    <button class="editBut"><NavLink activeClassName="active_class" to='/Update'>Edit</NavLink></button>
    </tr>


    
    <tr>
    <td>AKSHAY</td>
    <td>23</td>
    <td>MERN</td>
    <td>ELEVATION</td> */}
    {/* <button class="editBut"><NavLink activeClassName="active_class" to='/Update'>Edit</NavLink></button> */}
    {/* </tr> */}
    {/* <tr> */}
      
    {/* </tr> */}
 
</table>

    </div>
  )
  }


export default Students