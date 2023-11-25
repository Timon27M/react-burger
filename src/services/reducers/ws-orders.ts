import { TOrder } from "../../utils/types";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  TWSOrdersActions
} from "../actions/ws-orders";

type TWSOrdersState = {
    WSConnected: boolean,
    orders: Array<TOrder>,
    count: number,
    countToday: number,
}

const initialState: TWSOrdersState = {
    WSConnected: false,
    orders: [],
    count: 0,
    countToday: 0
}

const wsOrdersReducer = (state = initialState, action: TWSOrdersActions) => {
    switch (action.type) {
        case WS_CONNECTION_START: {
            return {
                ...state
            }
        }
        case WS_CONNECTION_SUCCESS: {
            return {
                ...state,
                WSConnected: true
            }
        }
        case WS_CONNECTION_ERROR: {
            return {
                ...state,
                WSConnected: false
            }
        }
        case WS_CONNECTION_CLOSED: {
            return {
                ...state,
                WSConnected: false
            }
        }
        case WS_GET_MESSAGE: {
            return {
                ...state,
                orders: action.payload.orders,
                count: action.payload.count,
                countToday: action.payload.countToday,
                
            }
        }
        default: {
            return state;
        }
    }
}

export default wsOrdersReducer;
