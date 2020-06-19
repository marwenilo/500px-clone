import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constant/actionsTypes";

const iniState = {
  token: localStorage.getItem("token"),
  user: null,
  isAth: null,
  isReg: false,
};

export default function (state = iniState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isReg: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAth: true,
      };
    case USER_LOADED:
        return{
            ...state,
            user:payload
        }
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAth: false,
        user: null,
      };
    default:
      return state;
  }
}
