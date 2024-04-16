// import React from 'react'
import './SideBar.css'

function SideBar() {

    // $(".sidebar ul li").on('click', function () {
    //     $(".sidebar ul li.active").removeClass('active');
    //     $(this).addClass('active');
    // });

    // $('.open-btn').on('click', function () {
    //     $('.sidebar').addClass('active');

    // });


    // $('.close-btn').on('click', function () {
    //     $('.sidebar').removeClass('active');

    // })


    return (
        <div className="sidebar" id="side_nav">
            <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
                <h1 className="fs-4"><span className="bg-white text-dark rounded shadow px-2 me-2">CL</span> <span
                    className="text-white">Youtube</span></h1>
                <button className="btn d-md-none d-block close-btn px-1 py-0 text-white"><i
                    className="fal fa-stream"></i>|||</button>
            </div>

            <ul className="list-unstyled px-2">
                <li className="active"><a href="#" className="text-decoration-none px-3 py-3 my-1 d-block"><i
                    className="fal fa-home"></i>
                    Home</a></li>
                <li className="">
                    <a href="#" className="text-decoration-none px-3 py-3 my-1 d-block d-flex justify-content-between">
                        <span><i className="fal fa-comment"></i> Subscription</span>
                        <span className="bg-dark rounded-pill text-white py-0 px-2">02</span>
                    </a>
                </li>
                <li className="">
                    <a href="#" className="text-decoration-none px-3 py-3 my-1 d-block"><i className="fal fa-list"></i>
                        History</a>
                </li>
                <li className="">
                    <a href="#" className="text-decoration-none px-3 py-3 my-1 d-block"><i
                        className="fal fa-envelope-open-text"></i> Playlist</a>
                </li>
                {/* <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fal fa-users"></i>
                    Customers</a></li> */}
            </ul>

            <hr className="h-color mx-2"></hr>
            <div className="sidebar-bottom">

                <ul className="list-unstyled px-2 ">
                    <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fal fa-bars"></i>
                        Settings</a>
                    </li>
                    <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block"><i className="fal fa-bell"></i>
                        Feedback</a>
                    </li>

                </ul>
            </div>

        </div>
    )
}



export default SideBar