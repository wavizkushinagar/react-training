
import {Link} from 'react-router-dom';
import { Formik } from 'formik';
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
 var initialValues=({ email: '', password: '' })

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
!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password)
) {
errors.password = 'Invalid password address';
}
return errors;
});



 const onSubmit=(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return (
    <div>

 <div className="container-fluid">
    <div className="row p-0 m-0">
        <div className="col-md-10 mx-auto">
            <div className="row Sing mt-5">
            
             <div className="col-md-7  ">

             <div className=" pt-3">
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
                <div className="py-1 px-5">
                <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
                <form onSubmit={handleSubmit} >
                  <div className="form-outline mb-1">
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
                  <div className="form-outline mb-1">
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
                  <div className="mb-2">
              <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    name="grecaptcha"
                      required
                    />
              </div>
                  <div className=" mb-1 text-center">
                  <Link to="/forgot" >Forgot Password</Link>
                  </div>
                  
                  <div className="mb-1 login_button">
                    <button className=" p-2 px-5 " type="submit" disabled={isSubmitting} >
                      Sing In
                    </button>
                    <div className=" blok text-center ">
                <Link to="/sing"><button className="p-2 px-5 ">Sign Up</button></Link> 
                </div>
                    
                  </div>
                  </form>
                  )}
     </Formik>

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
