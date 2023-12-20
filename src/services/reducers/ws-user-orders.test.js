import {
  WS_USER_ORDERS_CONNECTION_START,
  WS_USER_ORDERS_CONNECTION_SUCCESS,
  WS_USER_ORDERS_CONNECTION_ERROR,
  WS_USER_ORDERS_CONNECTION_CLOSED,
  WS_USER_ORDERS_GET_MESSAGE,
  TWSOrdersActions,
} from "../actions/ws-user-orders";

import wsUserOrdersReducer from "./ws-user-orders";

describe("ws orders", () => {
  const initialState = {
    WSConnected: false,
    userOrders: [],
    total: 0,
    totalToday: 0,
  };

  const orders = ["hello", "7183"];

  test("test initial state", () => {
    expect(wsUserOrdersReducer(undefined, {})).toEqual(initialState);
  });

  test("ws user connection start", () => {
    const action = { type: WS_USER_ORDERS_CONNECTION_START };
    expect(wsUserOrdersReducer(initialState, action)).toEqual(initialState);
  });

  test("ws user connection success", () => {
    const action = { type: WS_USER_ORDERS_CONNECTION_SUCCESS };
    expect(
      wsUserOrdersReducer(
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

  test("ws user connection error", () => {
    const action = { type: WS_USER_ORDERS_CONNECTION_ERROR };
    expect(
      wsUserOrdersReducer(
        {
          ...initialState,
          WSConnected: true,
          userOrders: orders,
        },
        action
      )
    ).toEqual({
      ...initialState,
      WSConnected: false,
      userOrders: [],
    });
  });

  test("ws user connection closed", () => {
    const action = { type: WS_USER_ORDERS_CONNECTION_CLOSED };
    expect(
      wsUserOrdersReducer(
        {
          ...initialState,
          WSConnected: true,
          userOrders: orders,
        },
        action
      )
    ).toEqual({
      ...initialState,
      WSConnected: false,
      userOrders: [],
    });
  });

  test("ws user get message", () => {
    const action = {
      type: WS_USER_ORDERS_GET_MESSAGE,
      payload: {
        orders: ["hello", "7183"],
        total: 8765,
        totalToday: 19000,
      },
    };
    expect(wsUserOrdersReducer(initialState, action)).toEqual({
      ...initialState,
      userOrders: ["hello", "7183"],
      total: 8765,
      totalToday: 19000,
    });
  });
});
