import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import "./form.css";
export default function Login() {
  return (
    <div className="card-main">
      <Grid container component="main">
        <CssBaseline />
        <Grid item xs={false} sm={2} md={4} />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          xl={4}
          component={Paper}
          elevation={6}
          square
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
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
              </div>
              <div  className="card-button">
              <Grid container>
                <Grid item xs={7} sm={8} md={6} xl={8}>
                  <Button type="submit" variant="contained" color="secondary">
                    <Link 
                      style={{ textDecoration: "none", color: "white" }}
                      to="../Register"
                    >
                      Forget Password ?
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="secondary">
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

// import React from "react";
// import { useForm } from "react-hook-form";

// export default function Login() {
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input type="text" placeholder="username" name="email" ref={register} />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           name="password"
//           ref={register({ required: true, minLength: 8 })}
//         />
//         <br />
//         <input type="submit" />

//         {errors.password && <p>Password must be at least 8 Char.</p>}
//       </form>
//     </div>
//   );
// }
