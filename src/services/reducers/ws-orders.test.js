import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  TWSOrdersActions,
} from "../actions/ws-orders";

import wsOrdersReducer from "./ws-orders";

describe("ws orders", () => {
  const initialState = {
    WSConnected: false,
    orders: [],
    total: 0,
    totalToday: 0,
  };

  test("test initial state", () => {
    expect(wsOrdersReducer(undefined, {})).toEqual(initialState);
  });

  test("ws connection start", () => {
    const action = { type: WS_CONNECTION_START };
    expect(wsOrdersReducer(initialState, action)).toEqual(initialState);
  });

  test("ws connection success", () => {
    const action = { type: WS_CONNECTION_SUCCESS };
    expect(
      wsOrdersReducer(
        {
          ...initialState,
          WSConnected: false,
        },
        action
      )
    ).toEqual({
      ...initialState,
      WSConnected: true,
    });
  });

  test("ws connection error", () => {
    const action = { type: WS_CONNECTION_ERROR };
    expect(
      wsOrdersReducer(
        {
          ...initialState,
          WSConnected: true,
        },
        action
      )
    ).toEqual({
      ...initialState,
      WSConnected: false,
    });
  });

  test("ws connection closed", () => {
    const action = { type: WS_CONNECTION_ERROR };
    expect(
      wsOrdersReducer(
        {
          ...initialState,
          WSConnected: true,
        },
        action
      )
    ).toEqual({
      ...initialState,
      WSConnected: false,
    });
  });

  test("ws get message", () => {
    const action = {
      type: WS_GET_MESSAGE,
      payload: {
        orders: ["hello", "7183"],
        total: 8765,
        totalToday: 19000,
      },
    };
    expect(wsOrdersReducer(initialState, action)).toEqual({
      ...initialState,
      orders: ["hello", "7183"],
      total: 8765,
      totalToday: 19000,
    });
  });
});
