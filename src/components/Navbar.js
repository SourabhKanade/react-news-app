import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class Navbar extends Component {

    render() {
        return (
                 <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Ninja-News-App</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item"><Link className="nav-link" aria-current="page" to="Home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="About">About</Link></li> */}
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="General">General</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="Business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="Entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="Health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="Sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="Technology">Technology</Link></li>
              {/* <li className="nav-item"><Link className="nav-link" aria-current="page" to="Contact">Contact</Link></li> */}
            </ul>
            <form className="d-flex">
                <button disabled="true" className="btn  btn-style" type="signup">Sign up</button>
                <button disabled="true" className="btn  btn-style" type="login">Log in</button>
            </form>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </div>
        )
    }
}

export default Navbar
