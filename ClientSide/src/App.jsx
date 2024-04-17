// import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import SideBar from './components/SdieBar/SideBar.jsx'
import Content from './components/Content/Content.jsx'
import VideoCard from './components/Content/VideoCard/VideoCard.jsx'
import { useState } from 'react'


function App() {

  // for the side bar on and off
  const [sideActive, setsideActive] = useState(false);

  // function to swick side bar
  function sideClick() {
    if(sideActive) {
      setsideActive(false);
    }
    else{
      setsideActive(true);
    }
  }

  
  return (
    <>
      <div className="main-container d-flex">
        {/* Side bar */}
        <SideBar onSideClick={sideClick} classAdded={sideActive}/>

        <div className="content">


          {/* nav bar */}
          <NavBar onSideClick={sideClick}/>


          {/* Content */}
          <Content isSideActive={sideActive}/>
          {/* <VideoCard/> */}

          
        </div>
      </div>

    </>
  )
}

export default App
