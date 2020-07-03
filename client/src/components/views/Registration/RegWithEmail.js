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
import { register } from "../../../Js/actions/authAction";
import { Redirect } from "react-router-dom";

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
  submit: {
    margin: theme.spacing(3, 0, 2),
    display: "inline-flex",
    justifyContent: "center",
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
}));

function RegWithEmail({ register }) {
  const classes = useStyles();
  const [registerData, setRegisterData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isReg, setIsReg] = useState(false);
  const { name, lastName, email, password } = registerData;
  const onChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    register({ name, lastName, email, password });
    handleIsReg();
  };
  const handleIsReg = () => {
    setIsReg(true);
  };
  if (isReg) {
    return <Redirect to="/login" />;
  }

  return (
    <div className={classes.loginContainer}>
      <Container component="main" maxWidth="xs" onSubmit={(e) => onSubmit(e)}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up with Facebook or Google
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="User name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="User lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => onChange(e)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address or Username"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              autoComplete="email"
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
              value={password}
              onChange={(e) => onChange(e)}
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>

            <Grid container>
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

export default connect(mapStateToProps, { register })(RegWithEmail);
