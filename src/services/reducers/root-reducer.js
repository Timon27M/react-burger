import { combineReducers } from "redux";
import ingredientsReducer from "./ingredients";
import burgerConstructorReducer from "./burger-constructor";
import orderReducer from "./order";
import ingredientDetailsReducer from "./ingredient-details";
import currentUserReducer from "./current-user";
import resetPasswordReducer from "./reset-password";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: burgerConstructorReducer,
  ingredientDetails: ingredientDetailsReducer,
  order: orderReducer,
  currentUser: currentUserReducer,
  resetPassword: resetPasswordReducer,
});

export default rootReducer;
