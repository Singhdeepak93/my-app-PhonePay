import React,{ useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [Hide,setHide]= useState(false);
    return (
        <>
        <section className="navbar-bg">
           <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <a className="navbar-brand" href="#">Phone Pay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"onClick={()=>{setHide(!Hide)}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${Hide ? "Hide" : ""}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
         
     </ul>
      <form class="d-flex">
      <button class="btn  btn-style" type="submit">SingUp</button>
        <button class="btn  btn-style btn-style-border" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
</section> 
        </>
        
    )
}

export default Navbar;
