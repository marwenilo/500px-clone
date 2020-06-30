import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


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

 function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.loginContainer}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Log in to 500px
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address or Username"
              name="email"
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
              className={classes.googlebtn}
              startIcon={<i class="fab fa-google"></i>}
            >
            
              Log in with Google
            </Button>
            <Grid container>
              <Grid item xs>
              <p>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
                </p>
              </Grid>
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

export default SignIn