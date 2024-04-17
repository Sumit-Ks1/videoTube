import React from 'react'
import HomeDetails from '../../Details/HomeDetails'
import VideoCard from './VideoCard/VideoCard'
import Details from '../../Details/HomeDetails'
import './Content.css'

function Content() {

    var detail = Details[0]
    console.log(detail)

    return (
        <>
            <div className="side-active row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 g-4">
                {Details.map( (detail) => {
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