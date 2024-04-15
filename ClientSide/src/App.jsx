// import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import SideBar from './components/SdieBar/SideBar.jsx'

function App() {
  // const [count, setCount] = useState(0)

  function Designed() {
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 col-lg-10 offset-md-3 offset-lg-2">
            <div className="content">

              <NavBar />

              {/* <!-- Your main content goes here --> */}
              <h1>Main Content</h1>
              <p>This is the main content area of your page.</p>
              {/* <!-- Add more content as needed --> */}
            </div>
          </div>
          {/* Side bar */}
            <SideBar/>
          {/* <!-- Main content --> */}
        </div>
      </div>
  }
  return (
    <>
      {/* <h1>Hello world</h1> */}
      {/* <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <NavBar />
        </div>
      </div> */}

      <NavBar />
    
      {/* {Designed()} */}


    </>
  )
}

export default App
