import "./App.css";
import { Switch, Route } from "react-router-dom";
import Signup from "./Component/Signup";
import Signin from "./Component/Signin";
import { Box, Paper } from "@mui/material";

function App() {
  return (
    <div>
      <Switch>
        <Box className="main_box">
          <div className="triangle"></div>
          <div className="circle"></div>
          <Paper elevation={3} className="paperStyle">
            <Route exact path="/">
              <Signin />
            </Route>
            <Route exact path="/signup">
              <Signup />{" "}
            </Route>
          </Paper>
        </Box>
      </Switch>
    </div>
  );
}

export default App;
