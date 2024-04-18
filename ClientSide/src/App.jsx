import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import SideBar from './components/SdieBar/SideBar.jsx'
// import Content from './components/Content/Content.jsx'
// import VideoCard from './components/Content/VideoCard/VideoCard.jsx'
import Subs from './components/Content/Subs.jsx'

import { useState } from 'react'

// for setting different routes
// import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {

  // for the side bar on and off
  const [sideActive, setsideActive] = useState(false);

  // function to switch side bar
  function sideClick() {
    if (sideActive) {
      setsideActive(false);
    }
    else {
      setsideActive(true);
    }
  }

  const Layout = ({ children }) => {
    console.log("Inside Layout")
    return (
      <div className="app-container">
        {/* <SideBar /> */}
        <SideBar onSideClick={sideClick} classAdded={sideActive} />

        {/* <NavBar /> */}
        <NavBar onSideClick={sideClick} />

        <main>{children}</main>
      </div>
    );
  };

  // for other routes
  const NotFound = () => (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );

  // initial code for reference
  // {/* Side bar */ }
  // <SideBar onSideClick={sideClick} classAdded={sideActive} />

  // <div className="content">


  //   {/* nav bar */}
  // <NavBar onSideClick={sideClick} />


  //   {/* Content */}
  //   <Content isSideActive={sideActive} />

  const SignUp = () => (
    <>
      <h1>This is sing up  page    sflkjwepivjwoeirjowieuwoigj</h1>
    </>
  )

  const Content = ({ isSideActive }) => {
    return (
      <div>
        {console.log("Inside the content")}
        <p>Content is being rendered.</p>
        {/* Your content that should be displayed */}
        {isSideActive && <p>Sidebar is active</p>}
      </div>
    );
  };

  return (
    <>
      {/* <Router>
        <div className="main-container d-flex p-0">
          < div className="content">

            <SideBar onSideClick={sideClick} classAdded={sideActive} />
            <NavBar onSideClick={sideClick} />
            <Routes>

              <Route path="/"
                element={
                  <Content isSideActive={sideActive} />
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
        </div>

      </Router>  */}

      <Router>
        <Routes>
          {/* Routes that require sidebar and navbar */}
          <Route path="/" element={<Layout />}>
            
            <Route index element={
              <Content isSideActive={sideActive} />
            } />
            <Route  path="subscription" element={
              <Subs />
            } />

            {/* <Route path="settings" element={<Settings />} /> */}
          </Route>

          {/* Route without sidebar and navbar */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
/**
  // example for reference
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