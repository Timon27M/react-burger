import {
  GET_INGRADIENTS_FAILED,
  GET_INGRADIENTS_SUCCESS,
  GET_INGRADIENTS_REQUEST,
} from "../actions/ingredients";

import ingredientsReducer from "./ingredients";

describe("ingredients", () => {
  const testBurgerConstructorSauce = {
    _id: "1234",
    name: "string",
    type: "sauce",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 110,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
  };

  const initialState = {
    ingredients: [],
    isLoading: false,
  };

  test("test initial state", () => {
    expect(ingredientsReducer(undefined, {})).toEqual(initialState);
  });

  test("get ingredient request", () => {
    const action = { type: GET_INGRADIENTS_REQUEST };

    expect(ingredientsReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test("get ingredient success", () => {
    const action = {
      type: GET_INGRADIENTS_SUCCESS,
      payload: [testBurgerConstructorSauce],
    };

    expect(
      ingredientsReducer(
        {
          ...initialState,
          isLoading: true,
        },
        action
      )
    ).toEqual({
      ...initialState,
      isLoading: false,
      ingredients: [testBurgerConstructorSauce],
    });
  });

  test("get ingredient failed", () => {
    const action = { type: GET_INGRADIENTS_FAILED };

    expect(
      ingredientsReducer(
        {
          ...initialState,
          isLoading: false,
          ingredients: [testBurgerConstructorSauce],
        },
        action
      )
    ).toEqual({
      ...initialState,
      ingredients: [],
      isLoading: false,
    });
  });
});
