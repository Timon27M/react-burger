import { Middleware } from "redux";
import { AppActions } from "../services/store/store";
import { TWSStoreActions } from "../services/actions/ws-orders";
import { TWSStoreUserOrdersActions } from "../services/actions/ws-user-orders";
import { getCookie } from "./cookie";

const accessToken: string | undefined = getCookie('accessToken')

export const socketMiddleware = (
  wsUrl: string,
  wsActions: TWSStoreActions | TWSStoreUserOrdersActions
): Middleware => {
  return (store) => {
    let socket: null | WebSocket = null;

    return (next) => (action: AppActions) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, onOpen, onClose, onError, onMessage } = wsActions;

      if (type === wsInit) {
      socket = new WebSocket(`${wsUrl}?token=${accessToken}`);
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
          console.log(dataParsed)
          const { success, ...restDataParsed } = dataParsed;
          console.log(restDataParsed)
          dispatch({
            type: onMessage,
            payload: restDataParsed
          });
        };
      }
      next(action);
    };
  };
};
