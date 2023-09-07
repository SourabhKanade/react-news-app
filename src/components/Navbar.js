import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">News Ninja</Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="politics">Politics</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" aria-current="page" to="technology">Technology</Link></li>
            </ul>
            {/* <form className="d-flex ">
              <button className="disabled = true btn btn-style" type="signup">Sign up</button>
              <button className="disabled = true btn btn-style" type="login">Log in</button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar