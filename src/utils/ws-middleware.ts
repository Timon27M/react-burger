import { Middleware } from "redux";
import { AppActions } from "../services/store/store";
import { TWSStoreActions } from "../services/actions/ws-orders";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: TWSStoreActions
): Middleware => {
  return (store) => {
    let socket: null | WebSocket = null;

    return (next) => (action: AppActions) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsInit) {
        socket = new WebSocket(wsUrl);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const dataParsed = JSON.parse(data);
          const obj = {
            orders: dataParsed.orders,
            count: dataParsed.total,
            countToday: dataParsed.totalToday,
          };
          dispatch({
            type: onMessage,
            payload: obj
          });
        };
      }
      next(action);
    };
  };
};
