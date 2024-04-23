import React from 'react'

function VideoCard(props) {

  return (
    <>
      <div className="col">
        <div className="text-light rounded-4 card h-100">
          <img
            src={'src/assets/thumbnails/' + props.fileName + '.jpg'}
            className="rounded-4 card-img-top videoCardImage" alt="text"
          />
          <div className="card-body">
            <p className="card-time">12:34</p>
            <h5 className="card-title">
                {props.fileName}
            </h5>
            <p className="description card-text">
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoCard