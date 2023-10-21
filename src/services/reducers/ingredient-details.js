import {
  OPEN_INGREDIENT_POPUP,
  CLOSE_INGREDIENT_POPUP,
} from "../actions/ingredient-details";
const initialState = {
  ingredient: {},
  isPopupOpened: false,
};

const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_POPUP: {
      return { ...state, isPopupOpened: true, ingredient: action.payload };
    }
    case CLOSE_INGREDIENT_POPUP: {
      return { ...state, isPopupOpened: false, ingredient: {} };
    }
    default: {
      return state;
    }
  }
};

export default ingredientDetailsReducer;
