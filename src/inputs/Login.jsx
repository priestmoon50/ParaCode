import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import "./form.css";
import axios from "axios";

const LoginApi = (state, onAnswer) => {
  console.log(state);
  axios
    .post("localhost:3000/apiV1/account/login", state)
    .then((response) => {
      onAnswer(response.data, true, false);
    })
    .catch((error) => onAnswer(error.message, false, true));
};

export default function Login() {
  const [state, setState] = useState({ email: "", password: "" });

  return (
    <div className="card-main">
       <Grid container direction="row" justify="center" alignItems="baseline">
       <CssBaseline />
        
       <Grid
          item
          xs={12}
          sm={12}
          md={10}
          lg={6}
          xl={4}

        >
          <div className="card">
            <Avatar>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login to ParaCode
            </Typography>
            <form noValidate className="card-form">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth 
                value={state.email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                id="Username"
                label="Username"
                name="Username"
                autoComplete="Username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={state.password}
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <div className="card-button">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    LoginApi(state, (data, status, error) => {
                      console.log(data, status, error);
                      if(status){
                        localStorage.setItem("token" , data.token);
                        window.location.replace("/")
                      }else{

                      }
                    })
                  }
                >
                  Login
                </Button>
              </div>
              <div className="card-button">
                <Grid container>
                  <Grid item xs={7} sm={8} md={6} xl={8}>
                    <Button variant="contained" color="secondary">
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="../Register"
                      >
                        Forget Password ?
                      </Link>
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="secondary">
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="../Register"
                      >
                        Register
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
                <Box mt={5}></Box>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
