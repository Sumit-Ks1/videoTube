// import React from 'react'
import './SideBar.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import PlaylistPlayRoundedIcon from '@mui/icons-material/PlaylistPlayRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import FeedbackRoundedIcon from '@mui/icons-material/FeedbackRounded';
import MenuIcon from '@mui/icons-material/Menu';


function SideBar(props) {

    // For comparission

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

    function removeClass() {
        props.onSideClick()
    }

    return (
        <div
            className={`position-fixed sidebar vh-100 ${props.classAdded ? 'active' : ''}`}
            id="side_nav"
>
            <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
                <h1 className="fs-4"><span className="bg-white text-dark rounded shadow px-2 me-2">YT</span> <span
                    className="text-white">Youthube</span></h1>
                <button className="btn d-md-none d-block close-btn px-1 py-0 text-white"
                    id='close-side-btn'
                    onClick={removeClass}>
                    <MenuIcon/>
                </button>
            </div>

            <ul className="list-unstyled px-2">
                <li className="active">
                    <a href="/" className="text-decoration-none px-3 py-3 my-1 d-block">
                        <HomeRoundedIcon />
                        Home</a>
                </li>
                <li className="">
                    <a href="/subscription/" className="text-decoration-none px-3 py-3 my-1 d-block d-flex justify-content-between">
                        <span>
                            <SubscriptionsRoundedIcon /> Subscription
                        </span>
                        <span className="bg-dark rounded-pill text-white py-0 px-2">
                            02
                        </span>
                    </a>
                </li>
                <li className="">
                    <a href="/history" className="text-decoration-none px-3 py-3 my-1 d-block">
                        <RestoreRoundedIcon /> History</a>
                </li>
                <li className="">
                    <a href="/playlist" className="text-decoration-none px-3 py-3 my-1 d-block">
                        <PlaylistPlayRoundedIcon />Playlist</a>
                </li>
            </ul>

            <hr className="h-color mx-2"></hr>
            <div className="sidebar-bottom">

                <ul className="list-unstyled px-2 ">
                    <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block">
                        <SettingsRoundedIcon /> Settings</a>
                    </li>
                    <li className=""><a href="#" className="text-decoration-none px-3 py-2 d-block">
                        <FeedbackRoundedIcon /> Feedback</a>
                    </li>

                </ul>
            </div>

        </div>
    )
}



export default SideBar