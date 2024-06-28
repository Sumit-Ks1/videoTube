// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';


function NavBar(props) {

    const navigate = useNavigate(true)
    const isAuthenticated = false;

    // passing on click listener to App.jsx
    function sideButtonClick() {
        props.onSideClick()
    }

    function profileClickHandler() {
        if(!isAuthenticated) {
            navigate("/signup#pills-register")
        }
        else {
            navigate("/profile")
        }
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-dark py-2">
            <div className="container-fluid">
                <div className="d-flex justify-content-between d-md-none d-block">
                    <button
                        className="btn px- py-0 open-btn me-2 text-white "
                        id='close-side-btn'
                        onClick={sideButtonClick}>
                        <MenuIcon />
                    </button>
                    {/* btn d-md-none d-block close-btn px-1 py-0 text-white */}
                </div>

                <form className="d-flex" role="search">
                    <input className="rounded-4 form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    </input>
                    {/* this button was not working inside input elment */}
                    <button className="btn rounded-5 btn-outline-success" type="submit">
                        <SearchIcon />
                    </button>
                </form>

                <div className="profile text-white" onClick={profileClickHandler}>
                    <span>User name</span>
                    <img src='src/assets/avatars/avatar3.svg' alt="" />
                </div>


            </div>
        </nav>
    )
}

export default NavBar