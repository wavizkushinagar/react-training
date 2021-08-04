import React, { useState } from "react";

const App = () => {
    const [fullname, setfullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;
        const {value,name} =event.target;

        setfullName((preValue) => {
            // console.log(prevalue);
            if (name === "fname") {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email:preValue.email,
                    phone:preValue.phone
                };
            } else if (name === "lname") {
                return { 
                  fname: preValue.fname,
                  lname: value,
                  email:preValue.email,
                  phone:preValue.phone };
                }
            else if (name === "email") {
              return { 
                  fname: preValue.fname,
                  lname: preValue.lname,
                  email:value,
                  phone:preValue.phone 
                };
          }
          else if (name === "phone") {
            return { 
                fname: preValue.fname,
                lname: preValue.lname,
                email:preValue.email,
                phone:value
                };
        }
        });
        
    };

    const onsubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted");
    };

    return (
        <>
            <div>
                <form onSubmit={onsubmit}>
                    <h1>
                        Hello {fullname.fname}
                        {fullname.lname}
                    </h1>
                    <p>{fullname.email}</p>
                    <p>{fullname.phone}</p>
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="fname"
                        onChange={inputEvent}
                         value={fullname.fname}
                    />

                    <br />
                    <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={fullname.lname} />
                    <br />
                    <input type="email" placeholder="Enter Your Email" name="email" onChange={inputEvent} value={fullname.email} />
                    <br />
                    <input type="number" placeholder="Enter Your Mobile" name="phone" onChange={inputEvent} value={fullname.phone} />
                    <br />
                    <button type="submit">Register Now ✍️</button>
                </form>
            </div>
        </>
    );
};
export default App;
