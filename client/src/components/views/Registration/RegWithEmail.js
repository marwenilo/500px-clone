import React,{useState} from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {connect} from "react-redux"
import {login} from "../../../Js/actions/authAction"
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
    marginBottom:"40px",
    "&:hover": {
      backgroundColor: 'rgb(41, 134, 247)'
    }
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
    marginBottom:"16px",
    "&:hover": {
      backgroundColor: '#29487D'
    }
  },
  googlebtn: {
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
    marginBottom:"40px",
    "&:hover": {
      backgroundColor: '#F7F8FA'
    }
  },
}));

 function RegWithEmail({isAth,login}) {
  const classes = useStyles();
  const [loginData, setLoginData] = useState({
    firstName:"",
      lastName:"",
    email:"",
    password:""
  })
  const {firstName, lastName,  email, password } = loginData;
  const onChange =(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value})
  }
  const onSubmit = async(e)=>{
    e.preventDefault();
    login({firstName,lastName,email,password})
    console.log(isAth)
  }



if (isAth){
  return <Redirect to="/"/>
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
              id="firstName"
              label="User firstName"
              name="firstName"
              value={firstName}
              onChange={(e)=>onChange(e)}
            
              autoFocus
            />
               <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="User lastName"
              name="email"
              value={lastName}
              onChange={(e)=>onChange(e)}
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
              onChange={(e)=>onChange(e)}
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
              onChange={(e)=>onChange(e)}
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
              <p><span>Don't have an account?</span>
                <Link href="#" variant="body2">
                  {" Sign Up"}
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
    isAth: state.authReducer.isAth
  }
}

export default connect(mapStateToProps,{login})(RegWithEmail)