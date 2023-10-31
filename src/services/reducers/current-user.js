import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  DELETE_USER,
} from "../actions/current-user";

const initialState = {
  isLoading: false,
  error: null,
  currentUser: {
    name: "",
    email: "",
  },
  isLoggedIn: false,
  refreshToken: "",
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload.user,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        currentUser: { name: "", email: "" },
        isLoggedIn: false,
        isLoading: false,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        currentUser: { name: "", email: "" },
        isLoggedIn: false,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
};

export default currentUserReducer;
