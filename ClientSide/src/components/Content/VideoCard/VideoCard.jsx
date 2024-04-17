import React from 'react'

function VideoCard(props) {

  // <div className="col">
  //   <div className="card h-100">
  //     <img src="..." className="card-img-top" alt="..."/>
  //     <div className="card-body">
  //       <h5 className="card-title">Card title</h5>
  //       <p className="card-text">This is a longer card with supporting text below as a natural lead-in to .</p>
  //     </div>
  //   </div>
  // </div>
  // <div className="col">
  //   <div className="card h-100">
  //     <img src="..." className="card-img-top" alt="..."/>
  //     <div className="card-body">
  //       <h5 className="card-title">Card title</h5>
  //       <p className="card-text">This is a short card.</p>
  //     </div>
  //   </div>
  // </div>
  // <div className="col">
  //   <div className="card h-100">
  //     <img src="..." className="card-img-top" alt="..."/>
  //     <div className="card-body">
  //       <h5 className="card-title">Card title</h5>
  //       <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
  //     </div>
  //   </div>
  // </div>
  // <div className="col">
  //   <div className="card h-100">
  //     <img src="..." className="card-img-top" alt="..."/>
  //     <div className="card-body">
  //       <h5 className="card-title">Card title</h5>
  //       <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional .</p>
  //     </div>
  //   </div>
  // </div>



  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img
            src={'src/assets/thumbnails/' + props.fileName + '.jpg'}
            className="card-img-top" alt="text"
          />
          <div className="card-body">
            <h5 className="card-title">
              {props.fileName}
            </h5>
            <p className="card-text">
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoCard