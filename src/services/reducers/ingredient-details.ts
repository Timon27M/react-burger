import {
  OPEN_INGREDIENT_POPUP,
  CLOSE_INGREDIENT_POPUP,
  TIngredientDetailsActions,
} from "../actions/ingredient-details";

type TIngredientDetailsState = {
  isPopupOpened: boolean
}

const initialState: TIngredientDetailsState = {
  isPopupOpened: false,
};

const ingredientDetailsReducer = (state = initialState, action: TIngredientDetailsActions) => {
  switch (action.type) {
    case OPEN_INGREDIENT_POPUP: {
      return { ...state, isPopupOpened: true };
    }
    case CLOSE_INGREDIENT_POPUP: {
      return { ...state, isPopupOpened: false };
    }
    default: {
      return state;
    }
  }
};

export default ingredientDetailsReducer;
