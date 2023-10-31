import { configureStore } from "@reduxjs/toolkit";
import ingredientDetailsReducer from "../slice/ingredientDetails";
import ingredientsReducer from "../slice/ingredients";
import orderReducer from "../slice/order";
import burgerConstructorReducer from "../slice/burgerConstructor";

const rootReducer = {
  ingredients: ingredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  burgerConstructor: burgerConstructorReducer,
  order: orderReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
