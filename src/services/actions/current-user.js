import userApi from "../../utils/userApi";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { getUserRequest } from "../../utils/functions";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

// export const POST_USER_REQUEST = 'POST_USER_REQUEST';
// export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
// export const POST_USER_FAILED = 'POST_USER_FAILED';

// export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
// export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
// export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const DELETE_USER = "DELETE_USER";

export const loginUser =
  ({ email, password }, navigate) =>
  (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    userApi
      .loginUser(email, password)
      .then((res) => {
        console.log(email, password);
        if (res && res.success) {
          dispatch({
            type: GET_USER_SUCCESS,
            payload: {
              user: res.user,
            },
          });
          setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
          setCookie("refreshToken", res.refreshToken);
          navigate("/profile", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: GET_USER_FAILED });
      });
  };

export const registerUser =
  ({ name, email, password }) =>
  (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    console.log(name, email, password);
    userApi
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
  userApi
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
// getCookie("refreshToken")

export const updateUser = (data, accessToken) => (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  userApi
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
  userApi
    .updateToken()
    .then((res) => {
      if (res && res.success) {
        setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
        setCookie("refreshToken", res.refreshToken);
      }
    })
    .then(() => {
      getUserRequest(dispatch, userApi, GET_USER_REQUEST, GET_USER_SUCCESS);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUser = () => (dispatch) => {
  getUserRequest(
    dispatch,
    userApi,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    updateToken
  );
};

export const forgotPassword = (email, func) => {
  userApi
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

export const resetPassword = (password, token, func) => {
  userApi
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
