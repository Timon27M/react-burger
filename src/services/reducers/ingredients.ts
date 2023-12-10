import { TIngradientObj } from "../../utils/types";
import {
  GET_INGRADIENTS_FAILED,
  GET_INGRADIENTS_SUCCESS,
  GET_INGRADIENTS_REQUEST,
  TIndgredientsActions,
} from "../actions/ingredients";

type TIngredientsState = {
  ingredients: Array<TIngradientObj>,
  isLoading: boolean,
}

const initialState: TIngredientsState = {
  ingredients: [],
  isLoading: false,
};

const ingredientsReducer = (state = initialState, action: TIndgredientsActions) => {
  switch (action.type) {
    case GET_INGRADIENTS_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_INGRADIENTS_SUCCESS: {
      return { ...state, ingredients: action.payload, isLoading: false };
    }
    case GET_INGRADIENTS_FAILED: {
      return { ...state, ingredients: [], isLoading: false };
    }
    default: {
      return state;
    }
  }
};

export default ingredientsReducer;
