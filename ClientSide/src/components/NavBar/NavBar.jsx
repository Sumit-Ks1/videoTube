// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import SideBar from '../SdieBar/SideBar';

function NavBar() {
    return (
        <div>
            <nav className="navbar bg-body-tertiary navBar">
                <div className="container-fluid">
                <SideBar />
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        </input>
                        {/* this button was not working inside input elment */}
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar