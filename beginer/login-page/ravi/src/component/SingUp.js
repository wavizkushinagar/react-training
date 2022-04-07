import React from 'react';
import {Link} from 'react-router-dom';

const SingUp = () => { 

return(

<div >
    <div className="container-fluid">
    <div className="row p-0 m-0">
        <div className="col-md-10 mx-auto">
            <div className="row Sing mt-5">
            
             <div className="col-md-5 p-0 m-0">
                <div className="sing_text py-5">
                <div className=" py-1">
                  <h2 className="friend text-center "> Welcome , Back!</h2>
                </div>
                <div className="text-center text_personal ">
                  <p>To Keep Connected With Us Please</p>
                  <p>Login With Your Personal Info </p>
                </div>
                <div className="sing_up text-center py-4">
                <Link to="/"><button className="p-2 m-2 px-5 ">Sing In</button></Link>
                </div>
              </div>
                </div>
                <div className="col-md-7">
                <div className=" pt-4">
                  <h2 className="text-center p-2 pt-3 text-green">Create Account</h2>
                </div>
                <div className="d-flex justify-content-between w-25 mx-auto">
                  <div className="p-1 m-1">
                    <h3>
                      <i className="bi bi-facebook "></i>
                    </h3>
                  </div>
                  <div className="p-1 m-1">
                    <h3>
                      <i className="bi bi-google"></i>
                    </h3>
                  </div>
                  <div className="p-1 m-1">
                    <h3>
                      <i className="bi bi-linkedin"></i>
                    </h3>
                  </div>
                </div>
                <div className="text-center mt-1 or">
                  <h5>or use your registration</h5>
                </div>
                <div className="py-2 px-5">
                <form>
                  <div className="form-outline mb-3">
                    <label className="form-label" >
                      Name
                    </label>
                    <input
                      type="text"
                      id="form3Example4"
                      className="form-control "
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label" >
                      Email
                    </label>
                    <input
                      type="text"
                      id="form3Example4"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label" >
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>
                  
                  <div className="mb-2 login_button">
                    <button className=" p-2 px-5 " type="submit" >
                      Sing Up
                    </button>
                  </div>
                  </form>
                </div>


                </div>
            </div>
        </div>
    </div>

    </div>
</div>

)};

export default SingUp;