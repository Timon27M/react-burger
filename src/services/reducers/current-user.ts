import { TUserInfo } from "../../utils/types";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  DELETE_USER,
  TCurrentUserActions,
  UPDATE_TOKEN,
} from "../actions/current-user";

type TCurrentUserState = {
  isLoading: boolean;
  currentUser: TUserInfo;
  isLoggedIn: boolean;
  refreshToken: string | null;
  accessToken: string | null;
};

const initialState: TCurrentUserState = {
  refreshToken: null,
  accessToken: null,
  isLoading: false,
  currentUser: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
};

const currentUserReducer = (
  state = initialState,
  action: TCurrentUserActions
) => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload.user,
        refreshToken: action.payload.refreshToken,
        accessToken: action.payload.accessToken,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        currentUser: { name: "", email: "" },
        refreshToken: null,
        accessToken: null,
        isLoggedIn: false,
        isLoading: false,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        currentUser: { name: "", email: "" },
        refreshToken: null,
        accessToken: null,
        isLoggedIn: false,
        isLoading: false,
      };
    }
    case UPDATE_TOKEN: {
      return {
        ...state,
        refreshToken: action.payload.refreshToken,
        accessToken: action.payload.accessToken,
      };
    }
    default: {
      return state;
    }
  }
};

export default currentUserReducer;
