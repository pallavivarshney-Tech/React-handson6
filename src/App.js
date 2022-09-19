import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Students from './Components/Students';
import PageNotFound from './Components/PageNotFound';
import AddNewStudent from './Components/AddNewStudent';
import Update from './Components/Update';
// import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Home' element={<Home/>}/>
          <Route path='Students' element={<Students />}/>
          <Route path='Contact' element={<Contact />}/>
          <Route path='/*' element={<PageNotFound />}/>
          <Route path='AddNewStudent' element={<AddNewStudent/>}/>
          <Route path='Update' element={<Update/>}/>
        </Routes>
      </Router> 
    </div>
 );
    
}


export default App