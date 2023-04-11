import React from "react"
import {Link} from "react-router-dom";
export default function Navbar(props){
  function handle_click(){
    props.setStatus(true)
  }
  return(
   <div className="outer">
  <nav className="navbar navbar-expand-lg navbar-light bg-light color">
  <Link className="navbar-brand style" to="#">Aloha</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
       <li className="nav-item active">
        <Link className="nav-link" to="/surfing">Surfing <span className="sr-only">(current)</span></Link>
      </li> <li className="nav-item active">
        <Link className="nav-link" to="/festival">Hula <span className="sr-only">(current)</span></Link>
      </li> <li className="nav-item active">
        <Link className="nav-link" to="/volcano">Volcano<span className="sr-only">(current)</span></Link>
      </li>
      </ul>
     <div className="form-inline">
    <Link  onClick={handle_click} className="btn-sm my-3 my-sm-0 btn1 bg-info text-light" to="/book">Book a Tour</Link>
  </div>
  </div>
  </nav>
</div>
   )
}