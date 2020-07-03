import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RegWithEmail from "./RegWithEmail";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: "24px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  regByEmail: {
    margin: theme.spacing(3, 0, 2),
    display: "flex ",
    justifyContent: "space-around",
    alignItems: "center",
    height: "48px",
    minWidth: "216px",
    lineHeight: "56px",
    fontWeight: "bold",
    fontSize: "26px",
    backgroundColor: "rgb(8, 112, 209)",
    color: "white",
    padding: "0px 24px",
    borderRadius: "28px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#2986F7",
    borderImage: "initial",
    transition: "background-color 0.1s ease 0s",
    textDecoration: "none",
    marginBottom: "40px",
    "&:hover": {
      backgroundColor: "rgb(41, 134, 247)",
    },
  },
  loginContainer: {
    backgroundColor: "#F7F8FA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "84px",
    height: "100vh",
  },
  facebtn: {
    display: "flex ",
    justifyContent: "space-around",
    alignItems: "center",
    height: "48px",
    minWidth: "216px",
    lineHeight: "56px",
    fontWeight: "bold",
    fontSize: "26px",
    backgroundColor: "rgb(60, 90, 150)",
    color: "white",
    padding: "0px 24px",
    borderRadius: "28px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#29487D",
    borderImage: "initial",
    transition: "background-color 0.1s ease 0s",
    textDecoration: "none",
    marginBottom: "16px",
    "&:hover": {
      backgroundColor: "#29487D",
    },
  },
  googlebtnReg: {
    display: "flex ",
    justifyContent: "space-around",
    alignItems: "center",
    height: "48px",
    minWidth: "216px",
    lineHeight: "56px",
    fontWeight: "bold",
    fontSize: "26px",
    backgroundColor: "white",
    color: "#6D7378",
    padding: "0px 24px",
    borderRadius: "28px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#D7D8DB",
    borderImage: "initial",
    transition: "background-color 0.1s ease 0s",
    textDecoration: "none",
    marginBottom: "16px",
    "&:hover": {
      backgroundColor: "#F7F8FA",
    },
  },
  checkTerms: {
    display: "flex",
    alignItems: "center",
    justifycontent: "center",
    textAlign: "start",
  },
}));

function SignUp({ isAth }) {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const [regEmail, setRegEmail] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleReg = () => {
    setRegEmail(true);
  };

  if (isAth) {
    return <Redirect to="/" />;
  }
  if (regEmail) {
    return <RegWithEmail />;
  }
  return (
    <div className={classes.loginContainer}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Join 500px
          </Typography>
          <p>
            <span>
              Discover and share incredible photos, gain global exposure, and
              get paid for your work.
            </span>
          </p>

          <form className={classes.form} noValidate>
            <Button
              fullWidth
              variant="contained"
              className={classes.facebtn}
              startIcon={<i class="fab fa-facebook"></i>}
            >
              Log in with Facebook
            </Button>
            <Button
              fullWidth
              variant="contained"
              className={classes.googlebtnReg}
              startIcon={<i class="fab fa-google"></i>}
            >
              Log in with Google
            </Button>
            <Button
              fullWidth
              variant="contained"
              className={classes.regByEmail}
              onClick={handleReg}
              startIcon={<i class="far fa-envelope"></i>}
            >
              Continue with email
            </Button>
            <Grid container>
              <div className={classes.checkTerms}>
                <Checkbox
                  checked={checked}
                  color="primary"
                  onChange={handleChange}
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
                <p>
                  <span>
                    I agree to the Terms of Service and Privacy Policy.
                  </span>
                </p>
              </div>
              <Grid item>
                <p>
                  <span>Already have an account?</span>
                  <Link href="#" variant="body2">
                    {" Log in"}
                  </Link>
                </p>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isAth: state.authReducer.isAth,
  };
};

export default connect(mapStateToProps)(SignUp);
