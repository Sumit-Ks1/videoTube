import './Auth.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useState } from 'react';
import axios from 'axios'

function SignUp() {

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(window.location.hash || '#pills-login');

  const navigate = useNavigate(true);

  // const { fullName, email, username, password } = req.body// req.body sees for the data coming from form or json
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("def")
  const [loginError, setLoginError] = useState("def");

  /*  For checkbox click handler
  event handler for checkbox
  function RegisterForm() { 
    // Define state for the checkbox
    const [isChecked, setIsChecked] = useState(false);

    // Event handler for checkbox changes
    const handleCheckboxChange = (e) => {
      setIsChecked(e.target.checked);
    };*/

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

  var changename = "";
  function changeHandler(event) {
    changename = event.target.name;
    if (changename == "fullname") {
      setFullName(event.target.value);
    }
    else if (changename == "username") {
      setUsername(event.target.value);
    }
    else if (changename == "email") {
      setEmail(event.target.value);
    }
    else if (changename == "password") {
      setPassword(event.target.value);
    }
  }


  function SignInHandler() {

    // const registerData = {fullName: fullName, email: email, username:username, password:password};
    const formData = new FormData();
    formData.append('fullName', fullName)
    formData.append('email', email);
    formData.append('password', password);
    formData.append('username', username);
    axios.post('api/v1/users/register', formData).then(Response => {
      console.log(Response.data)
      navigate('/moreDetails')
    })
      .catch(error => {
        console.log("this is chatched error")
        console.error(error)
        console.log("status code is ", error.response.status)
        const statusCode = error.response.status;
        if (statusCode == 400) {// Empty field
          setError("Cannot Be Empty");
        }
        else if (statusCode == 409) { // User already exist
          setError("User Already Exist")
        }
      })
  }

  function loginHandler() {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    console.log(formData);
    console.log(username, password)
    axios.post('api/v1/users/login', formData)
      .then(Response => {
        console.log(Response.data);
        navigate('/');
      })
      .catch(error => {
        console.log("catched error");
        console.log(error);
        console.log("error code ", error.response.status);
        var errorCode = error.response.status;
        if (errorCode == 400) {
          setLoginError("Username or Email is required")
        }
        else if (errorCode == 402) {
          setLoginError("User dose not exist")
        }
        else if (errorCode == 401) {
          setLoginError("Password incorrect")
        }
      });
  }

  function submitHandler(event) {
    event.preventDefault()
  }

  /*const isAuthenticated = false; // Get from backend

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/signup" />;
  }
*/

  return (
    <div className="main-back bg-dark d-flex justify-content-center align-items-center vh-100">
      <div className=" rounded-5 p-3 bg-black card mx-3 mx-md-0 col-md-6 col-lg-5 col-xl-4 col-sm-8">
        <div className="signinCard card-body text-white">

          {/* Pills navs */}
          <ul className=" nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className={` nav-link ${activeTab === '#pills-login' ? 'active' : ''}`}
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

          <div className="tab-content">



            {/* Login Tab */}
            <div className={`tab-pane fade ${activeTab === '#pills-login' ? 'show active' : ''}`} id="pills-login" role="tabpanel" aria-labelledby="tab-login">

              <form className='mt-5' onSubmit={submitHandler}>
                {/* <div className="text-center mb-3">

                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-secondary btn-floating mx-1 googleSignIn">
                    Sign in with Google
                  </button>
                </div> */}


                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="loginName">Email or username</label>
                  <input type="text" id="loginName" className="form-control" name='username'
                    onChange={changeHandler} value={username} />
                </div>

                {/* <!-- Password input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="loginPassword">Password</label>
                  <input type="password" id="loginPassword" className="form-control" name='password'
                    onChange={changeHandler} value={password} />
                </div>

                {/* <!-- 2 column grid layout --> */}
                <div className="row mb-4">
                  <div className="col-md-6 d-flex justify-content-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-3 mb-md-0">
                      <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                      <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                    </div>
                  </div>

                  <div className="col-md-6 d-flex justify-content-center">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                {/* <!-- Submit button --> */}
                <div className="d-flex justify-content-start">
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init
                    className="btn btn-primary btn-block mb-4"
                    onClick={loginHandler}
                  > Log In</button>

                  <p className={`py-2 mx-3 error-msg 
                  ${loginError == "def" ? "d-none" : ""}`} >
                    ! {loginError}
                  </p>

                </div>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                  <p>Not a member?
                    <a href="#pills-register">Register</a>
                  </p>
                </div>
              </form>
            </div>



            {/* Register Tab */}
            <div className={`tab-pane fade ${activeTab === '#pills-register' ? 'show active' : ''}`} id="pills-register" role="tabpanel" aria-labelledby="tab-register">

              <form className='mt-5' onSubmit={submitHandler}>

                {/* <!-- Name input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerName">Name</label>
                  <input type="text" id="registerName" className="form-control" name='fullname'
                    onChange={changeHandler} value={fullName} />
                </div>

                {/* <!-- Username input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerUsername">Username (To Be Unique) </label>
                  <input type="text" id="registerUsername" className="form-control" name='username'
                    onChange={changeHandler} value={username} />
                </div>

                {/* <!-- Email input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerEmail">Email</label>
                  <input type="email" id="registerEmail" className="form-control" name='email'
                    onChange={changeHandler} value={email} />
                </div>

                {/* <!-- Password input --> */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <label className="form-label" htmlFor="registerPassword">Password</label>
                  <input type="password" id="registerPassword" className="form-control" name='password'
                    onChange={changeHandler} value={password} />
                </div>

                {/* <!-- Repeat Password input --> */}
                {/* <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="registerRepeatPassword" className="form-control" />
                  <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                </div> */}

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
                <div className="d-flex justify-content-start">
                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-3"
                    onClick={SignInHandler}>Sign in</button>
                  <p className={`py-2 mx-3 error-msg ${error == "def" ? "d-none" : ""}`} > ! {error}</p>
                </div>

              </form>

            </div>
          </div>


        </div>
      </div>
    </div>

  )


}
export default SignUp