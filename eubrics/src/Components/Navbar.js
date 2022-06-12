import React from "react";
import { Link } from"react-router-dom"


const Navbar = () => {
    return(
        <div className="header">
            <nav className="Nav-bar">
                <h1 className="Nav-bar-heading">Assignment</h1>
                <div className="btn">
                    <button className="btn-login">
                        <Link to="/Login">Login</Link>    
                    </button>
                    <button className="btn-register">
                            <Link to="/Register" >Register</Link>
                    </button>
                </div>
            </nav>        
        </div>
    )
}


export default Navbar