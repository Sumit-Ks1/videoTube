import './Auth.css'
import { useState, useEffect } from 'react'





function SignUp() {

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(window.location.hash || '#pills-login');
  
  // event handler for checkbox
  // function RegisterForm() { 
  //   // Define state for the checkbox
  //   const [isChecked, setIsChecked] = useState(false);

  //   // Event handler for checkbox changes
  //   const handleCheckboxChange = (e) => {
  //     setIsChecked(e.target.checked);
  //   };

  // Event handler for tab click
  const handleTabClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    setActiveTab(targetId);
    // Update the URL hash
    window.location.hash = targetId;
  };

  // Update active tab based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(window.location.hash || '#pills-login');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);



  return (
    <div className="bg-img d-flex justify-content-center align-items-center vh-100">
      <div className="rounded-5 p-3 bg-dark card mx-3 mx-md-0 col-md-6 col-lg-5 col-xl-4 col-sm-8">
        <div className="card-body text-white">


          {/* Pills navs */}
          <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link ${activeTab === '#pills-login' ? 'active' : ''}`}
                id="tab-login"
                href="#pills-login"
                role="tab"
                aria-controls="pills-login"
                aria-selected={activeTab === '#pills-login'}
                onClick={handleTabClick}
              >
                Login
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link ${activeTab === '#pills-register' ? 'active' : ''}`}
                id="tab-register"
                href="#pills-register"
                role="tab"
                aria-controls="pills-register"
                aria-selected={activeTab === '#pills-register'}
                onClick={handleTabClick}
              >
                Register
              </a>
            </li>
          </ul>

          {/* Pills content */}
          <div className="tab-content">

            {/* Login Tab */}
            <div className={`tab-pane fade ${activeTab === '#pills-login' ? 'show active' : ''}`} id="pills-login" role="tabpanel" aria-labelledby="tab-login">
              {/* Login form content */}
              {/* <form>
                <h3>Login</h3>
                <p>Implement your login form here.</p>
              </form> */}
              <form>
                <div className="text-center mb-3">
                  <p>Sign in with:</p>

                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-secondary btn-floating mx-1">
                    Google
                  </button>
                </div>

                <p className="text-center">or:</p>

                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="loginName" className="form-control" />
                  <label className="form-label" htmlFor="loginName">Email or username</label>
                </div>

                {/* <!-- Password input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="loginPassword" className="form-control" />
                  <label className="form-label" htmlFor="loginPassword">Password</label>
                </div>

                {/* <!-- 2 column grid layout --> */}
                <div className="row mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-3 mb-md-0">
                      <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                      <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                    </div>
                  </div>

                  <div className="col-md-6 d-flex justify-content-center">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                  <p>Not a member? <a href="#!">Register</a></p>
                </div>
              </form>
            </div>



            {/* Register Tab */}
            <div className={`tab-pane fade ${activeTab === '#pills-register' ? 'show active' : ''}`} id="pills-register" role="tabpanel" aria-labelledby="tab-register">
              {/* Register form content */}
              
              <form>
                <div className="text-center mb-3">
                  <p>Sign up with:</p>
                  
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-secondary btn-floating mx-1">
                    Google
                  </button>
                </div>

                <p className="text-center">or:</p>

                {/* <!-- Name input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="registerName" className="form-control" />
                  <label className="form-label" htmlFor="registerName">Name</label>
                </div>

                {/* <!-- Username input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="text" id="registerUsername" className="form-control" />
                  <label className="form-label" htmlFor="registerUsername">Username</label>
                </div>

                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="registerEmail" className="form-control" />
                  <label className="form-label" htmlFor="registerEmail">Email</label>
                </div>

                {/* <!-- Password input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="registerPassword" className="form-control" />
                  <label className="form-label" htmlFor="registerPassword">Password</label>
                </div>

                {/* <!-- Repeat Password input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="registerRepeatPassword" className="form-control" />
                  <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                </div>

                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                  <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" 
                    // checked={isChecked}
                    // onChange={handleCheckboxChange} // Provide onChange handler
                    aria-describedby="registerCheckHelpText" />
                  <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3">Sign in</button>
              </form>

            </div>
          </div>


        </div>
      </div>
    </div>

  )


}
export default SignUp