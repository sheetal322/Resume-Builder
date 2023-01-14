import React from "react";

export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{fontWeight:'bold'}}>Resume Builder</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-danger mx-2" type="submit">SignIn</button>
        <button className="btn btn-outline-success" type="submit">LogIn</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}