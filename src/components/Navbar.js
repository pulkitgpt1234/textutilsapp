import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const removeActive=()=>{
    document.getElementById('home-btn').classList.remove('active');
    document.getElementById('about-btn').classList.remove('active');
  }
  function highlight(btnId){
      removeActive();
      document.getElementById(btnId).classList.add('active');
  }
  return (
      <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" onClick={()=>{highlight('home-btn')}} id="home-btn"aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={()=>{highlight('about-btn')}} id="about-btn" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* <div className="d-flex"> */}
              {/* onclick ko function chahiye hota hai... function call nahi... so we have to pass an arrow fucntion like this to call a function inside onc lick
              <button className="bg-primary rounded mx-2" onClick={()=>{props.toggleTheme('primary')}} style={{height:'20px',width:'20px'}}></button>
              <button className="bg-danger rounded mx-2" onClick={()=>{props.toggleTheme('danger')}} style={{height:'20px',width:'20px'}}></button>
              <button className="bg-success rounded mx-2" onClick={()=>{props.toggleTheme('success')}} style={{height:'20px',width:'20px'}}></button>
              <button className="bg-warning rounded mx-2" onClick={()=>{props.toggleTheme('warning')}} style={{height:'20px',width:'20px'}}></button>
              <button className="bg-light rounded mx-2" onClick={()=>{props.toggleTheme('light')}} style={{height:'20px',width:'20px'}}></button>
              <button className="bg-dark rounded mx-2" onClick={()=>{props.toggleTheme('dark')}} style={{height:'20px',width:'20px'}}></button>
            </div> */}
            <div className={`form-check form-switch text-${props.mode==='light'?"dark":"light"}`}>
              <input className="form-check-input" onClick={props.toggleTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes= {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "App Name Here",
    aboutText:"about text here"
}