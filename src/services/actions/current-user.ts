// @ts-nocheck
import { AnyAction } from "redux";
import api from "../../utils/api";
import { deleteCookie, setCookie } from "../../utils/cookie";
import { getUserRequest } from "../../utils/functions";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const DELETE_USER = "DELETE_USER";

// interface ILoginUser {
//   email: string;
//   password: string;
// }

export const loginUser =
  ({ email, password }: any): AnyAction =>
  (dispatch: any) => {
    dispatch({ type: GET_USER_REQUEST });
    api
      .loginUser(email, password)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: {
              user: res.user,
            },
          });
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_USER_FAILED });
      });
  };

export const registerUser =
  ({ name, email, password }: any): AnyAction =>
  (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    api
      .createUser(name, email, password)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: {
              user: res.user,
            },
          });
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_USER_FAILED });
      });
  };

export const logoutUser = () => (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  api
    .logoutUser()
    .then((res) => {
      dispatch({ type: DELETE_USER });
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateUser = (data): AnyAction => (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  api
    .updateUser(data.name, data.email)
    .then((res) => {
      if (res && res.success) {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: {
            user: res.user,
          },
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_USER_FAILED });
    });
};

const updateToken = () => (dispatch) => {
  api
    .updateToken()
    .then((res) => {
      if (res && res.success) {
        setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
        setCookie("refreshToken", res.refreshToken);
      }
    })
    .then(() => {
      getUserRequest(dispatch, api, GET_USER_REQUEST, GET_USER_SUCCESS);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUser = () => (dispatch) => {
  getUserRequest(
    dispatch,
    api,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    updateToken
  );
};

export const forgotPassword = (email, func) => () => {
  api
    .forgotPassword(email)
    .then((res) => {
      if (res && res.success) {
        func();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const resetPassword = (password, token, func) => () => {
  api
    .resetPassword(password, token)
    .then((res) => {
      if (res && res.success) {
        func();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
