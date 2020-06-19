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

export const register = ({ name, email, password }) => async (dispatch) => {
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post("/api/users/register", body);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error, "reg");
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/api/users/login", body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
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
