import api from "../../utils/api";
import { deleteCookie, getCookie, setCookie } from "../../utils/cookie";
import { getUserRequest } from "../../utils/functions";
import { AppDispacth } from "../../utils/type-hooks";
import { TUserObj } from "../../utils/types";
import { WS_USER_ORDERS_CONNECTION_CLOSED } from "./ws-user-orders";

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_FAILED: "GET_USER_FAILED" = "GET_USER_FAILED";

export const DELETE_USER: "DELETE_USER" = "DELETE_USER";
export const UPDATE_TOKEN: "UPDATE_TOKEN" = "UPDATE_TOKEN";

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
              accessToken: res.accessToken.split("Bearer ")[1],
              refreshToken: res.refreshToken,
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
              accessToken: res.accessToken.split("Bearer ")[1],
              refreshToken: res.refreshToken,
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
      dispatch({ type: WS_USER_ORDERS_CONNECTION_CLOSED });
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
            accessToken: getCookie('accessToken'),
            refreshToken: getCookie('refreshToken'),
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
        dispatch({
          type: UPDATE_TOKEN,
          payload: {
            accessToken: res.accessToken.split("Bearer ")[1],
            refreshToken: res.refreshToken,
          },
        });
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
    accessToken: string | null;
    refreshToken: string | null;
  };
};

type TGetUserFailedAction = {
  readonly type: typeof GET_USER_FAILED;
};

type TDeleteUserAction = {
  readonly type: typeof DELETE_USER;
};
type TUPDATE_TOKEN = {
  readonly type: typeof UPDATE_TOKEN;
  readonly payload: {
    accessToken: string | null;
    refreshToken: string | null;
  };
};

export type TCurrentUserActions =
  | TGetUserRequestAction
  | TGetUserSuccessAction
  | TGetUserFailedAction
  | TDeleteUserAction
  | TUPDATE_TOKEN;
