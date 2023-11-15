import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
     
    const handleSearch = () => {
        
    }
    return (
        <>
       
   <nav className="navbar navbar-expand-lg bg-body-tertiary mt-2">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li> <a className="nav-link" href="/">Menu</a></li>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">About</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-secondary" onClick={()=>handleSearch()} type="submit">Search</button>
        </form>
        </div>
    </div>
</nav>

        </>
 )           
}