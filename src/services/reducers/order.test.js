import {
  GET_ORDER_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  CLOSE_ORDER_POPUP,
} from "../actions/order";

import orderReducer from "./order";

describe("order", () => {
  const initialState = {
    orders: [],
    lastNumberOrder: null,
    isLoading: false,
    isOpenOrderPopup: false,
  };

  test("test initial state", () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  test("get order request", () => {
    const action = { type: GET_ORDER_REQUEST };

    expect(orderReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      isOpenOrderPopup: true,
    });
  });

  test("get order success", () => {
    const action = {
      type: GET_ORDER_SUCCESS,
      payload: {
        order: {
          number: 1234,
        },
      },
    };

    expect(
      orderReducer(
        {
          ...initialState,
          isLoading: true,
          isOpenOrderPopup: false,
        },
        action
      )
    ).toEqual({
      ...initialState,
      orders: [
        ...initialState.orders,
        {
          order: {
            number: 1234,
          },
        },
      ],
      isLoading: false,
      isOpenOrderPopup: true,
      lastNumberOrder: 1234,
    });
  });

    test('get order failed', () => {
      const action = { type: GET_ORDER_FAILED }

      expect(orderReducer({
        ...initialState,
        lastNumberOrder: 1234,
        isLoading: true
    }, action)).toEqual({
        ...initialState,
        lastNumberOrder: null,
        isLoading: false
    })
    })

    test('close order popup', () => {
      const action = { type: CLOSE_ORDER_POPUP }

      expect(orderReducer({
        ...initialState,
        isOpenOrderPopup: true
    }, action)).toEqual({
        ...initialState,
        isOpenOrderPopup: false
    })
    })

});
