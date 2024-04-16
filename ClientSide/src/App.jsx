// import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import SideBar from './components/SdieBar/SideBar.jsx'
import Content from './components/Content/Content.jsx'

function App() {
  return (
    <>

      <div className="main-container d-flex">
        {/* Side bar */}
        <SideBar />

        <div className="content">


          {/* nav bar */}
          <NavBar />


          {/* Content */}
          <Content />
        </div>
      </div>

    </>
  )
}

export default App
