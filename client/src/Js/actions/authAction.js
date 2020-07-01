import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constant/actionsTypes";
import axios from "axios";
import setAuthToken from "../../hoc/setAuthToken"

export const loadUser=()=>async (dispatch)=>{
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get("/api/users/login");
        dispatch({
            type: USER_LOADED,
            payload:res.data
        })
    } catch (error) {
        console.log(error,"load user")
    }
}

export const register = ({ name, email, password }) => async (dispatch) => {
  
  const body = JSON.stringify({ name, email, password });
  try {
     await axios.post("/api/users/register", body);
    dispatch({
      type: REGISTER_SUCCESS
    });
  } catch (error) {
    console.log(error, "reg");
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(email)
  const body = JSON.stringify({ email, password });
 console.log(body,"d")
  try {
    const res = await axios.post("/api/users/login", body, config);
    console.log(res)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser())
  } catch (error) {
    console.log(error, "login");
  }
};

export const logout = (payload) => async (dispatch) => {
  try {
    const res = await axios.get("/api/users/logout");
    dispatch({
      type: LOGOUT,
      payload,
    });
  } catch (error) {
    console.log(error, "logout");
  }
};
