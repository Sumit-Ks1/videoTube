/* eslint-disable react/prop-types */

import './App.css'

import NavBar from './components/NavBar/NavBar.jsx'
import SideBar from './components/SdieBar/SideBar.jsx'
import Content from './components/Content/Content.jsx'
import Subs from './components/Content/Subs.jsx'
import SignUp from './components/Auth/SignUp.jsx'

import { useState } from 'react'
// for setting different routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



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
      <h1>Error: 404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );

  // the original code
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


  const Layout = ({ children }) => {
    return (
      <div className="app-container">

        <SideBar onSideClick={sideClick} classAdded={sideActive} />

        <NavBar onSideClick={sideClick} />

        {/* for children component */}
        <Outlet />

      </div>
    );
  };


  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* Routes that require sidebar and navbar */}
          <Route path="/" element={<Layout />}>
            <Route index element={ // home
              <Content isSideActive={sideActive} />
            } />
            <Route path="subscription" element={
              <Subs />
            }/>
            <Route path="history" element={
              <Subs />
            }/>
          </Route>

          {/* Routes without sidebar and navbar */}
          <Route path="/signup" element={<SignUp />} />
          <Route path='/login' element={<SignUp />} /> {/* replace */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App