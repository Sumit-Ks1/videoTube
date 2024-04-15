// import React from 'react'

function SideBarContent() {
    return (
        <div className="SideBar">
            SideBar
            {/* <!-- Sidebar --> */}
            <div className="
            col-md-3 
            col-lg-2 
            bg-light sidebar 
            fixed-top"
            >
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
function SideBar() {
    return (
        <>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                |||
            </button>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
        </>
    )
}

export default SideBar