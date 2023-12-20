import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  DELETE_USER,
  TCurrentUserActions,
  UPDATE_TOKEN,
} from "../actions/current-user";

import currentUserReducer from "./current-user";

describe("current-user", () => {
  const initialState = {
    refreshToken: null,
    accessToken: null,
    isLoading: false,
    currentUser: {
      name: "",
      email: "",
    },
    isLoggedIn: false,
  };

  test("test initial state", () => {
    expect(currentUserReducer(undefined, {})).toEqual(initialState);
  });

  test("get user request", () => {
    const action = { type: GET_USER_REQUEST };
    expect(currentUserReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test("get user success", () => {
    const action = {
      type: GET_USER_SUCCESS,
      payload: {
        user: {
          name: "VASIA",
          email: "qqq@qq.qq",
        },
        refreshToken: "1234",
        accessToken: "4321",
      },
    };
    expect(
      currentUserReducer({ ...initialState, isLoading: true }, action)
    ).toEqual({
      ...initialState,
      refreshToken: "1234",
      accessToken: "4321",
      currentUser: {
        name: "VASIA",
        email: "qqq@qq.qq",
      },
      isLoading: false,
      isLoggedIn: true,
    });
  });

  test("get user failed", () => {
    const action = { type: GET_USER_FAILED };
    expect(
      currentUserReducer(
        {
          ...initialState,
          refreshToken: "1234",
          accessToken: "4321",
          currentUser: {
            name: "VASIA",
            email: "qqq@qq.qq",
          },
          isLoading: false,
          isLoggedIn: true,
        },
        action
      )
    ).toEqual({
      ...initialState,
      currentUser: { name: "", email: "" },
      refreshToken: null,
      accessToken: null,
      isLoggedIn: false,
      isLoading: false,
    });
  });

  test("delete user", () => {
    const action = { type: DELETE_USER };
    expect(
      currentUserReducer(
        {
          ...initialState,
          refreshToken: "1234",
          accessToken: "4321",
          currentUser: {
            name: "VASIA",
            email: "qqq@qq.qq",
          },
          isLoading: false,
          isLoggedIn: true,
        },
        action
      )
    ).toEqual({
      ...initialState,
      currentUser: { name: "", email: "" },
      refreshToken: null,
      accessToken: null,
      isLoggedIn: false,
      isLoading: false,
    });
  });

  test("update token", () => {
    const action = {
      type: UPDATE_TOKEN,
      payload: {
        refreshToken: "1234",
        accessToken: "4321",
      },
    };
    expect(currentUserReducer(initialState, action)).toEqual({
      ...initialState,
      refreshToken: "1234",
      accessToken: "4321",
    });
  });
});
