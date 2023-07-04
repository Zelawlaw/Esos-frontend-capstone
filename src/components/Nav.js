import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <i className="navbar-brand bi bi-justify-left fs-4"></i>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#/collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">

                <li className="nav-item">
                    <a className="nav-link active" href="#/" aria-current="page">New Case <span className="visually-hidden">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#/" aria-current="page">Delete case <span className="visually-hidden">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#/" aria-current="page">Update case <span className="visually-hidden">(current)</span></a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#/">Link</a>
                </li> */}

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#/" id="dropdownId" 
                      data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Roles
                      </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <a className="dropdown-item" href="#/">Admin</a>
                        <a className="dropdown-item" href="#/">Reporter</a>
                        <a className="dropdown-item" href="#/">Reportee</a>
                        <a className="dropdown-item" href="#/">Manager</a>
                    </div>
                </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>

  )
}

export default Nav