import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import SideBar from './components/SdieBar/SideBar.jsx'
import Content from './components/Content/Content.jsx'
import VideoCard from './components/Content/VideoCard/VideoCard.jsx'

import { useState } from 'react'

// for setting different routes
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {

  // for the side bar on and off
  const [sideActive, setsideActive] = useState(false);

  // function to swick side bar
  function sideClick() {
    if (sideActive) {
      setsideActive(false);
    }
    else {
      setsideActive(true);
    }
  }

  // for other routes
  const NotFound = () => (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );


  // {/* Side bar */ }
  //         <SideBar onSideClick={sideClick} classAdded={sideActive} />

  // <div className="content">


  //   {/* nav bar */}
  //   <NavBar onSideClick={sideClick} />


  //   {/* Content */}
  //   <Content isSideActive={sideActive} />
  //   {/* <VideoCard/> */}

  // </div>

  const Home = () => (

    < div className="content">
      {/* Side bar */}
      <SideBar onSideClick={sideClick} classAdded={sideActive} />

      {/* nav bar */}
      <NavBar onSideClick={sideClick} />


      {/* Content */}
      <Content isSideActive={sideActive} />
      {/* <VideoCard/> */}
    </div>
  );

  const Subs = () => (
    < div className="content">
      {/* Side bar */}
      <SideBar onSideClick={sideClick} classAdded={sideActive} />

      {/* nav bar */}
      <NavBar onSideClick={sideClick} />


      
    </div>
  )

  return (
    <>
      <Router>

        <div className="main-container d-flex p-0">

          <Routes>
            <Route path="/"
              element={
                <Home />
              }
            />
            <Route path="subscription/"
              element={
                <Subs />
              } />
            <Route path="*"
              element={
                <NotFound />}
            />
          </Routes>

        </div>
      </Router>

    </>
  )
}

export default App
/**
 
const NotFound = () => (
  <div>
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
 */