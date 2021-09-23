var express = require('express');
var app = express();
var cors = require('cors');
app.use(express.json())    // <==== parse request body as JSON;
app.use(cors())
 
app.get('/user', function (req, res) {
  let headers = req.headers;
  let user_info = req.body;email;
  let baseUrl = req.baseUrl;

  console.log("User_Info ::", user_info);
 
  res.send('Hello i am ravi !');
})

app.post('/login', function (req, res) {
  let user_info = req.body;
  console.log("User_info ::", user_info);
 // console.log("base URL ::", baseUrl);
  let email= user_info.email;
  let password=user_info.password;
  console.log("email :",email);
  console.log("password :",password);
  if(email=="gdubey@waviz.com" && password=="Waviz@123")
  {
    res.send({
      status:"OK", messeage:"success"
    });
  }
  else{
    res.send('fail');
  }
  // res.send('Hello I am ravi!');
})

app.post('/registraion', function (req, res) {
 
  let user = req.body;
  console.log("User ::", user);

      res.send({
      status:"OK", messeage:"success"
    });
   
  // res.send('Hello I am ravi!');
})


// Forgot Password
app.post('/forgot', function (req, res) {
    let body = req.body;
  console.log("body ::", body);
  let email= body.email;
   console.log("email :",email);
   if(email=="gdubey@waviz.com")
  {
    res.send({
      status:"OK", messeage:"success"
    });
  }
  else{
    res.send('fail');
  }
  // res.send('Hello I am ravi!');
})


// OTP Password
app.post('/otp', function (req, res) {
  let body = req.body;
console.log("body ::", body);
let otp= body.otp;
 console.log("Otp :",otp);
 if(otp==="111111")
{
  res.send({
    status:"OK", messeage:"success"
  });
}
else{
  res.send('fail');
}
// res.send('Hello I am ravi!');
})


// Reset Password
app.post('/reset', function (req, res) {
 
  let user = req.body;
  console.log("User ::", user);

      res.send({
      status:"OK", messeage:"success"
    }); 
})


const port = process.env.PORT || 3333; 
app.listen(port, function () {
  console.log('Listening on port 3333...')
})
