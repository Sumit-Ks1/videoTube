import React from 'react'
import HomeDetails from '../../Details/HomeDetails'
import VideoCard from './VideoCard/VideoCard'
import Details from '../../Details/HomeDetails'
import './Content.css'
import {useState} from 'react'

function Content(props) {

    var detail = Details[0]
    console.log(detail)

    var iWindowWidth = window.screen.width;
    const [windowWidth, setwindowWidth] = useState(iWindowWidth)

    // Function to handle the resize event
    function handleResize() {
        setwindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize);

    return (
        <>
        {/* if side active add class side-active */}
            {/* <div className="side-active row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 g-4"> */}
                <div className={`row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 g-4
                ${(props.isSideActive) ? 'side-active' : ''}
                ${windowWidth>768 ? 'side-active' : '' }`} 
                >
                {Details.map( (detail) => {
                    return (
                        <VideoCard
                            key={detail.id}
                            fileName={detail.fileName}
                            desc={detail.desc}
                        />
                    )
                })}
                {Details.map((detail) => {
                    return (
                        <VideoCard
                            key={detail.id}
                            fileName={detail.fileName}
                            desc={detail.desc}
                        />
                    )
                })}
            </div>
        </>
    )
}


export default Content