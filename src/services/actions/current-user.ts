import api from "../../utils/api";
import { deleteCookie, setCookie } from "../../utils/cookie";
import { getUserRequest } from "../../utils/functions";
import { AppDispacth } from "../../utils/type-hooks";
import { TUserObj } from "../../utils/types";

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_FAILED: "GET_USER_FAILED" = "GET_USER_FAILED";

export const DELETE_USER = "DELETE_USER";

// interface ILoginUser {
//   email: string;
//   password: string;
// }

export const loginUser =
  ({ email, password }: any) =>
  (dispatch: AppDispacth) => {
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
  ({ name, email, password }: any) =>
  (dispatch: AppDispacth) => {
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

export const logoutUser = () => (dispatch: AppDispacth) => {
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

export const updateUser = (data: any) => (dispatch: AppDispacth) => {
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

const updateToken = () => (dispatch: AppDispacth) => {
  api
    .updateToken()
    .then((res) => {
      if (res && res.success) {
        setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
        setCookie("refreshToken", res.refreshToken);
      }
    })
    .then(() => {
      getUserRequest(
        dispatch,
        api,
        GET_USER_REQUEST,
        GET_USER_SUCCESS,
        updateToken
      );
    })
    .catch((err) => {
      console.log(err);
      api.logoutUser();
      deleteCookie("accessToken");
      deleteCookie("refreshToken");
    });
};

export const getUser = () => (dispatch: AppDispacth) => {
  getUserRequest(
    dispatch,
    api,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    updateToken
  );
};

export const forgotPassword = (email: string, func: () => void) => () => {
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

export const resetPassword =
  (password: string, token: string, func: () => void) => () => {
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

type TGetUserRequestAction = {
  readonly type: typeof GET_USER_REQUEST;
};

type TGetUserSuccessAction = {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: {
    user: TUserObj;
  };
};

type TGetUserFailedAction = {
  readonly type: typeof GET_USER_FAILED;
};

type TDeleteUserAction = {
  readonly type: typeof DELETE_USER;
};

export type TCurrentUserActions =
  | TGetUserRequestAction
  | TGetUserSuccessAction
  | TGetUserFailedAction
  | TDeleteUserAction;
