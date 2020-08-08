import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "./form.css";

// Succes Alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
// finishSucces Alert

export default function Login() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="card-main" className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a (Test) success message!
        </Alert>
      </Snackbar>
      {/* 
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> 
      */}

      <Grid container direction="row" justify="center" alignItems="baseline">
        <CssBaseline />

        <Grid item xs={12} sm={12} md={10} lg={6} xl={4}>
          <div className="card">
            <Typography component="h1" variant="h5">
              Create Your Account
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
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Repeat Password"
                type="password"
                id="RepeatPassword"
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email addres"
                name="email"
                autoComplete="email"
              />
              <div className="card-button">
                <Button
                  onClick={handleClick}
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Register
                </Button>
              </div>
              <p>already have account ? </p>
              <Grid container>
                <Grid item xs={12} sm={8} md={12} xl={12}>
                  <Button variant="contained" color="secondary">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="../Login"
                    >
                      {" "}
                      Login{" "}
                    </Link>{" "}
                  </Button>
                </Grid>
              </Grid>
              <Box mt={5}></Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
