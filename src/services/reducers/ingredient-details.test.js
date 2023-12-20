import {
  OPEN_INGREDIENT_POPUP,
  CLOSE_INGREDIENT_POPUP,
} from "../actions/ingredient-details";

import ingredientDetailsReducer from "./ingredient-details";

describe("ingredient-details", () => {
  const initialState = {
    isPopupOpened: false,
  };

  test("test initial state", () => {
    expect(ingredientDetailsReducer(undefined, {})).toEqual(initialState);
  });

  test("open ingredient popup", () => {
    const action = { type: OPEN_INGREDIENT_POPUP };

    expect(ingredientDetailsReducer(initialState, action)).toEqual({
      ...initialState,
      isPopupOpened: true,
    });
  });

  test("close ingredient popup", () => {
    const action = { type: CLOSE_INGREDIENT_POPUP };

    expect(
      ingredientDetailsReducer(
        {
          ...initialState,
          isPopupOpened: true,
        },
        action
      )
    ).toEqual({
      ...initialState,
      isPopupOpened: false,
    });
  });
});
