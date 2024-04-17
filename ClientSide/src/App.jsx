// import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import SideBar from './components/SdieBar/SideBar.jsx'
import Content from './components/Content/Content.jsx'
import VideoCard from './components/VideoCard/VideoCard.jsx'
import { useState } from 'react'


function App() {

  // for the side bar on and off
  const [classAdded, setclassAdded] = useState(false);

  // function to swick side bar
  function sideClick() {
    if(classAdded) {
      setclassAdded(false);
    }
    else{
      setclassAdded(true);
    }
  }

  
  return (
    <>
      <div className="main-container d-flex">
        {/* Side bar */}
        <SideBar onSideClick={sideClick} classAdded={classAdded}/>

        <div className="content">


          {/* nav bar */}
          <NavBar onSideClick={sideClick}/>


          {/* Content */}
          <Content />
          <VideoCard/>

          
        </div>
      </div>

    </>
  )
}

export default App
