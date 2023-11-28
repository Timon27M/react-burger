import { TOrder } from "../../utils/types";

export const WS_USER_ORDERS_CONNECTION_START: "WS_USER_ORDERS_CONNECTION_START" = "WS_USER_ORDERS_CONNECTION_START";
export const WS_USER_ORDERS_CONNECTION_SUCCESS: "WS_USER_ORDERS_CONNECTION_SUCCESS" = "WS_USER_ORDERS_CONNECTION_SUCCESS";
export const WS_USER_ORDERS_CONNECTION_ERROR: "WS_USER_ORDERS_CONNECTION_ERROR" = "WS_USER_ORDERS_CONNECTION_ERROR";
export const WS_USER_ORDERS_CONNECTION_CLOSED: "WS_USER_ORDERS_CONNECTION_CLOSED" = "WS_USER_ORDERS_CONNECTION_CLOSED";
export const WS_USER_ORDERS_GET_MESSAGE: "WS_USER_ORDERS_GET_MESSAGE" = "WS_USER_ORDERS_GET_MESSAGE";

type TWSConnectionStartAction = {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_START;
};
type TWSConnectionSuccessAction = {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_SUCCESS;
};
type TWSConnectionErrorAction = {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_ERROR;
};
type TWSConnectionClosedAction = {
  readonly type: typeof WS_USER_ORDERS_CONNECTION_CLOSED;
};
type TWSGetMessageAction = {
  readonly type: typeof WS_USER_ORDERS_GET_MESSAGE;
  readonly payload: {
    orders: Array<TOrder>,
    total: number,
    totalToday: number,
  }
};

export type TWSOrdersActions =
  | TWSConnectionStartAction
  | TWSConnectionSuccessAction
  | TWSConnectionErrorAction
  | TWSConnectionClosedAction
  | TWSGetMessageAction;

  export type TWSStoreUserOrdersActions = {
    wsInit: typeof  WS_USER_ORDERS_CONNECTION_START,
    onOpen: typeof  WS_USER_ORDERS_CONNECTION_SUCCESS,
    onClose: typeof WS_USER_ORDERS_CONNECTION_CLOSED,
    onError: typeof  WS_USER_ORDERS_CONNECTION_ERROR,
    onMessage: typeof  WS_USER_ORDERS_GET_MESSAGE,
  };