// import React from 'react'

function SideBar() {
    return (
        <div className="SideBar">
            SideBar
            {/* <!-- Sidebar --> */}
            <div className="col-md-3 col-lg-2 bg-light sidebar fixed-top">
                {/* <!-- Your sidebar content goes here --> */}
                <nav className="nav flex-column">
                    <a className="nav-link" href="#link1">Link 1</a>
                    <a className="nav-link" href="#link2">Link 2</a>
                    <a className="nav-link" href="#link3">Link 3</a>
                    <a className="nav-link" href="#link1">Link 1</a>
                    <a className="nav-link" href="#link2">Link 2</a>
                    <a className="nav-link" href="#link3">Link 3</a>
                    <a className="nav-link" href="#link1">Link 1</a>
                    <a className="nav-link" href="#link2">Link 2</a>
                    <a className="nav-link" href="#link3">Link 3</a>
                    {/* <!-- Add more links as needed --> */}
                </nav>
            </div>

        </div>

    )
}

export default SideBar