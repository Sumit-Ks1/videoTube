// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';


function forComparission() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex justify-content-between d-md-none d-block">
                    <button className="btn px-1 py-0 open-btn me-2" id='open-side-btn'>|||</button>
                    <a className="navbar-brand fs-4" href="#"><span
                        className="bg-dark rounded px-2 py-0 text-white">CL</span></a>

                </div>
                <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fal fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Profile</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

function NavBar(props) {

    // passing on click listener to App.jsx
    function sideButtonClick() { 
        props.onSideClick()
    }

    return (
        // <div>
        //     <nav className="navbar bg-body-tertiary navBar">
        //         <div className="container-fluid">

        //             <a className="navbar-brand">Navbar</a>
        //             <form className="d-flex" role="search">
        //                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        //                 </input>
        //                 {/* this button was not working inside input elment */}
        //                 <button className="btn btn-outline-success" type="submit">Search</button>
        //             </form>
        //         </div>
        //     </nav>
        // </div>
        <nav className="navbar navbar-expand-md navbar-light bg-dark">
            <div className="container-fluid">
                <div className="d-flex justify-content-between d-md-none d-block">
                    <button 
                    className="btn px-1 py-0 open-btn me-2 text-white " 
                    id='close-side-btn'
                    onClick={sideButtonClick}>
                        <MenuIcon/>
                    </button>
                    {/* btn d-md-none d-block close-btn px-1 py-0 text-white */}
                </div>
                <a className="navbar-brand fs-4" href="#">
                    <span className="bg-dark rounded px-2 py-0 text-white">YT</span></a>
                {/* <a className="navbar-brand">Navbar</a> */}
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    </input>
                    {/* this button was not working inside input elment */}
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar