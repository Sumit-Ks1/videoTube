import React from 'react'

function VideoCard() {

  // <div class="col">
  //   <div class="card h-100">
  //     <img src="..." class="card-img-top" alt="..."/>
  //     <div class="card-body">
  //       <h5 class="card-title">Card title</h5>
  //       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to .</p>
  //     </div>
  //   </div>
  // </div>
  // <div class="col">
  //   <div class="card h-100">
  //     <img src="..." class="card-img-top" alt="..."/>
  //     <div class="card-body">
  //       <h5 class="card-title">Card title</h5>
  //       <p class="card-text">This is a short card.</p>
  //     </div>
  //   </div>
  // </div>
  // <div class="col">
  //   <div class="card h-100">
  //     <img src="..." class="card-img-top" alt="..."/>
  //     <div class="card-body">
  //       <h5 class="card-title">Card title</h5>
  //       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
  //     </div>
  //   </div>
  // </div>
  // <div class="col">
  //   <div class="card h-100">
  //     <img src="..." class="card-img-top" alt="..."/>
  //     <div class="card-body">
  //       <h5 class="card-title">Card title</h5>
  //       <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional .</p>
  //     </div>
  //   </div>
  // </div>
  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to .</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoCard