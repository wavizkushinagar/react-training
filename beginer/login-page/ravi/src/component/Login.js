import React,{useState} from "react";
import {Link} from 'react-router-dom';

const Login = () => {
  const [inputData , setInputData] = useState({
    email:"",
    password:""
  });

  const onSubmit = (event)=>{
    event.preventDefault();
    
}

const inputEvent =(event) =>{

  let value = event.target.value;
  let name = event.target.name;

setInputData((preValue) => {

  if(name === "email"){
      return{
          email : value,
          password : preValue.password
      };
      }
      else if(name === "password"){
          return{
              email :preValue.email,
              password : value
          };
      }

});

}



  return (
    <div>

 <div className="container-fluid">
    <div className="row p-0 m-0">
        <div className="col-md-10 mx-auto">
            <div className="row Sing mt-5">
            
             <div className="col-md-7  ">

             <div className=" pt-5">
             <h2 className="text-center p-2 text-green">Sign In To Diprella</h2>
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
                  <h5>or use your email account</h5>
                </div>
                <div className="py-2 px-5">
                <form onSubmit={onSubmit}>
                  <div className="form-outline mb-3">
                    <label className="form-label" >
                      Email
                    </label>
                    <input
                      type="text"
                      value={inputData.email}
                      onChange={inputEvent}
                      name="email"
                      
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
                      value={inputData.password}
                      onChange={inputEvent}
                      name="password"
                     
                      className="form-control"
                      placeholder="Enter Password"
                   Required />
                  </div>
                  <div className=" mb-3 text-center">
                  <Link to="/forgot" >Forgot Password</Link>
                  </div>
                  <div className="mb-2 login_button">
                    <button className=" p-2 px-5 " type="submit" >
                      Sing In
                    </button>
                    <div className=" blok text-center ">
                <Link to="/sing"><button className="p-2 px-5 ">Sign Up</button></Link> 
                </div>
                    
                  </div>
                  </form>
                </div>
                </div>
                <div className="col-md-5 p-0 m-0">
                <div className="login_text py-5">
                <div className="py-2">
                <h2 className="friend text-center"> HELLO , FRIEND!</h2>
                </div>
                <div className="text-center text_personal">
                <p>Enter Your Personal details</p>
                  <p>And Start Journey With Us</p>
                </div>
                <div className="sing_up text-center py-4">
                <Link to="/sing"><button className="p-2 m-2 px-5 ">Sign Up</button></Link> 
                </div>
              </div>


                </div>
            </div>
        </div>
    </div>

    </div>
    </div>
  );
};
export default Login;
