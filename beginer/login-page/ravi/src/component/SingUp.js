import React from 'react';
import {Link} from 'react-router-dom';
import { Formik } from 'formik';
import axios from 'axios'

const SingUp = () => { 

  
  var initialValues=({ email: '', password: '', name:'' })

var  validate=(values => {
    const errors = {};
if (!values.email) {
errors.email = 'please enter email';
} else if (
!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
) {
errors.email = 'Invalid email address';
}
if (!values.password) {
errors.password = ' Please enter password';
} else if (
!/^(?=.*[A-Za-z])[A-Za-z\d@$!%*#?&]{6,}$/i.test(values.password)
) {
errors.password = 'Invalid password address';
}

if (!values.name) {
  errors.name = ' Please enter name';
  } else if (
  !/^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/i.test(values.name)
  ) {
  errors.name = 'Invalid name address';
  }
return errors;
});



 const onSubmit=(values) => {
console.log(values)
  axios.post('http://localhost:2022/user', values).then(function (res) {
    
    console.log(res);
     
    //console.log(res.data.error === false && res.data.massage === 'New user has been created successfully.');
 })

    
  }

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
                <div className="col-md-7 ">
                <div className=" pt-3">
                  <h2 className="text-center p-1 pt-1 text-green">Create Account</h2>
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
                <div className="py-1 px-5 ">
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit
         
         /* and other goodies */
       }) => (
                <form onSubmit={handleSubmit} >
                  <div className="form-outline mb-2">
                    <label className="form-label" >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                       value={values.name}
                      className="form-control "
                      placeholder="Enter Name"
                    />
                    {errors.name && touched.name && errors.name}
                  </div>
                  <div className="form-outline mb-2">
                    <label className="form-label" >
                      Email
                    </label>
                    <input
                      type="email"
                     name="email"
                     onChange={handleChange}
                      onBlur={handleBlur}
                       value={values.email}
                       className="form-control"
                      placeholder="Enter Email"
                    />
                    {errors.email && touched.email && errors.email}
                  </div>
                  <div className="form-outline mb-2">
                    <label className="form-label" >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                     onChange={handleChange}
                     onBlur={handleBlur}
                      value={values.password}
                      className="form-control"
                      placeholder="Enter Password"
                   Required />
                   {errors.password && touched.password && errors.password}
                  </div>
                  
                  <div className="mb-1 login_button d-flex justify-content-around">

                    <button className=" p-2 px-4 " type="submit"  >
                      Sing Up
                    </button>
                    
                  </div>

                  </form>
                  )}
     </Formik>

              </div>


                </div>
            </div>
        </div>
    </div>

    </div>
</div>

)};

export default SingUp;