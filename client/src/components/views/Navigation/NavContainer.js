import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { navData } from "./navData";
import DrpDown from "./components/DrpDown";
import "./NavBar.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    backgroundColor: "rgb(247, 248, 250)",
    width: "203px",
    height: "40px",
    textIndent: "48px",
    borderWidth: "initial",
    borderStyle: "none",
    borderColor: "initial",
    borderImage: "initia",
    borderRadius: "25px",
    padding: "0px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
    },
  },
}));

function SearchAppBar({ isAth }) {
  const classes = useStyles();

  return (
    <div className={classNames("myNavContainer", classes.root)}>
      <AppBar position="static">
        <Toolbar className="nav-container">
          <div className="nav-left">
            <svg
              className="logo"
              id="logo_svg"
              data-name="Logo SVG"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 20"
            >
              <title>logo</title>
              <path
                d="M24.83,0a10,10,0,1,0,10,10h0A10.09,10.09,0,0,0,24.83,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.9,7.9,0,0,1,24.83,17.9ZM46.32,0a10,10,0,1,0,10,10h0A10,10,0,0,0,46.32,0Zm0,17.9a7.85,7.85,0,1,1,7.8-7.9h0A7.77,7.77,0,0,1,46.32,17.9ZM7.63,6a6.74,6.74,0,0,0-5.3,1.4V2.1h9c0.3,0,.5-0.1.5-1s-0.4-.9-0.6-0.9H1.33a0.9,0.9,0,0,0-.9.9V9.9c0,0.5.3,0.6,0.8,0.7a0.76,0.76,0,0,0,.9-0.2h0a5.69,5.69,0,0,1,5-2.4,5.2,5.2,0,0,1,4.5,4.4A5.06,5.06,0,0,1,7.23,18H6.63a5.1,5.1,0,0,1-4.7-3.3c-0.1-.3-0.3-0.5-1.1-0.2s-0.9.5-.8,0.8a7.09,7.09,0,0,0,9,4.2,7.09,7.09,0,0,0,4.2-9A7,7,0,0,0,7.63,6ZM63.12,0.1a5.42,5.42,0,0,0-4.8,5.4v8.9c0,0.5.4,0.6,1,.6s1-.1,1-0.6V5.5a3.36,3.36,0,0,1,2.9-3.4,3.29,3.29,0,0,1,2.5.8,3.19,3.19,0,0,1,1.1,2.4,4,4,0,0,1-.7,1.9,3.15,3.15,0,0,1-2.8,1.3h0c-0.4,0-.7,0-0.8.9,0,0.6,0,.9.5,1a4.92,4.92,0,0,0,2.9-.6,5.37,5.37,0,0,0,2.9-4.2A5.18,5.18,0,0,0,64,0,2.77,2.77,0,0,1,63.12.1Zm13.1,5.2,3.6-3.6c0.1-.1.4-0.4-0.2-1.1a1,1,0,0,0-.7-0.4h0a0.52,0.52,0,0,0-.4.2L74.92,4l-3.6-3.7c-0.3-.3-0.6-0.2-1.1.2s-0.5.8-.2,1.1l3.6,3.6L70,8.9h0a0.76,0.76,0,0,0-.2.4,0.84,0.84,0,0,0,.4.7,1.61,1.61,0,0,0,.7.4h0a1.06,1.06,0,0,0,.5-0.2L75,6.6l3.6,3.6a0.52,0.52,0,0,0,.4.2h0a1,1,0,0,0,.7-0.4c0.3-.4.4-0.8,0.1-1Z"
                transform="translate(0)"
              ></path>
            </svg>

            {navData &&
              navData.map((it, key) => <DrpDown key={key} item={it} />)}
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          
            {isAth ? (
              <div className="auth-parte">
                {/* <img src="#" alt="profile img" /> */}
                <i class="fas fa-inbox fa-2x"></i>
                <i class="far fa-bell fa-2x"></i>
                <button to="/register" className="register-style">
                  <span>Upload</span>
                </button>
              </div>
            ) : (
              <div className="auth-parte">
                <Link to="/login" className="login-style">
                  <span>Log in</span>
                </Link>
                <Link to="/register" className="register-style">
                  <span>Sign up</span>
                </Link>
              </div>
            )}
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAth: state.authReducer.isAth,
  };
};

export default connect(mapStateToProps)(SearchAppBar);
